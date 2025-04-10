/**
 * animalRoutes.js
 *
 * Routes for animal-related API endpoints.
 *
 * Author: Collin Lanier
 * Date: April 6, 2025
 */

import express from "express";
const router = express.Router();
import getAnimals from "../controllers/animalController.js";

router.get("/", getAnimals);

export default router;
