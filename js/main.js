import {announcements} from './data.js'

console.log(announcements);

const offerType = {
  flat : 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const listElement = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

// const cardElement = similarCardTemplate.cloneNode(true)
// const e = cardElement.querySelector('.popup__title').textContent = 2;
// similarListElement.appendChild(cardElement);


// const renderAnnouncement = (dataList) => {
//   const cardNode = cardTemplate.cloneNode(true);

//   Object.keys(dataList.offer).forEach((key) => {
//     if (!key) {
//       cardNode.querySelector(`.popup__${OFFER_KEYS[key]}`).remove();
//     }
//   });

//   cardNode.querySelector('.popup__title').textContent = dataList.offer.title;
// }

// console.log(renderAnnouncement());

const arr = [];

announcements.forEach(({offer, author}) => {
  const cardNode = cardTemplate.cloneNode(true);

  cardNode.querySelector('.popup__title').textContent = offer.title;
  cardNode.querySelector('.popup__text--address').textContent = offer.address;
  cardNode.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  cardNode.querySelector('.popup__type').textContent = offer.type; // Значение ключа сюда
  cardNode.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей'; // 1 комнаты не особо звучит...
  cardNode.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;
  cardNode.querySelector('.popup__features').textContent = offer.features; // Нужно сюда добавлять пробелы?
  cardNode.querySelector('.popup__description').textContent = offer.description;
  cardNode.querySelector('.popup__photo').src = offer.photos; // Вставляется всё сразу в один src
  cardNode.querySelector('.popup__avatar').src = author.avatar;
  // Вставить проверку если данных для заполнения нет
  arr.push(cardNode);

  listElement.appendChild(cardNode) // Нужно вывести только 1 элемент массива
});

console.log(arr[1])

// const renderingCard = () => similarAnnouncement.forEach((card) => {
//   const cardElement = similarCardTemplate.cloneNode(true);
//   cardElement.querySelector('.popup__title').textContent = 2;
//   similarListElement.appendChild(cardElement);
// });



// const renderingAnnouncement = () => similarAnnouncement.forEach((card) => {
//   const cardElement = similarCardTemplate.cloneNode(true);
//   cardElement.querySelector('.popup__avatar').src = card.author.avatar;

//   // similarListElement.appendChild(cardElement);
// });


