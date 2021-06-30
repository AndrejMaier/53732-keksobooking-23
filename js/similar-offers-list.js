import {translatedTypeHouse} from './mocks/vars.js';
import {renderSimilarFeatures, renderSimilarPhotos, isOfferUndefined} from './util.js';

const offerTemplate = document.querySelector('#card').content;
const map = document.querySelector('#map-canvas');

/**
 * Отрисовка объявлений в разметке
 *
 * @param {*} elements - массив объявлений
 */
const renderOffers = (elements) => {
  elements.forEach((element) => {
    const newOffer = offerTemplate.cloneNode(true);
    const newOfferPhotos = newOffer.querySelector('.popup__photos');
    newOffer.querySelector('.popup__photo').remove();
    const newOfferFeatures = newOffer.querySelector('.popup__features');
    const featuresList = newOfferFeatures.children;
    for(let index = featuresList.length - 1; index >= 0; --index) {
      featuresList[index].remove();
    }
    newOffer.querySelector('.popup__title').textContent = element.offer.title;
    newOffer.querySelector('.popup__text--address').textContent = element.offer.address;
    newOffer.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
    newOffer.querySelector('.popup__type').textContent = translatedTypeHouse[element.offer.type];
    newOffer.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
    newOffer.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
    newOfferFeatures.appendChild(renderSimilarFeatures(element.offer.features));
    newOffer.querySelector('.popup__description').textContent = element.offer.description;
    newOfferPhotos.appendChild(renderSimilarPhotos(element.offer.photos, offerTemplate));
    newOffer.querySelector('.popup__avatar').src = element.author.avatar;
    isOfferUndefined(newOffer, element);
    map.appendChild(newOffer);
  });
};

export {renderOffers};
