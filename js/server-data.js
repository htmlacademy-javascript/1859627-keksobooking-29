import {initPins, createMarker} from './map.js';
import {getData} from './api.js';
import {showAlert} from './alert.js';
import {getFilteredData} from './util.js';

const DEFAULT_HOUSING_VALUE = 'any';
const HOUSING_TYPE_PREFIX = 'housing';

const mapFilters = document.querySelector('.map__filters');

let filter = {};

// filterFormNode = mapFilters

const startFilterChangeHandler = (onChangeFilter) => {
  mapFilters.addEventListener('change', (evt) => {
    const filterValue = evt.target.value === DEFAULT_HOUSING_VALUE ? '' : evt.target.value;
    const currentFilterType = evt.target.name.replace(`${HOUSING_TYPE_PREFIX}-`, '');
    filter[currentFilterType] = filterValue;
    onChangeFilter(filter);
  });
};

getData()
  .then((announcements) => {
    createMarker();
    const handleFilterChange = (filter) => {
      initPins(announcements, getFilteredData(data, filter));
    };
    enableForm(handleFilterChange);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

export {startFilterChangeHandler};
