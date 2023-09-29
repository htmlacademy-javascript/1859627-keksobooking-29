const offerType = {
  flat : 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const getRoomsText = (roomsCount) => {
  switch(roomsCount) {
    case 0:
      return 'комнат';
    case 1:
      return 'комната';
    case 2:
    case 3:
      return 'комнаты';
    case 100:
      return 'комнат';
  }
};

const getGuestsText = (guestsCount) => {
  switch(guestsCount) {
    case 0:
      return 'гостей';
    case 1:
      return 'гостя';
    case 2:
    case 3:
      return 'гостей';
  }
};

const renderAnnouncements = (announcement) => {
  const cardNode = cardTemplate.cloneNode(true);
  const {offer, author} = announcement;
  const {title, address, price, rooms, guests, checkin, checkout, features, description, photos, type} = offer;

  cardNode.querySelector('.popup__title').textContent = title;
  cardNode.querySelector('.popup__text--address').textContent = address;
  cardNode.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  cardNode.querySelector('.popup__type').textContent = offerType[type];
  cardNode.querySelector('.popup__text--capacity').textContent = `${rooms} ${getRoomsText(rooms)} для ${guests} ${getGuestsText(guests)}`;
  cardNode.querySelector('.popup__text--time').textContent = `Заезд после ${ checkin }, выезд до ${ checkout}`;

  const featuresContainer = cardNode.querySelector('.popup__features');

  if (features) {
    const featureNodes = featuresContainer.querySelectorAll('.popup__feature');

    featureNodes.forEach((featureNode) => {
      const isExistFeature = features.some((feature) => featureNode.classList.contains(`popup__feature--${feature}`));

      if (!isExistFeature) {
        featureNode.remove();
      }
    });
  } else {
    featuresContainer.innerHTML = '';
  }


  cardNode.querySelector('.popup__description').textContent = description;

  const photosContainer = cardNode.querySelector('.popup__photos');
  const photoTemplate = photosContainer.querySelector('.popup__photo');
  const photosFragment = document.createDocumentFragment();
  photosContainer.innerHTML = '';

  if (photos) {
    photos.forEach((photo) => {
      const photoNode = photoTemplate.cloneNode(true);

      photoNode.src = photo;
      photosFragment.appendChild(photoNode);
    });
  }

  photosContainer.appendChild(photosFragment);

  cardNode.querySelector('.popup__avatar').src = author.avatar;

  return cardNode;
};

export {renderAnnouncements};
