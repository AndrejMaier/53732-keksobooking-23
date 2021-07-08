import {generateOffers} from './mocks/data.js';
import {disableForm, initForm} from './form.js';
import {loadMap, putPinsToMap} from './map.js';


const COUNT_OFFER = 10;

disableForm();
loadMap();
putPinsToMap(generateOffers(COUNT_OFFER));
initForm();
