@echo off
cls
echo importing

cd C:\Program Files\MongoDB\Tools\100\bin

start cmd.exe /k "mongoimport.exe C:\Code\random-user-browser\raw-data\addresses.json -d randomData -c addresses --jsonArray & mongoimport.exe C:\Code\random-user-browser\raw-data\users.json -d randomData -c users --jsonArray & mongoimport.exe C:\Code\random-user-browser\raw-data\companies.json -d randomData -c companies --jsonArray"

echo done
pause