"use strict";(()=>{var u=()=>{class a{constructor(){this.displayValidationErrorMessage=this.displayValidationErrorMessage.bind(this),this.getErrorElements=this.getErrorElements.bind(this),this.getErrorMessages=this.getErrorMessages.bind(this),this.getFormFieldType=this.getFormFieldType.bind(this),this.handleSubmitEvent=this.handleSubmitEvent.bind(this),this.init=this.init.bind(this),this.triggerFormFieldValidation=this.triggerFormFieldValidation.bind(this),this.validateEmailField=this.validateEmailField.bind(this),this.validateFormField=this.validateFormField.bind(this),this.validateRequiredField=this.validateRequiredField.bind(this)}displayValidationErrorMessage(t,r){let i=this.getFormFieldType(t),s=this.getErrorElements(t,i);s.message.innerHTML=r,s.message.style.display="block",s.border.classList.add("is-invalid")}getErrorElements(t,r){let i={};return r!=="select"?r==="textarea"&&t.name==="h-captcha-response"?(i.border=t.parentElement,i.message=t.parentElement.nextElementSibling):(i.border=t,i.message=t.nextElementSibling):(i.border=t.parentElement.previousElementSibling,i.message=t.parentElement.parentElement.nextElementSibling),i}getErrorMessages(t){let r={},i=t.getAttribute("dd-error-messages");if(i!==null)for(let s of Object.entries(i.split("|"))){let[n,o]=s[1].split(":");r[n]=o}return r}getFormFieldType(t){return t.getAttribute("type")||t.tagName.toLowerCase()}handleSubmitEvent(){let t=e.target,i=t.closest("form").querySelectorAll('input:not([type="submit"]), textarea, select'),s=!1;return i.forEach(n=>{this.validateFormField(n)||(s=!0)}),s?!1:(t.removeEventListener("click",this.handleSubmitEvent),t.removeEventListener("touchstart",this.handleSubmitEvent),!0)}validateEmailField(t,r,i){let s=!0;if(r.length>0&&(s=r.indexOf("@")!==-1&&r.indexOf(".")!==-1,!s)){let n=i.email===void 0?'"Email address" error message not defined':i.email;this.displayValidationErrorMessage(t,n)}return s}validateFormField(t){let r=!0,i=t.value.trim(),s=this.getErrorMessages(t);return t.getAttribute("required")!==null&&(r=this.validateRequiredField(t,i,s),!r)||t.getAttribute("type")==="email"&&(r=this.validateEmailField(t,i,s),!r)?!1:r}validateRequiredField(t,r,i){let s=r.length!==0;if(!s){let n=i.required===void 0?'"Required" error message not defined':i.required;this.displayValidationErrorMessage(t,n)}return s}triggerFormFieldValidation(t){if(this.validateFormField(t)){let i=this.getFormFieldType(t),s=this.getErrorElements(t,i);s.message.innerHTML="",s.message.style.display="",s.border.classList.remove("is-invalid")}}init(){document.querySelectorAll("form").forEach(r=>{if(!r.getAttribute("novalidate")){let i=r.querySelector("input[type=submit]");i.addEventListener("click",this.handleSubmitEvent),i.addEventListener("touchstart",this.handleSubmitEvent),r.querySelectorAll('input:not([type="submit"]), textarea').forEach(n=>{n.addEventListener("focus",()=>{n.removeEventListener("blur",this.triggerFormFieldValidation),n.removeEventListener("keyup",this.triggerFormFieldValidation),n.addEventListener("blur",()=>{this.triggerFormFieldValidation(n)},{passive:!0}),n.addEventListener("keyup",()=>{this.triggerFormFieldValidation(n)},{passive:!0})})})}})}}new a().init()};var m=()=>{let a=document.querySelector('[dd-skip-to-main-content="trigger"]'),l=document.querySelector('[dd-skip-to-main-content="target"]');!a||!l||["click","keypress"].forEach(d=>{a.addEventListener(d,t=>{t.type==="keydown"&&t.which!==13||(t.preventDefault(),l.setAttribute("tabindex","-1"),l.focus())})})};window.Webflow;window.Webflow.push(()=>{m(),u()});})();
