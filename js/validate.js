import {showAlert} from './util.js';
import {sendData} from './api.js';

const ROOMS_ERROR_MESSAGE = 'Недопустимое количество комнат для текущего количества гостей';
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const form = document.querySelector('.ad-form');
const typeOfHousing = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const minPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const roomNumberOption = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch((err) => {
          showAlert(err.message);
        });
    }
  });
};

let currentRealtyType = 'flat';

const getMinPriceMessage = () => `Минимальная цена ${minPrice[currentRealtyType]}`;
const pricePerNight = document.querySelector('#price');
const validateMinPrice = (value) => minPrice[currentRealtyType] <= value;
const validateRooms = () => roomNumberOption[Number(roomNumber.value)].includes(Number(capacity.value));

pristine.addValidator(capacity, validateRooms, ROOMS_ERROR_MESSAGE);
pristine.addValidator(roomNumber, validateRooms, ROOMS_ERROR_MESSAGE);
pristine.addValidator(pricePerNight, validateMinPrice, getMinPriceMessage);

const validatePrice = () => {
  // onPriceValidate();
  pricePerNight.placeholder = minPrice[currentRealtyType];
  if (pricePerNight.value) {
    pristine.validate(pricePerNight);
  }
};

typeOfHousing.addEventListener('change', (evt) => {
  pricePerNight.min = evt.target.value;
  setCurrentRealtyType(evt.target.value);
  validatePrice();
});

const onRoomsFieldChange = (evt) => {
  pristine.validate([roomNumber, capacity])
};

roomNumber.addEventListener('change', onRoomsFieldChange);
capacity.addEventListener('change', onRoomsFieldChange);

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});

const setCurrentRealtyType = (type) => {
  currentRealtyType = type;
};

export {setUserFormSubmit};
