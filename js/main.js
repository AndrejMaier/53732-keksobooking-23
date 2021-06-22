import {generateOffers} from './moki/data.js';
import {renderOffers} from './moki/similar-offers-list.js';
const COUNT_OFFER = 1;

renderOffers(generateOffers(COUNT_OFFER));
