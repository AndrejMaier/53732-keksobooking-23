import {COUNT_OFFER} from './db.js';
import {getOffer} from './data.js';

const offers = new Array(COUNT_OFFER).fill().map(getOffer);
console.log(offers);
