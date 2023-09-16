import throttle from 'lodash.throttle';

const LC_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const formData = {};

if (localStorage.getItem(LC_KEY) === null) {
  email.value = '';
  message.value = '';
} else {
  const values = JSON.parse(localStorage.getItem(LC_KEY));
  email.value = values.email;
  message.value = values.message;
}

const inputHandler = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LC_KEY, JSON.stringify(formData));
};

const submitHandler = e => {
  e.preventDefault();
  form.reset();
  localStorage.clear();
};

form.addEventListener('input', throttle(inputHandler, 500));

form.addEventListener('submit', submitHandler);
