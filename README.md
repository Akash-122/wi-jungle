# Wi-Jungle Unified Cyber Security Platform

This project is a Unified Cyber Security Platform featuring a scientific calculator and a user login system. It is an Electron desktop app with a React frontend using Vite and a C++ backend server for handling user login and registration.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Running the Frontend](#running-the-frontend)
  - [Running the Backend](#running-the-backend)
- [API Endpoints](#api-endpoints)
- [Notes](#notes)
- [License](#license)

## Prerequisites

- C++ compiler (e.g., g++)
- [cpp-httplib](https://github.com/yhirose/cpp-httplib) library
- Node.js and npm
- [Electron](https://www.electronjs.org/)
- [Vite](https://vitejs.dev/)

## Setup

### Frontend Setup

1. **Clone the repository** (if not already cloned):
    ```sh
    git clone https://github.com/Akash-122/wi-jungle.git
    cd wi-jungle
    ```

2. **Navigate to the frontend directory**:
    ```sh
    cd wi-jungle
    ```

3. **Install the dependencies**:
    ```sh
    npm install
    ```

4. **Start the development server**:
    ```sh
    npm run dev
    ```

### Backend Setup

1. **Navigate to the backend directory**:
    ```sh
    cd backend
    ```

2. **Download `cpp-httplib` library**:
    - Download the `httplib.h` file from the [cpp-httplib repository](https://github.com/yhirose/cpp-httplib) and place it in the `backend` directory.

3. **Compile the server**:
    ```sh
    g++ -o server server.cpp -I . -lws2_32
    ```

4. **Run the server**:
    ```sh
    ./server
    ```

## Project Structure

- **wi-jungle**: Contains the React frontend application, set up with Vite and Electron.
- **backend/**: Contains the C++ backend server code.


## API Endpoints

- **POST /login**: Handle user login.
- **POST /register**: Handle user registration.

## Notes

- Ensure the `cpp-httplib` library is correctly placed in the `backend` directory for successful compilation.
- The frontend application runs as an Electron desktop app.
- The frontend development server runs on `http://localhost:3000` by default.
- The backend server runs on `http://localhost:8080` by default.


