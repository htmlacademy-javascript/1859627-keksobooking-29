import {initPins, createMarker} from './map.js';
import {getData} from './api.js';
import {showAlert} from './alert.js';
import {getFilteredData} from './util.js';
import {enableForm} from './form.js';

getData()
  .then((announcements) => {
    createMarker();
    const handleFilterChange = (filter) => {
      initPins(getFilteredData(announcements, filter));
    };
    enableForm(handleFilterChange);
    initPins(announcements);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

