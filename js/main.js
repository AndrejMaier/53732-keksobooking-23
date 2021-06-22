import {generateOffers} from './moki/data.js';
import {renderOffers} from './moki/similar-offers-list.js';
const COUNT_OFFER = 1;

generateOffers(COUNT_OFFER);
console.log(renderOffers(generateOffers(COUNT_OFFER)));
