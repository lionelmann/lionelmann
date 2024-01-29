// utils/testimonials.js
import testimonials from "~/assets/json/testimonials_en.json";

export const getCherryPickedTestimonialsEN = (indices) => {
  return indices.map((index) => testimonials[index]);
};
