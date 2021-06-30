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
 * @param {object} element - объявление с заполненными свойствами
 */
const isOfferUndefined = (item, element) => {
  const avatarItem= item.querySelector('.popup__avatar');
  const titleItem = item.querySelector('.popup__title');
  const addressItem = item.querySelector('.popup__text--address');
  const priceItem = item.querySelector('.popup__text--price');
  const typeItem = item.querySelector('.popup__type');
  const capacityItem =item.querySelector('.popup__text--capacity');
  const timeItem = item.querySelector('.popup__text--time');
  const featuresItem = item.querySelector('.popup__features');
  const photosItem = item.querySelector('.popup__photos');

  element.author.avatar === undefined ? avatarItem.classList.add('hidden') : element.author.avatar;
  element.offer.title === undefined ? titleItem.classList.add('hidden') : element.offer.title;
  element.offer.address === undefined ? addressItem.classList.add('hidden') : element.offer.address;
  element.offer.price === undefined ? priceItem.classList.add('hidden') : element.offer.price;
  element.offer.type === undefined ? typeItem.classList.add('hidden') : element.offer.type;
  if (element.offer.rooms === undefined || element.offer.guests === undefined) {
    capacityItem.classList.add('hidden');
  } else {
    element.offer.rooms;
    element.offer.guests;
  }
  if (element.offer.checkin === undefined || element.offer.checkout === undefined) {
    timeItem.classList.add('hidden');
  } else {
    element.offer.checkin;
    element.offer.checkout;
  }
  element.offer.features === undefined ? featuresItem.classList.add('hidden') : element.offer.features;
  element.offer.photos === undefined ? photosItem.classList.add('hidden') : element.offer.photos;
};

export {renderSimilarFeatures, renderSimilarPhotos, isOfferUndefined};
