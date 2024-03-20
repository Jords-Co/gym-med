"use strict";(()=>{var d=()=>{console.log("Form Validation");class a{constructor(){this.displayValidationErrorMessage=this.displayValidationErrorMessage.bind(this),this.getErrorElements=this.getErrorElements.bind(this),this.getErrorMessages=this.getErrorMessages.bind(this),this.getFormFieldType=this.getFormFieldType.bind(this),this.handleSubmitEvent=this.handleSubmitEvent.bind(this),this.init=this.init.bind(this),this.triggerFormFieldValidation=this.triggerFormFieldValidation.bind(this),this.validateEmailField=this.validateEmailField.bind(this),this.validateFormField=this.validateFormField.bind(this),this.validateRequiredField=this.validateRequiredField.bind(this)}displayValidationErrorMessage(e,i){let t=this.getFormFieldType(e),r=this.getErrorElements(e,t);r.message.innerHTML=i,r.message.style.display="block",r.border.classList.add("is-invalid")}getErrorElements(e,i){let t={};return i!=="select"?i==="textarea"&&e.name==="h-captcha-response"?(t.border=e.parentElement,t.message=e.parentElement.nextElementSibling):(t.border=e,t.message=e.nextElementSibling):(t.border=e.parentElement.previousElementSibling,t.message=e.parentElement.parentElement.nextElementSibling),t}getErrorMessages(e){let i={},t=e.getAttribute("dd-error-messages");if(t!==null)for(let r of Object.entries(t.split("|"))){let[n,s]=r[1].split(":");i[n]=s}return i}getFormFieldType(e){return e.getAttribute("type")||e.tagName.toLowerCase()}handleSubmitEvent(e){e.preventDefault();let i=e.target,r=i.closest("form").querySelectorAll('input:not([type="submit"]), textarea, select'),n=!1;r.forEach(s=>{this.validateFormField(s)||(n=!0)}),n||(i.removeEventListener("click",this.handleSubmitEvent),i.removeEventListener("touchstart",this.handleSubmitEvent),i.click())}validateEmailField(e,i,t){let r=!0;if(i.length>0&&(r=i.indexOf("@")!==-1&&i.indexOf(".")!==-1,!r)){let n=t.email===void 0?'"Email address" error message not defined':t.email;this.displayValidationErrorMessage(e,n)}return r}validateFormField(e){let i=!0,t=e.value.trim(),r=this.getErrorMessages(e);return e.getAttribute("required")!==null&&(i=this.validateRequiredField(e,t,r),!i)||e.getAttribute("type")==="email"&&(i=this.validateEmailField(e,t,r),!i)?!1:i}validateRequiredField(e,i,t){let r=i.length!==0;if(!r){let n=t.required===void 0?'"Required" error message not defined':t.required;this.displayValidationErrorMessage(e,n)}return r}triggerFormFieldValidation(e){if(this.validateFormField(e)){let t=this.getFormFieldType(e),r=this.getErrorElements(e,t);r.message.innerHTML="",r.message.style.display="",r.border.classList.remove("is-invalid")}}init(){document.querySelectorAll("form").forEach(t=>{if(!t.getAttribute("novalidate")){let r=t.querySelector("input[type=submit]");r.addEventListener("click",this.handleSubmitEvent),r.addEventListener("touchstart",this.handleSubmitEvent),t.querySelectorAll('input:not([type="submit"]), textarea').forEach(s=>{s.addEventListener("focus",()=>{s.removeEventListener("blur",this.triggerFormFieldValidation),s.removeEventListener("keyup",this.triggerFormFieldValidation),s.addEventListener("blur",()=>{this.triggerFormFieldValidation(s)},{passive:!0}),s.addEventListener("keyup",()=>{this.triggerFormFieldValidation(s)},{passive:!0})})})}}),document.querySelectorAll('[fs-formsubmit-element][data-animation-type="lottie"]').forEach(t=>{t.addEventListener("click",()=>{let r=t.closest(".w-form-done");t.closest("section").scrollIntoView({behavior:"smooth"})},{passive:!0})})}}new a().init()};var m=()=>{let a=document.querySelector('[dd-skip-to-main-content="trigger"]'),l=document.querySelector('[dd-skip-to-main-content="target"]');!a||!l||["click","keypress"].forEach(o=>{a.addEventListener(o,e=>{e.type==="keydown"&&e.which!==13||(e.preventDefault(),l.setAttribute("tabindex","-1"),l.focus())})})};window.Webflow;window.Webflow.push(()=>{m(),d()});})();
