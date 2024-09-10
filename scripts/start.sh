#!/bin/bash

set -x  # Enable debugging

# Print the current directory
echo "Current Directory: $(pwd)"
echo "Starting script execution..."

# Define backend and frontend directories
BACKEND_DIR="../backend"
FRONTEND_DIR="../frontend"

# Navigate to backend directory and install dependencies
echo "Navigating to backend directory..."
cd "$BACKEND_DIR" || { echo "Failed to change directory to $BACKEND_DIR"; exit 1; }
echo "Installing backend dependencies..."
npm install || { echo "Backend installation failed!"; exit 1; }

# Navigate to frontend directory and install dependencies
echo "Navigating to frontend directory..."
cd "$FRONTEND_DIR" || { echo "Failed to change directory to $FRONTEND_DIR"; exit 1; }
echo "Installing frontend dependencies..."
npm install || { echo "Frontend installation failed!"; exit 1; }

# Start backend and frontend servers
echo "Starting backend server..."
cd "$BACKEND_DIR" && npm run start &

echo "Starting frontend server..."
cd "$FRONTEND_DIR" && npm run start

echo "Script execution completed."
