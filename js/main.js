import {disableForm, initForm, formSubmitHandler} from './form.js';
import {loadMap, putPinsToMap} from './map.js';
import {getData} from './api.js';

const COUNT_OFFER = 10;

getData((offers) => {
  putPinsToMap(offers.slice(0, COUNT_OFFER));
});
disableForm();
loadMap();
initForm();
formSubmitHandler();

