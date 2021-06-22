
/**
 * Выбирает случайное число из диапазона с плавующей точкой
 *
 * @param {number} min - минимальное значение диапазона
 * @param {number} max - максимальное значение диапазона
 * @param {number} decimal - количество чисел после запятой
 * @returns {number}
 */
const getDecimalRandom = (min, max, decimal) => {
  if (min < 0 || max < 0) {
    throw 'Я не умею с такие цифрами работать';
  } else if (max < min) {
    [min, max] = [max, min];
  } else if (min === max) {
    return min;
  }
  const randomNumber = Math.random() * (max - min) + min;
  return Number(randomNumber.toFixed(decimal));
};

/**
 * Выбирает случайное число из диапазона
 *
 * @param {number} min - минимальное значение диапазона
 * @param {number} max - максимальное значение диапазона
 * @returns {number}
 */
const getRandom = (min, max) => getDecimalRandom(min, max, 0);

/**
 * Выбирает случайный элемент из массива
 *
 * @param {array} elements - массив со значения
 * @returns {string}
 */
const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

/**
 * Возвращает копию массива со случайными значения
 *
 * @param {array} arr - массив со значениями
 * @returns {array}
 */
const getRandomArray = (arr) => {
  const countElement = getRandom(1, arr.length);
  const newArray = [];
  while (newArray.length < countElement) {
    const element = getRandomArrayElement(arr);
    !newArray.includes(element) ? newArray.push(element) : newArray;
  }
  return newArray;
};

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
 * @param {*} template - клонированный объект объявления в котором присутствует тег изображения
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

export {getDecimalRandom, getRandom, getRandomArrayElement, getRandomArray, renderSimilarFeatures, renderSimilarPhotos};
