import {disableForm, enableForm} from './form.js';
import {arr} from './render.js';

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
  enableForm();
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

const marker = L.marker(startCoordinate, {
  draggable: true,
  icon: mainPinIcon,
});

marker.addTo(map);

marker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
  findAddress.value = evt.target.getLatLng();
});

resetButton.addEventListener('click', () => {
  marker.setLatLng(startCoordinate);
  map.setView(startCoordinate, ZOOM);
});

// arr.forEach(({lat, lng}) => {
//   const marker = L.marker({
//     lat,
//     lng,
//   });

//   marker.addTo(map);
// });
