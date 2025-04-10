/**
 * animalService.js
 *
 * CRUD operations for the animals database
 *
 * Author: Collin Lanier
 * Date: April 7, 2025
 */

import Animal from "../models/Animal";

// CREATE
export const addAnimals = async (data) => {
  if (!data || typeof data !== "object") throw new Error("Invalid data");
  const result = await Animal.create(data);
  return result;
};

// READ
export const getAnimals = async (query = {}) => {
  const animals = await Animal.find(query).select("-__v");
  return animals;
};

// UPDATE
export const updateAnimals = async (query, updateData) => {
  if (!query || !updateData) throw new Error("Missing query or update data");
  const result = await Animal.updateMany(query, { $set: updateData });
  return result.modifiedCount;
};

//DELETE
export const deleteAnimals = async (query) => {
  if (!query) throw new Error("Missing query");
  const result = await Animal.deleteMany(query);
  return result.deletedCountl;
};
