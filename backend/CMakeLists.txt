cmake_minimum_required(VERSION 3.10)
project(MyProject)

# Set the C++ standard
set(CMAKE_CXX_STANDARD 17)

# Add your source files here
add_executable(my_executable main.cpp)

# Specify the vcpkg toolchain file
set(CMAKE_TOOLCHAIN_FILE "D:/webdevelopment/vcpkg/scripts/buildsystems/vcpkg.cmake")
