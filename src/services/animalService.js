/**
 * animalService.js
 *
 * Handles API requests related to animals from the backend.
 *
 * Author: Collin Lanier
 * Date: April 7, 2025
 */

const ORI_URL = "http://localhost:5050/api/animals";

export const fetchAnimals = async (page = 1, limit = 10, filter = null) => {
  try {
    let url = `${ORI_URL}?page=${page}&limit=${limit}`;
    if (filter && filter !== "Reset") {
      url += `&filter=${encodeURIComponent(filter)}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API fetchAnimals error:", error);
    throw error;
  }
};
