import {generateOffers} from './mocks/data.js';
import {renderOffers} from './similar-offers-list.js';
import {disablePage, activatePage} from './form.js';
const COUNT_OFFER = 1;

renderOffers(generateOffers(COUNT_OFFER));

disablePage();
activatePage();
