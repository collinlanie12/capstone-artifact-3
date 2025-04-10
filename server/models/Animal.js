/**
 * Animal.js
 *
 * Mongoose schema for animal documents.
 *
 * Author: Collin Lanier
 * Date: April 5, 2025
 */

import mongoose from "mongoose";

const AnimalSchema = new mongoose.Schema({
  age_upon_outcome: String,
  animal_id: String,
  animal_type: String,
  breed: String,
  color: String,
  date_of_birth: Date,
  datetime: String,
  monthyear: String,
  outcome_subtype: String,
  outcome_type: String,
  sex_upon_outcome: String,
  location_lat: Number,
  location_long: Number,
  age_upon_outcome_in_weeks: Number,
});

const Animal = mongoose.model("Animal", AnimalSchema);

export default Animal;
