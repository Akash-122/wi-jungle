# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.30

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files\CMake\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files\CMake\bin\cmake.exe" -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = D:\webdevelopment\WiJungle\backend

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = D:\webdevelopment\WiJungle\build

# Include any dependencies generated for this target.
include CMakeFiles/my_server.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/my_server.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/my_server.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/my_server.dir/flags.make

CMakeFiles/my_server.dir/server.cpp.obj: CMakeFiles/my_server.dir/flags.make
CMakeFiles/my_server.dir/server.cpp.obj: CMakeFiles/my_server.dir/includes_CXX.rsp
CMakeFiles/my_server.dir/server.cpp.obj: D:/webdevelopment/WiJungle/backend/server.cpp
CMakeFiles/my_server.dir/server.cpp.obj: CMakeFiles/my_server.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=D:\webdevelopment\WiJungle\build\CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/my_server.dir/server.cpp.obj"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/my_server.dir/server.cpp.obj -MF CMakeFiles\my_server.dir\server.cpp.obj.d -o CMakeFiles\my_server.dir\server.cpp.obj -c D:\webdevelopment\WiJungle\backend\server.cpp

CMakeFiles/my_server.dir/server.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/my_server.dir/server.cpp.i"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E D:\webdevelopment\WiJungle\backend\server.cpp > CMakeFiles\my_server.dir\server.cpp.i

CMakeFiles/my_server.dir/server.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/my_server.dir/server.cpp.s"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S D:\webdevelopment\WiJungle\backend\server.cpp -o CMakeFiles\my_server.dir\server.cpp.s

# Object files for target my_server
my_server_OBJECTS = \
"CMakeFiles/my_server.dir/server.cpp.obj"

# External object files for target my_server
my_server_EXTERNAL_OBJECTS =

my_server.exe: CMakeFiles/my_server.dir/server.cpp.obj
my_server.exe: CMakeFiles/my_server.dir/build.make
my_server.exe: CMakeFiles/my_server.dir/linkLibs.rsp
my_server.exe: CMakeFiles/my_server.dir/objects1.rsp
my_server.exe: CMakeFiles/my_server.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir=D:\webdevelopment\WiJungle\build\CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable my_server.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\my_server.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/my_server.dir/build: my_server.exe
.PHONY : CMakeFiles/my_server.dir/build

CMakeFiles/my_server.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\my_server.dir\cmake_clean.cmake
.PHONY : CMakeFiles/my_server.dir/clean

CMakeFiles/my_server.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" D:\webdevelopment\WiJungle\backend D:\webdevelopment\WiJungle\backend D:\webdevelopment\WiJungle\build D:\webdevelopment\WiJungle\build D:\webdevelopment\WiJungle\build\CMakeFiles\my_server.dir\DependInfo.cmake "--color=$(COLOR)"
.PHONY : CMakeFiles/my_server.dir/depend

