import {disableForm, initForm, formSubmitHandler} from './form.js';
import {loadMap} from './map.js';
import {getData} from './api.js';
import {getFilteredAds, filterChange, changeAds} from './filter.js';
import {debounce} from './utils/debounce.js';
import {RERENDER_DELAY} from './vars.js';


//const COUNT_OFFER = 10;

getData((offers) => {
  getFilteredAds(offers);
  changeAds(debounce(() => {
    filterChange(offers);
  }, RERENDER_DELAY));
});
disableForm();
loadMap();
initForm();
formSubmitHandler();

