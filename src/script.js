const contactForm = document.querySelector('#contact-form');
const successModal = document.querySelector('#success-modal');
const failedModal = document.querySelector('#failed-modal');

// Validity
function isFormValid() {
  const name = contactForm.elements.name.value.trim();
  return contactForm.checkValidity() && name !== '';
}

// Submit Form
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (isFormValid()) {
    successModal.showModal();
  } else {
    failedModal.showModal();
  }
});

// Close
[successModal, failedModal].forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.close();
  });
});

// Success
successModal.addEventListener('close', () => {
  contactForm.reset();
});

// Failed
failedModal.addEventListener('close', () => {
  const firstInvalidFailed = contactForm.querySelector(':invalid');
  firstInvalidFailed?.focus();
});
