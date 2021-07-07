import {generateOffers} from './mocks/data.js';
import {renderCard} from './card.js';
import {disableForm, enableForm, initForm} from './form.js';

const COUNT_OFFER = 10;
const offers = generateOffers(COUNT_OFFER);

renderCard(offers[0]);
disableForm();
enableForm();
initForm();
