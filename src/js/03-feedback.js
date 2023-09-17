import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const formData = {};

if (localStorage.getItem(LS_KEY) === null) {
  email.value = '';
  message.value = '';
} else {
  const values = JSON.parse(localStorage.getItem(LS_KEY));
  email.value = values.email;
  message.value = values.message;
}

const inputHandler = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
};

const submitHandler = e => {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Fill in all the fields!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(LS_KEY)));
  form.reset();
  localStorage.removeItem(LS_KEY);
};

form.addEventListener('input', throttle(inputHandler, 500));

form.addEventListener('submit', submitHandler);
