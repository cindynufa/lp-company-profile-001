const contactForm = document.querySelector('#contact-form');
const successModal = document.querySelector('#success-modal');

// Submit Form
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  successModal.showModal();
});

// Close
successModal.addEventListener('click', (event) => {
  if (event.target === successModal) successModal.close();
});

// Reset
successModal.addEventListener('close', (event) => {
  contactForm.reset();
  document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});
