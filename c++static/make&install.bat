mkdir sln
cd sln
cmake ..
cmake --build . --target install --clean-first --config Debug
cmake --build . --target install --clean-first --config Release
cd ..
rmdir /s /q sln
