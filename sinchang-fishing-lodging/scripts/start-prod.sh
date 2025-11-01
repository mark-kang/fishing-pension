#!/bin/bash

# Navigate to the frontend directory and build the project
cd frontend
npm install
npm run build

# Navigate to the backend directory and install dependencies
cd ../backend
npm install

# Start the backend server
npm start &

# Start the frontend server
cd ../frontend
npm run serve