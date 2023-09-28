const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
const SLIDER_RANGE_MIN = 0;
const SLIDER_RANGE_MAX = 100000;
const SLIDER_RANGE_START = 1000;
const SLIDER_RANGE_STEP = 1000;

noUiSlider.create(sliderElement, {
  range: {
    min: SLIDER_RANGE_MIN,
    max: SLIDER_RANGE_MAX,
  },
  start: SLIDER_RANGE_START,
  step: SLIDER_RANGE_STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});
