/**
 * animalController.js
 *
 * Controller for fetching animal data with the filters.
 *
 * Author: Collin Lanier
 * Date: April 6, 2025
 */

import Animal from "../models/Animal.js";

const getAnimals = async (req, res) => {
  try {
    const { filter, page = 1, limit = 10 } = req.query;
    let query = {};

    const skip = (page - 1) * limit;

    if (filter === "Water Rescue") {
      query = {
        breed: {
          $in: [
            "Labrador Retriever Mix",
            "Chesapeake Bay Retriever",
            "Newfoundland",
          ],
        },
        age_upon_outcome_in_weeks: { $gte: 26, $lte: 156 },
        sex_upon_outcome: "Intact Female",
      };
    } else if (filter === "Mountain or Wilderness Rescue") {
      query = {
        breed: {
          $in: [
            "German Shepard",
            "Alaskan Malamute",
            "Old English Sheepdog",
            "Siberian Husky",
            "Rottweiler",
          ],
        },
        age_upon_outcome_in_weeks: { $gte: 26, $lte: 156 },
        sex_upon_outcome: "Intact Male",
      };
    } else if (filter === "Disaster or Individual Tracking") {
      query = {
        breed: {
          $in: [
            "Doberman Pinscher",
            "German Shepard",
            "Golden Retriever",
            "Bloodhound",
            "Rottweiler",
          ],
        },
        age_upon_outcome_in_weeks: { $gte: 20, $lte: 300 },
        sex_upon_outcome: "Intact Male",
      };
    } else if (filter === "Dog" || filter === "Cat") {
      query = { animal_type: filter };
    }

    // Find animals in the database that match the filter, and don't include the "__v" field (used by MongoDB for versioning)
    const animals = await Animal.find(query)
      .select("-__v")
      .skip(skip)
      .limit(parseInt(limit)); // Only return X per page

    res.json(animals);
  } catch (err) {
    console.error("Failed to fetch animals:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

export default getAnimals;
