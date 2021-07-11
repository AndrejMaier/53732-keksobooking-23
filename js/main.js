import {disableForm, initForm} from './form.js';
import {loadMap, putPinsToMap} from './map.js';
import {getData} from './api.js';

const COUNT_OFFER = 10;
const submitButton = document.querySelector('.ad-form__submit');

getData((offers) => {
  putPinsToMap(offers.slice(0, COUNT_OFFER));
});

disableForm();
loadMap();
initForm();

submitButton.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log('Кнопку нажал');
});

