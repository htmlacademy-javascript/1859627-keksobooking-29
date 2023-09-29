const DEFAULT_HOUSING_VALUE = 'any';
const HOUSING_TYPE_PREFIX = 'housing';

const mapFilters = document.querySelector('.map__filters');

const filter = {};

const startFilterChangeHandler = (onChangeFilter) => {
  mapFilters.addEventListener('change', (evt) => {
    if (evt.target.type === 'checkbox') {
      filter[`features-${evt.target.value}`] = evt.target.checked ? evt.target.value : '';
    } else {
      const filterValue = evt.target.value === DEFAULT_HOUSING_VALUE ? '' : evt.target.value;
      const currentFilterType = evt.target.name.replace(`${HOUSING_TYPE_PREFIX}-`, '');
      filter[currentFilterType] = filterValue;
    }
    onChangeFilter(filter);
  });
};

export {startFilterChangeHandler};
