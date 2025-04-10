# Grazioso Salvare Animal Dashboard

A full-stack web application for visualizing animal shelter data. This project was developed for the SNHU CS-499 Capstone course for database integration, and data-driven UI.

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
- Added pagination to view more data from database
- The pie chart now shows breed distribution based on current data being shown in the data table.
- Integrated React Leaflet map with live location markers
- Refactored code using reusable services and secure practices

## Project Screenshots

### Original Artifact

![Original Artifact](/src/assets/original_artifact.png)

### Enhanced Artifact

![Enhanced Artifact Image 1](/src/assets/enhanced_artifact_1.png)
![Enhanced Artifact Image 2](/src/assets/enhanced_artifact_2.png)
