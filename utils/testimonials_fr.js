// utils/testimonials.js
import testimonials from "~/assets/json/testimonials_fr.json";

export const getCherryPickedTestimonialsFR = (indices) => {
  return indices.map((index) => testimonials[index]);
};
