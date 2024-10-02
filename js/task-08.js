const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
event.preventDefault();

const { email, password } = loginForm.elements;

if (email.value.trim() === '' || password.value.trim() === '') {
alert('All fields must be filled in');
return;
}

const formData = {
email: email.value,
password: password.value
};

console.log(formData);

loginForm.reset();
});
