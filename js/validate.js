import {showAlert, showSuccess} from './alert.js';
import {sendData} from './api.js';
import {map} from './map.js';

const ROOMS_ERROR_MESSAGE = 'Недопустимое количество комнат для текущего количества гостей';
const DEFAULT_HOUSING_TYPE = 'flat';
const DEFAULT_FILTER_VALUE = 'any';
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const form = document.querySelector('.ad-form');
const typeOfHousing = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const formSubmitNode = form.querySelector('.ad-form__submit');
const filterFormNode = document.querySelector('.map__filters');
const filterNodes = filterFormNode.querySelectorAll('.map__filter');
const featureNodes = filterFormNode.querySelector('.map__features').querySelectorAll('input');
const pricePerNight = document.querySelector('#price');

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

const blockSubmitButton = () => {
  formSubmitNode.disabled = true;
  formSubmitNode.textContent = 'Публикуется...';
};

const unblockSubmitButton = () => {
  formSubmitNode.disabled = false;
  formSubmitNode.textContent = 'Опубликовать';
};

let currentRealtyType = DEFAULT_HOUSING_TYPE;

const validatePrice = () => {
  pricePerNight.placeholder = minPrice[currentRealtyType];
  if (pricePerNight.value) {
    pristine.validate(pricePerNight);
  }
};

const setCurrentRealtyType = (type) => {
  currentRealtyType = type;
};

const resetForm = () => {
  pristine.reset();
  pricePerNight.value = '';
  setCurrentRealtyType(DEFAULT_HOUSING_TYPE);
  validatePrice();
  map.closePopup();
};

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          showSuccess();
          unblockSubmitButton();
          form.reset();
          resetForm();
        })
        .catch((err) => {
          showAlert(err.message);
          unblockSubmitButton();
        },);
    }
  });
};

const getMinPriceMessage = () => `Минимальная цена ${minPrice[currentRealtyType]}`;
const validateMinPrice = (value) => minPrice[currentRealtyType] <= value;
const validateRooms = () => roomNumberOption[Number(roomNumber.value)].includes(Number(capacity.value));

pristine.addValidator(capacity, validateRooms, ROOMS_ERROR_MESSAGE);
pristine.addValidator(roomNumber, validateRooms, ROOMS_ERROR_MESSAGE);
pristine.addValidator(pricePerNight, validateMinPrice, getMinPriceMessage);

typeOfHousing.addEventListener('change', (evt) => {
  pricePerNight.min = evt.target.value;
  setCurrentRealtyType(evt.target.value);
  validatePrice();
});

const onRoomsFieldChange = () => {
  pristine.validate([roomNumber, capacity]);
};

roomNumber.addEventListener('change', onRoomsFieldChange);
capacity.addEventListener('change', onRoomsFieldChange);

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});

const resetFilters = () => {
  filterNodes.forEach((filterNode) => {
    filterNode.value = DEFAULT_FILTER_VALUE;
  });
  featureNodes.forEach((featureNode) => {
    featureNode.checked = false;
  });
};

form.addEventListener('reset', () => {
  resetForm();
  resetFilters();
});

export {setUserFormSubmit};
