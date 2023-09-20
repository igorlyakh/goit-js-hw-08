import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
let formData = {};
const inputData = JSON.parse(localStorage.getItem(LS_KEY));

if (inputData) {
  email.value = inputData.email ? inputData.email : '';
  message.value = inputData.message ? inputData.message : '';
  formData = inputData;
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
  formData = {};
};

form.addEventListener('input', throttle(inputHandler, 500));

form.addEventListener('submit', submitHandler);
