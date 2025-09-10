// src/utils.js
export const getImageUrl = (path) => {
  try {
    // Use relative path from utils.js to src/assets
    return new URL(`/src/assets/${path}`, import.meta.url).href;
  } catch (err) {
    console.error("Failed to load image:", path, err);
    return ""; // fallback if image not found
  }
};
