cmake_minimum_required(VERSION 3.10)
project(backend)

set(CMAKE_CXX_STANDARD 17)

# Add SQLite
add_library(sqlite3 STATIC src/sqlite/sqlite3.c)

# Include directories
include_directories(src/sqlite)

# Add executable
add_executable(backend src/main.cpp src/db.cpp src/user.cpp)

# Link SQLite library
target_link_libraries(backend PRIVATE sqlite3)
