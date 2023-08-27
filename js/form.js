const formNode = document.querySelector('.ad-form');
const formFieldsetNodes = formNode.querySelectorAll('fieldset');

const mapNode = document.querySelector('.map__filters');
const mapSelectNodes = mapNode.querySelectorAll('.map__filter');
const mapFieldsetNodes = mapNode.querySelector('.map__features');

const disableForm = () => {
  formNode.classList.add('.ad-form--disabled');
  formFieldsetNodes.forEach((fieldsetNode) => {
    fieldsetNode.setAttribute('disabled', '');
  });

  mapNode.classList.add('.ad-form--disabled');
  mapFieldsetNodes.setAttribute('disabled', '');
  mapSelectNodes.forEach((mapNode) => {
    mapNode.setAttribute('disabled', '');
  });
};

const enableForm = () => {
  formNode.classList.remove('.ad-form--disabled');
  formFieldsetNodes.forEach((fieldsetNode) => {
    fieldsetNode.removeAttribute('disabled', '');
  });

  mapNode.classList.remove('.ad-form--disabled');
  mapFieldsetNodes.removeAttribute('disabled', '');
  mapSelectNodes.forEach((mapNode) => {
    mapNode.removeAttribute('disabled', '');
  });
};



export {disableForm, enableForm}
