// Select the input element
const validationInput = document.querySelector('#validation-input');

// Add an event listener for the 'blur' event
validationInput.addEventListener('blur', () => {
  // Get the required length from the data-length attribute
  const requiredLength = parseInt(validationInput.dataset.length, 10);
  
  // Check if the input value length matches the required length
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
