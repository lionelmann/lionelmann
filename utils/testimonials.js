// utils/testimonials.js
import testimonials from "~/assets/json/testimonials.json";

export const getCherryPickedTestimonials = (indices) => {
  return indices.map((index) => testimonials[index]);
};
