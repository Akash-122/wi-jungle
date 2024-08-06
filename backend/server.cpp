#include "httplib.h"
#include <iostream>
#include <string>
#include <unordered_map>
#include <fstream>
#include <sstream>

// File to store user credentials
const std::string users_file = "users.txt";

// Function to read users from the file
std::unordered_map<std::string, std::string> read_users_from_file() {
    std::unordered_map<std::string, std::string> users;
    std::ifstream infile(users_file);
    std::string line;

    while (std::getline(infile, line)) {
        std::istringstream iss(line);
        std::string username, password;
        if (iss >> username >> password) {
            users[username] = password;
        }
    }

    return users;
}

// Function to save a new user to the file
void save_user_to_file(const std::string& username, const std::string& password) {
    std::ofstream outfile(users_file, std::ios_base::app);
    outfile << username << " " << password << std::endl;
}

// Function to handle login requests
void handle_login(const httplib::Request& req, httplib::Response& res) {
    std::string username = req.get_param_value("username");
    std::string password = req.get_param_value("password");

    std::unordered_map<std::string, std::string> users = read_users_from_file();

    // Check user credentials
    if (users.find(username) != users.end()) {
        if (users[username] == password) {
            res.status = 200;
            res.set_content("Login successful", "text/plain");
        } else {
            res.status = 401;
            res.set_content("Invalid password", "text/plain");
        }
    } else {
        // User does not exist, create a new user
        save_user_to_file(username, password);
        res.status = 200;
        res.set_content("New user created and login successful", "text/plain");
    }
}

int main() {
    httplib::Server server;

    // CORS support
    server.set_default_headers({
        {"Access-Control-Allow-Origin", "*"},
        {"Access-Control-Allow-Methods", "POST, GET, OPTIONS"},
        {"Access-Control-Allow-Headers", "Content-Type"}
    });

    server.Post("/login", handle_login);

    std::cout << "Server started at http://localhost:18080" << std::endl;
    server.listen("localhost", 18080);

    return 0;
}
