const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomNumber = (min, max) => {
  const number = (Math.random() * (max - min) + min).toFixed(5);
  return Number(number);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const randomizeArr = (arr) => {
  const newArr = arr.slice(0);
  const sliceRandomIndex = getRandomInteger(1, newArr.length);
  return newArr.slice(0, sliceRandomIndex);
};

const RANGE_FILTER_TYPE = 'price';
const LIST_FILTER_TYPE = 'features';
const Price = {
  LOW: 10000,
  HIGH: 50000,
};

const getFilteredData = (data, filter) => {
  let filteredData = [...data];

  Object.entries(filter).forEach(([filterType, filterValue]) => {
    if (filterType === RANGE_FILTER_TYPE) {
      filteredData = filteredData.filter((item) => {
        const price = Number(item.offer[filterType]);

        switch (filterValue) {
          case 'low':
            return price < Price.LOW;
          case 'middle':
            return price >= Price.LOW && price <= Price.HIGH;
          case 'high':
            return price > Price.HIGH;
          default:
            return true;
        }
      });
    } else if (filterType.includes(LIST_FILTER_TYPE)) {
      filteredData = filteredData.filter((item) => item.offer[LIST_FILTER_TYPE] && item.offer[LIST_FILTER_TYPE].includes(filterValue) || !filterValue);
    } else {
      filteredData = filteredData.filter((item) => String(item.offer[filterType]) === String(filterValue) || !filterValue);
    }
  });

  return filteredData;
};

export {getRandomInteger, getRandomArrayElement, getRandomNumber, randomizeArr, getFilteredData};
