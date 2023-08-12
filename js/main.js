import {getRandomInteger, getRandomArrayElement, getRandomNumber, randomizeArr} from './util.js';

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
]

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
]

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
]

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
]

const generateAuthor = () => {
  let a = getRandomInteger(1, 10)
  a = String(a)
  a = a.padStart(2, '0');
  return {
    avatar: `img/avatars/user${a}.png`,
  }
};

const generateOffer = () => {
  return {
    title: 'Загородный дом у шоссе',
    address: getRandomNumber(35.65, 35.7) + ' ' + getRandomNumber(139.7, 139.8),
    price: getRandomInteger(1, 10000),
    type: getRandomArrayElement(TYPE),
    rooms: getRandomInteger(1, 9),
    guests: getRandomInteger(1, 15),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: randomizeArr(FEATURES),
    description: 'Рядом крутой завод по производству атомной энергии!',
    photos: randomizeArr(PHOTOS),
  }
};

const generateLocation = () => {
  return {
    lat: getRandomNumber(35.65, 35.7),
    lng: getRandomNumber(139.7, 139.8),
  }
}

const generateAnnouncement = () => {
  return {
    author: generateAuthor(),
    offer: generateOffer(),
    location: generateLocation(),
  }
};

console.log(generateAnnouncement(6));
