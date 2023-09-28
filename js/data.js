import {getRandomInteger, getRandomArrayElement, getRandomNumber, randomizeArr} from './util.js';

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const generateAuthor = () => {
  let i = getRandomInteger(1, 10);
  i = String(i);
  i = i.padStart(2, '0');
  return {
    avatar: `img/avatars/user${i}.png`,
  };
};

const generateOffer = () => ({
  title: 'Загородный дом у шоссе',
  address: `${getRandomNumber(35.65, 35.7) } ${ getRandomNumber(139.7, 139.8)}`,
  price: getRandomInteger(1, 10000),
  type: getRandomArrayElement(TYPE),
  rooms: getRandomInteger(1, 3),
  guests: getRandomInteger(1, 3),
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  features: randomizeArr(FEATURES),
  description: 'Рядом крутой завод по производству атомной энергии!',
  photos: randomizeArr(PHOTOS),
});

const generateLocation = () => ({
  lat: getRandomNumber(35.65, 35.7),
  lng: getRandomNumber(139.7, 139.8),
});

const generateAnnouncement = (id) => ({
  id: id,
  author: generateAuthor(),
  offer: generateOffer(),
  location: generateLocation(),
});

const generateAds = () => {
  const genAds = [];

  for (let i = 0; i < 10; i++) {
    genAds.push(generateAnnouncement(i));
  }

  return genAds;
};

const announcements = generateAds();

export {announcements};
