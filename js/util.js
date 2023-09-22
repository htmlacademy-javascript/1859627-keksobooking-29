const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomNumber = (min, max) => {
  const number = (Math.random() * (max - min) + min).toFixed(5)
  return Number(number)
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)]
};

const randomizeArr = (arr) => {
  const newArr = arr.slice(0);
  const sliceRandomIndex = getRandomInteger(1, newArr.length);
  return newArr.slice(0, sliceRandomIndex);
};

const getFilteredData = (data, filter) => {
  let filteredData = [...data];

  Object.entries(filter).forEach(([filterType, filterValue]) => {
    filteredData = filteredData.filter((item) => String(item.offer[filterType]) === String(filterValue) || !filterValue);
  });

  return filteredData;
};

export {getRandomInteger, getRandomArrayElement, getRandomNumber, randomizeArr, getFilteredData}
