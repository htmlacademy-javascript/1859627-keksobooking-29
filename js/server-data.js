import {initPins, createMarker} from './map.js';
import {getData} from './api.js';
import {showAlert} from './alert.js';
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





