const ALERT_SHOW_TIME = 5000;
const successNode = document.querySelector('#success').content.querySelector('.success');
const errorNode = document.querySelector('#error').content.querySelector('.error');
const errorButtonNode = errorNode.querySelector('.error__button');

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {

    const hideSuccess = () => {
      successNode.remove();
      document.removeEventListener('keydown', onEscKeyDown);
    };

    const hideError = () => {
      errorNode.remove();
      document.removeEventListener('keydown', onEscKeyDown);
    };

    hideSuccess();
    hideError();
  }
};

const hideSuccesses = () => {
  successNode.remove();
  document.removeEventListener('keydown', onEscKeyDown);
};

const hideErrors = () => {
  errorNode.remove();
  document.removeEventListener('keydown', onEscKeyDown);
};

const onSuccessNodeClick = (evt) => {
  if (!evt.target.closest('.success__message')) {
    hideSuccesses();
  }
};

const onErrorButtonNodeClick = () => {
  hideErrors();
};

const onErrorNodeClick = (evt) => {
  if (!evt.target.closest('.error__message')) {
    hideErrors();
  }
};

const showSuccess = () => {
  document.body.appendChild(successNode);
  successNode.addEventListener('click', onSuccessNodeClick);
  document.addEventListener('keydown', onEscKeyDown);
};

const showError = () => {
  document.body.appendChild(errorNode);
  errorButtonNode.addEventListener('click', onErrorButtonNodeClick);
  errorNode.addEventListener('click', onErrorNodeClick);
  document.addEventListener('keydown', onEscKeyDown);
};

export {showAlert, showSuccess, showError};


