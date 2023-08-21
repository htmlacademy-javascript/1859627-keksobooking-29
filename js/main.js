import './render.js'
import {disableForm, enableForm} from './form.js';

const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

const pors = () => {
  const find = document.querySelector('#type').value;
  const lind = document.querySelector('#price');
  const ert = document.querySelector('#type').onclick = () => {
    if (find === 'flat') {
      lind.placeholder = 1600
    } if (find === 'bungalow') {
      lind.placeholder = 1700
      } if (find === 'hotel') {
        lind.placeholder = 1800
        } if (find === 'house') {
          lind.placeholder = 1900
          } if (find === 'palace') {
            lind.placeholder = 2000
            }
  };
};

// const ert = document.querySelector('#type').onclick = () => {
//   console.log("Вы нажали на кнопку");
// }


pors();

disableForm();
enableForm();
