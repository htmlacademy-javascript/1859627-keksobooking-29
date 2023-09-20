import {initPins, createMarker} from './map.js';
import {getData} from './api.js';
import {showAlert} from './alert.js';

const mapFilters = document.querySelector('.map__filters');
const housingTypeFilter = mapFilters.querySelector('#housing-type');

// let currentHousingType = 'any'

// const setCurrentHousingType = (type) => {
//   currentHousingType = type;
// };

getData()
  .then((announcements) => {

    createMarker();
    initPins(announcements);

    housingTypeFilter.addEventListener('change', (evt) => {
      housingTypeFilter.value = evt.target;
      // setCurrentHousingType(evt.target);
      const sor = announcements.filter(function (el) {
        return el.offer.type === (type);
      });
      initPins(sor);
    });
    //   if (housingTypeFilter.value === 'any') {
    //     initPins(announcements);
    //   } if (housingTypeFilter.value === 'flat') {
    //     const sor = announcements.filter(function (el) {
    //       return el.offer.type === (type);
    //     });
    //     initPins(sor);
    //   };
    //   // timeOut.value = evt.target.value;
    // });

    // housingTypeFilter.onchange = () => {
    //   if (housingTypeFilter.value === 'flat') {
    //     const sor = announcements.filter(function (el) {
    //       return el.offer.type === 'flat';
    //     });
    //     initPins(sor);
    //   };
    // };

    // housingTypeFilter.onchange = () => {
    //   if (housingTypeFilter.value === 'bungalow') {
    //     const sor = announcements.filter(function (el) {
    //       return el.offer.type === 'bungalow';
    //     });
    //     initPins(sor);
    //   };
    // };

    //
    // let i = 0;
    // while (i < 10) {
    // console.log(announcements[i].offer.type);
    // i++;
    // }
    // const sor = announcements.filter(announcements[1]offer.type === palace)
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
