/* =========================================================
   Contact page — script.js (shared) already handles the header
   (sticky shadow, mobile menu toggle) and the fade-in reveal
   animation for .fade-in / .fade-in-up / .fade-in-left /
   .fade-in-right elements. This file covers only what's
   specific to the contact/enquiry page: the form.
   ========================================================= */

// ---- EmailJS config: replace these 3 with your own values from
// your EmailJS dashboard (Account > General for the public key;
// Email Services / Email Templates for the other two IDs) ----
const EMAILJS_PUBLIC_KEY  = 'AgYhmKMCkZKL-TOc3';
const EMAILJS_SERVICE_ID  = 'service_n90c8fg';
const EMAILJS_TEMPLATE_ID = 'template_eq6mq7k';

// All enquiries are sent to this inbox. Make sure your EmailJS
// template's "To Email" field is set to {{toEmail}} so it uses this.
const RECIPIENT_EMAIL = 'kharatvilasi45@gmail.com';

if (window.emailjs) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

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

      const submitBtn = form.querySelector('.submit-btn');
      const originalBtnText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Collect the form fields into the params EmailJS template expects
      const templateParams = {
        toEmail:       RECIPIENT_EMAIL,
        fullName:      form.fullName.value,
        whatsapp:      form.whatsapp.value,
        email:         form.email.value,
        weddingDate:   form.weddingDate.value || 'Not specified',
        destination:   form.destination.value || 'Not specified',
        gatheringSize: form.gatheringSize.value || 'Not specified',
        message:       form.message.value || 'No additional details'
      };

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
          successMsg.classList.add('visible');
          form.reset();
          if (dateField) dateField.classList.remove('has-value');

          // Move focus to the confirmation message for screen readers
          successMsg.setAttribute('tabindex', '-1');
          successMsg.focus();
        })
        .catch((error) => {
          console.error('EmailJS error:', error);
          alert('Sorry, something went wrong while sending your enquiry. Please try again or reach us directly on WhatsApp.');
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        });
    });
  }

});


function openEmail() {
  window.location.href = 'mailto:social@miceandmore.co.in';
}