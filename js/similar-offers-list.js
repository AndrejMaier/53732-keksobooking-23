import {translatedTypeHouse, nameClasses} from './mocks/vars.js';

const offerTemplate = document.querySelector('#card').content;
const map = document.querySelector('#map-canvas');

/**
 * Отрисовка всех доступных удобств
 *
 * @param {array} elements
 * @returns {array}
 */
const renderSimilarFeatures = (elements) => {
  const features = document.createDocumentFragment();
  elements.forEach((element) => {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature');
    feature.classList.add(`popup__feature--${element}`);
    features.appendChild(feature);
  });
  return features;
};

/**
 * Отрисовка галереи изображений объявления
 *
 * @param {array} elements - массив со ссылками на фотографии
 * @param {object} template - клонированный объект объявления в котором присутствует тег изображения
 * @returns {array}
 */
const renderSimilarPhotos = (elements, template) => {
  const photos = document.createDocumentFragment();
  elements.forEach((element) => {
    const newOfferPhoto = template.querySelector('.popup__photo').cloneNode(false);
    newOfferPhoto.src = element;
    photos.appendChild(newOfferPhoto);
  });
  return photos;
};

/**
 * Проверка на наличии пустых свойст и скрытие элементов с пустыми свойствами
 *
 * @param {object} item - копия шаблона объявления
 * @param {object} obj - объявление с заполненными свойствами
 * @param {object} glossary - словарь с названиями классов
 */
const isOfferUndefined = (item, obj, glossary) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      item.querySelector(glossary[key]).classList.add('hidden');
    }
    if (typeof obj[key] === 'object') {
      isOfferUndefined(obj[key]);
    }
  });
};

//const avatarItem= item.querySelector('.popup__avatar');
//const titleItem = item.querySelector('.popup__title');
//const addressItem = item.querySelector('.popup__text--address');
//const priceItem = item.querySelector('.popup__text--price');
//const typeItem = item.querySelector('.popup__type');
//const capacityItem =item.querySelector('.popup__text--capacity');
//const timeItem = item.querySelector('.popup__text--time');
//const featuresItem = item.querySelector('.popup__features');
//const photosItem = item.querySelector('.popup__photos');

//element.author.avatar === undefined ? avatarItem.classList.add('hidden') : element.author.avatar;
//element.offer.title === undefined ? titleItem.classList.add('hidden') : element.offer.title;
//element.offer.address === undefined ? addressItem.classList.add('hidden') : element.offer.address;
//element.offer.price === undefined ? priceItem.classList.add('hidden') : element.offer.price;
//element.offer.type === undefined ? typeItem.classList.add('hidden') : element.offer.type;
//if (element.offer.rooms === undefined || element.offer.guests === undefined) {
//  capacityItem.classList.add('hidden');
//} else {
//  element.offer.rooms;
//  element.offer.guests;
//}
//if (element.offer.checkin === undefined || element.offer.checkout === undefined) {
//  timeItem.classList.add('hidden');
//} else {
//  element.offer.checkin;
//  element.offer.checkout;
//}
//element.offer.features === undefined ? featuresItem.classList.add('hidden') : element.offer.features;
//element.offer.photos === undefined ? photosItem.classList.add('hidden') : element.offer.photos;


/**
 * Отрисовка объявления в разметке
 *
 * @param {underfined} element - объявление
 */
const renderOffer = (element) => {
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
  isOfferUndefined(newOffer, element, nameClasses);
  map.appendChild(newOffer);
};

export {renderOffer};
