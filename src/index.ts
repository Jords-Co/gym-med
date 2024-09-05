import { formValidation } from "$digerati/formValidation";
import { skipToMainContent } from "$digerati/skipToMainContent";
import { currentYear } from "$digerati/currentYear";
import { blurInElements } from "$gym-med/blurInElements";

window.Webflow || [];
window.Webflow.push(() => {
  skipToMainContent();
  formValidation();
  currentYear();
  blurInElements();
});