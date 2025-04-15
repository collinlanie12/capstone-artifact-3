# Grazioso Salvare Animal Dashboard

A full-stack web application for visualizing animal shelter data. This project was developed for the SNHU CS-499 Capstone course for database integration, and data-driven UI.

You can find the difference between the original and enhanced artifacts through my pull request: [Fullstack enhancement for artifact 3](https://github.com/collinlanie12/capstone-artifact-3/pull/1)

## Project Overview

This dashboard allows users to:

- View animal data retrieved from a MongoDB database
- Filter animals by rescue category or type
- View breed distribution in a pie chart
- See a selected animal's location on a map

This project was originally built using Python and the Dash framework. The enhanced version rebuilds the functionality using the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern frontend practices.

## Dataset

The sample animal data used in this dashboard is located in `data/aac_shelter_outcomes.csv/` .
This file can be imported into MongoDB for local testing.

## Technologies used

### Frontend

- React.js
- Vite
- Radix UI
- Recharts (pie chart)
- React Leaflet (map)

### Backend

- Node.js
- Express.js
- MongoDB
- dotenv

### Tools

- Git
- VS code
- Postman

## Enhancements from Original Artifact

- Rebuilt Python-based dashboard into a full-stack MERN application
- Implemented filtering by animal type and rescue category using buttons
- The pie chart now shows breed distribution based on current data being shown in the data table.
- Integrated React Leaflet map with live location markers
- Refactored code using reusable services and secure practices

## Getting Started
Follow these steps to set up and run the Grazioso Salvare Dashboard full-stack application locally.

1. Clone the Repository
   ```bash
   git clone https://github.com/collinlanie12/capstone-artifact-3.git
   ```
2. Set Up the Backend
   Navigate to the `server` folder:
   ```bash
   cd server
   npm install
   ```
3. Create a `.env` file in the `server` folder and add your MongoDB connection string:
   ```bash
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```
   > _You can also use a local MongoDB connection string if you're running MongoDB locally._
4. Import the sample CSV data into MongoDB:
   You can use a MongoDB GUI like MongoDB Compass or run a command-line import using:
   ```bash
   mongoimport --uri YOUR_MONGO_URI --collection animals --type csv --headerline --file data/aac_shelter_outcomes.csv
5. Start the backend server:
   ```bash
   npm run dev
   ```
   This runs the Express API on `http://localhost:5050` or based on your configuration in the `.env`
6. Setup the Frontend
   In the root project directory, install frontend dependencies:
   ```bash
   npm install
   ```
7. Start the frontend development server:
   ```bash
   npm run dev
   ```
   This will run the React application on `http://localhost:5173`

> Note: Ensure both the frontend and backend servers are running at the same time for full functionality.

## Project Screenshots

### Original Artifact

![Original Artifact](/src/assets/original_artifact.png)

### Enhanced Artifact

![Enhanced Artifact Image 1](/src/assets/enhanced_artifact_1.png)
![Enhanced Artifact Image 2](/src/assets/enhanced_artifact_2.png)

## Author
Collin Lanier

Southern New Hampshire University

CS-499 Capstone Project - Artifact 2
