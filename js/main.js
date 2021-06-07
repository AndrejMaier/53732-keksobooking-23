const AVATAR_COUNT = 8;
const TYPE_HOUSE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const COUNT_OFFER = 10;

function getDecimalRandom (min, max, decimal) {
  if (min < 0 || max < 0) {
    throw 'Я не умею с такие цифрами работать';
  } else if (max < min) {
    [min, max] = [max, min];
  } else if (min === max) {
    return min;
  }
  const randomNumber = Math.random() * (max - min) + min;
  return Number(randomNumber.toFixed(decimal));
}

function getRandom (min, max) {
  return getDecimalRandom(min, max, 0);
}

function getRandomArrayElement (elements) {
  return elements[getRandom(0, elements.length - 1)];
}

function getRandomArray(arr) {
  const countElement = getRandom(1, arr.length);
  const newArray = [];
  while (newArray.length < countElement) {
    const element = getRandomArrayElement(arr);
    !newArray.includes(element) ? newArray.push(element) : newArray;
  }
  return newArray;
}

function getOffer() {
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
}

const offers = new Array(COUNT_OFFER).fill().map(getOffer);

offers;
