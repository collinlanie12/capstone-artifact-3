/**
 * server.js
 *
 * Node + Express backend server for the Dashboard.
 * Connects to MongoDB, and sets up API routes.
 *
 * Author: Collin Lanier
 * Date: April 5, 2025
 */

import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";

import animalRoutes from "./routes/animalRoutes.js";

dotenv.config();

// Create an Express app
const app = express();

app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/api/animals", animalRoutes);

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
