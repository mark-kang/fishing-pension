#!/bin/bash

# Navigate to the frontend directory and start the development server
cd frontend
npm install
npm run dev &

# Navigate to the backend directory and start the development server
cd ../backend
npm install
npm run dev &

# Wait for both servers to start
wait