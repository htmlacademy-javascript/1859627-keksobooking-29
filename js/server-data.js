import {initPins, createMarker} from './map.js';
import {getData} from './api.js';
import {showAlert} from './alert.js';
import {getFilteredData} from './util.js';
import {enableForm} from './form.js';
import {debounce} from './util.js';

const RENDER_TIMEOUT = 500;

getData()
  .then((announcements) => {
    createMarker();
    const handleFilterChange = debounce((filter) => {
      initPins(getFilteredData(announcements, filter));
    }, RENDER_TIMEOUT);
    enableForm(handleFilterChange);
    initPins(announcements);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

