import throttle from 'lodash.throttle';
import '../styles/index.scss';
const refs = {
  form: document.querySelector('.js-form'),
  inputMail: document.querySelector('.js-input'),
  inputText: document.querySelector('.js-text'),
};
refs.form.addEventListener('submit', handleSubmitForm);
refs.form.addEventListener('input', throttle(handleChangeInput, 500));

const FORM_DATA_KEY = 'feedback-form-state';

const feedbackForm = {
  email: '',
  message: '',
};

if (localStorage.getItem(FORM_DATA_KEY)) {
  const newData = JSON.parse(localStorage.getItem(FORM_DATA_KEY));
  refs.inputMail.value = newData.email;
  refs.inputText.value = newData.message;
}

function handleSubmitForm(event) {
  event.preventDefault();
  const input = event.target.elements.email.value.trim();
  const textarea = event.target.elements.message.value.trim();
  if (input === '' || textarea === '') {
    alert('Поля форми повинні бути заповнені');
    return;
  }
  console.log({
    email: input,
    message: textarea,
  });
  refs.form.reset();
  localStorage.clear();
}

function handleChangeInput(event) {
  feedbackForm.email = refs.inputMail.value.trim();
  feedbackForm.message = refs.inputText.value.trim();

  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(feedbackForm));
}
