import { formValidation } from "$digerati/formValidation";
import { skipToMainContent } from "$digerati/skipToMainContent";

window.Webflow || [];
window.Webflow.push(() => {
  skipToMainContent();
  formValidation();
});