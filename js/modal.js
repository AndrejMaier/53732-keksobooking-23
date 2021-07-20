
import {map, mainPinMarker} from './map.js';
import {setAddress} from './vars.js';

const successModalTemplate = document.querySelector('#success').content.querySelector('.success');
const errorModalTemplate = document.querySelector('#error').content.querySelector('.error');
const mapFilter = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');
const isEsc = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

// Возврат карты в начальные координаты
const resetPinMap = () => {
  mainPinMarker.setLatLng(setAddress);
  map.setView(setAddress, 12);
};

// сброс фильтра
const resetFilter = () => {
  mapFilter.reset();
};

// сброс формы и карты
const clearAndResetFormAndMap = () => {
  document.querySelector('.ad-form').reset();
  resetPinMap();
  resetFilter();
};

// сброс формы, карты и фильтра при нажатии кнопки сброса
const onResetButton = (cb) => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    clearAndResetFormAndMap();
    cb();
  });
};

// Обработчик окна с объявление об успешной отправки данных при нажатии на ESC
const onSuccessPopupEscKeydown = (evt) => {
  if (isEsc) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeSuccessModal();
  }
};

const onCloseSuccessModal = () => {
  // eslint-disable-next-line no-use-before-define
  closeSuccessModal();
};
// Закрытие окна с объявление об успешной отправки данных
const closeSuccessModal = () => {
  document.body.lastChild.remove();
  document.removeEventListener('keydown', onSuccessPopupEscKeydown);
  document.removeEventListener('click', onCloseSuccessModal);
  clearAndResetFormAndMap();
};

const openSuccessModal = () => {
  const modal = successModalTemplate.cloneNode(true);
  document.body.appendChild(modal);

  document.addEventListener('keydown', onSuccessPopupEscKeydown);
  document.addEventListener('click', onCloseSuccessModal);
};

const onErrorPopupEscKeydown = (evt) => {
  if (isEsc) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeErrorModal();
  }
};

// закрытие окна с объявлением
const onCloseErrorModal = () => {
  // eslint-disable-next-line no-use-before-define
  closeErrorModal();
};

const closeErrorModal = () => {
  document.body.lastChild.remove();
  document.removeEventListener('keydown', onErrorPopupEscKeydown);
  document.removeEventListener('click', onCloseErrorModal);
  // eslint-disable-next-line no-undef
  errorButton.removeEventListener('click', onCloseErrorModal);
};

//
// Открытие окна с объявлением об ошибки отправки данных
const openErrorModal = () => {
  const error = errorModalTemplate.cloneNode(true);
  const errorButton = error.querySelector('.error__button');
  document.body.appendChild(error);
  errorButton.addEventListener('click', onCloseErrorModal);
  document.addEventListener('keydown', onErrorPopupEscKeydown);
  document.addEventListener('click', onCloseErrorModal);
};

export {openSuccessModal, openErrorModal, onResetButton, resetFilter, resetPinMap};
