import {getDecimalRandom, getRandom, getRandomArrayElement, getRandomArray} from './util.js';
import {AVATAR_COUNT, TYPE_HOUSE, CHECKINS, CHECKOUTS, PHOTOS} from './vars.js';
import {FEATURES} from '../vars.js';

/**
 *  Создает объект
 *
 * @returns {object}
 */
const generateOffer = () => {
  const locationX = getDecimalRandom(35.65000, 35.70000, 5);
  const locationY = getDecimalRandom(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: `img/avatars/user0${getRandom(1, AVATAR_COUNT)}.png`,
    },
    offer: {
      title: 'Сдача недвижимости',
      address: `${locationX}, ${locationY}`,
      price: getRandom(0, 100000),
      type: getRandomArrayElement(TYPE_HOUSE),
      rooms: getRandom(1, 20),
      guests: getRandom(0, 50),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getRandomArray(FEATURES),
      description: 'Сдаю светлую и уютную однокомнатнаю квартиру на длительный срок от собственника. Этаж - 2. Квартира находится в 5 минутах от метро. Внутри есть все для комфортного проживания: новый диван, шкаф-купе, комод с зеркалом, телевизор, интернет. На кухне  - холодильник, микроволновка, чайник, набор посуды. Санузел раздельный. Ванная комната отделана кафельной плиткой, имется стиральная машинка. Просмотр в любой день. Звоните по телефону: 8 111 111-11-11 (Хозяин).',
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat: locationX,
      lng: locationY,
    },
  };
};

const generateOffers = (params) => new Array(params).fill().map(generateOffer);

export {generateOffers};
