import {translatedTypeHouse, nameClasses} from './vars.js';

const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

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
 *
 * @param {object} obj - объявление
 * @param {undefined} template - шаблон верстки объявления
 * @param {object} className - словарь с имена классов шаблона
 */
const checkValue = (obj, template, className) => {
  Object.keys(obj).forEach((item) => {
    if (typeof obj[item] === 'object') {
      checkValue(obj[item], template, className);
    }else if (!obj[item]) {
      template.querySelector(className[item]).remove();
    }
  });
};

/**
 * Отрисовка объявления в разметке
 *
 * @param {underfined} element - объявление
 */
const renderCard = (element) => {
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
  checkValue(element, newOffer, nameClasses);
  return newOffer;
};

export {renderCard};
