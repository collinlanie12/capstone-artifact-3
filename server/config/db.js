/**
 * db.js
 *
 * MongoDB connection config for the dashboard backend.
 * Uses Mongoose to connect to cloud-hosted MongoDB Atlas cluster.
 *
 * Author: Collin Lanier
 * Date: April 5, 2025
 */

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
