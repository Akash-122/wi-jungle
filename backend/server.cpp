// server.cpp
#include "crow_all.h"
#include <unordered_map>
#include <string>
#include <fstream>
#include <iostream>
#include <mutex>

std::unordered_map<std::string, std::string> users;
std::mutex users_mutex;

// Function to hash a string (simple example, replace with a better hash function if needed)
std::string hashString(const std::string &str) {
    std::hash<std::string> hasher;
    return std::to_string(hasher(str));
}

// Function to load user data from file
void loadUserData(const std::string &filename) {
    std::ifstream file(filename);
    if (file.is_open()) {
        std::string username, password;
        while (file >> username >> password) {
            users[username] = password;
        }
        file.close();
    }
}

// Function to save user data to file
void saveUserData(const std::string &filename) {
    std::ofstream file(filename);
    if (file.is_open()) {
        for (const auto &user : users) {
            file << user.first << " " << user.second << std::endl;
        }
        file.close();
    }
}

int main() {
    loadUserData("users.txt");

    crow::SimpleApp app;

    // User registration endpoint
    CROW_ROUTE(app, "/register").methods("POST"_method)([](const crow::request& req) {
        auto body = crow::json::load(req.body);
        if (!body)
            return crow::response(400, "Invalid JSON");

        std::string username = body["username"].s();
        std::string password = body["password"].s();

        std::lock_guard<std::mutex> guard(users_mutex);
        if (users.find(username) != users.end())
            return crow::response(400, "Username already exists");

        users[username] = hashString(password);
        saveUserData("users.txt");
        return crow::response(200, "User registered successfully");
    });

    // User login endpoint
    CROW_ROUTE(app, "/login").methods("POST"_method)([](const crow::request& req) {
        auto body = crow::json::load(req.body);
        if (!body)
            return crow::response(400, "Invalid JSON");

        std::string username = body["username"].s();
        std::string password = body["password"].s();

        std::lock_guard<std::mutex> guard(users_mutex);
        if (users.find(username) == users.end() || users[username] != hashString(password))
            return crow::response(400, "Invalid username or password");

        return crow::response(200, "Login successful");
    });

    app.port(18080).multithreaded().run();
    return 0;
}
