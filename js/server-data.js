import {initPins, createMarker} from './map.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
getData()
  .then((announcements) => {
    createMarker();
    initPins(announcements.slice(0, 10));
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );





