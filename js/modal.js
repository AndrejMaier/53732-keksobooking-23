
import {map, mainPinMarker} from './map.js';
import {setAddress} from './vars.js';

const successModalTemplate = document.querySelector('#success').content.querySelector('.success');
const errorModalTemplate = document.querySelector('#error').content.querySelector('.error');
const mapFilter = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');

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
const ClearAndResetFormAndMap = () => {
  document.querySelector('.ad-form').reset();
  resetPinMap();
  resetFilter();
};

// сброс формы, карты и фильтра при нажатии кнопки сброса
resetButton.addEventListener('click', ClearAndResetFormAndMap);


// проблема с Eslint
// Обработчик окна с объявление об успешной отправки данных при нажатии на ESC
const onSuccessPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeSuccessModal();
  }
};

// Закрытие окна с объявление об успешной отправки данных
const closeSuccessModal = () => {
  document.body.lastChild.remove();
  document.removeEventListener('keydown', onSuccessPopupEscKeydown);
  document.removeEventListener('click', closeSuccessModal);
  ClearAndResetFormAndMap();
};

const openSuccessModal = () => {
  const modal = successModalTemplate.cloneNode(true);
  document.body.appendChild(modal);

  document.addEventListener('keydown', onSuccessPopupEscKeydown);
  document.addEventListener('click', closeSuccessModal);
};

const onErrorPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeErrorModal();
  }
};

// ошибка Eslint
// закрытие окна с объявлением
const closeErrorModal = () => {
  document.body.lastChild.remove();
  document.removeEventListener('keydown', onErrorPopupEscKeydown);
  document.removeEventListener('click', closeErrorModal);
  // eslint-disable-next-line no-undef
  errorButton.removeEventListener('click', closeErrorModal);
};

//
// Открытие окна с объявлением об ошибки отправки данных
const openErrorModal = () => {
  const error = errorModalTemplate.cloneNode(true);
  const errorButton = error.querySelector('.error__button');
  document.body.appendChild(error);
  errorButton.addEventListener('click', closeErrorModal);
  document.addEventListener('keydown', onErrorPopupEscKeydown);
  document.addEventListener('click', closeErrorModal);
};

export {openSuccessModal, openErrorModal};
