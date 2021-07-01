import {generateOffers} from './mocks/data.js';
import {renderOffer} from './similar-offers-list.js';
import {disablePage, activatePage} from './form.js';

const COUNT_OFFER = 10;
const offers = generateOffers(COUNT_OFFER);

renderOffer(offers[0]);
disablePage();
activatePage();
