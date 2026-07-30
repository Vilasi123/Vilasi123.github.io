/* =========================================================
   Contact page — script.js (shared) already handles the header
   (sticky shadow, mobile menu toggle) and the fade-in reveal
   animation for .fade-in / .fade-in-up / .fade-in-left /
   .fade-in-right elements. This file covers only what's
   specific to the contact/enquiry page: the form.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('enquiryForm');
  const successMsg = document.getElementById('formSuccess');

  // Date inputs don't support the placeholder attribute, so a floating
  // <label> stands in for it (see contact.css). Toggle a class so the
  // label hides once a date is actually picked, not just on focus.
  const dateField = document.getElementById('weddingDate');
  if (dateField) {
    const syncDateLabel = () => {
      dateField.classList.toggle('has-value', dateField.value !== '');
    };
    dateField.addEventListener('change', syncDateLabel);
    dateField.addEventListener('input', syncDateLabel);
    syncDateLabel();
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Rely on native HTML5 validation first
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // No backend is wired up — just confirm receipt to the user
      successMsg.classList.add('visible');
      form.reset();
      if (dateField) dateField.classList.remove('has-value');

      // Move focus to the confirmation message for screen readers
      successMsg.setAttribute('tabindex', '-1');
      successMsg.focus();
    });
  }

});