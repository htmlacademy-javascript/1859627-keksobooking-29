import {disableForm, enableForm} from './form.js';
import {renderAnnouncements} from './render.js';

let markers = [];

const findAddress = document.querySelector('#address');

disableForm();
const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 10;
const cityCenter = {
  lat: 35.6895,
  lng: 139.6917,
};
const startCoordinate = {
  lat: 35.6895,
  lng: 139.6917,
};

const resetButton = document.querySelector('.ad-form__reset');

const map = L.map('map-canvas')
  .on('load', () => {
  console.log('Карта загружена');
  })
  .setView(cityCenter, ZOOM);

L.tileLayer(TILE_LAYER, {
  attribution: COPYRIGHT
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const secondaryPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const createMarker = () => {
  const marker = L.marker(startCoordinate, {
    draggable: true,
    icon: mainPinIcon,
  });

  marker.addTo(map);

  marker.on('moveend', (evt) => {
    console.log(evt.target.getLatLng());
    const {lat, lng} = evt.target.getLatLng();
    findAddress.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`
  });
}

resetButton.addEventListener('click', () => {
  marker.setLatLng(startCoordinate);
  map.setView(startCoordinate, ZOOM);
});

const initPins = (announcements) => {
  markers.forEach((marker) => {
    marker.removeFrom(map);
  });

  announcements.forEach((announcement) => {
    const {lat, lng} = announcement.location;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon: secondaryPinIcon,
      },
    );

    marker.addTo(map).bindPopup(renderAnnouncements(announcement));
    markers.push(marker);
  });
};

export {initPins, createMarker};
