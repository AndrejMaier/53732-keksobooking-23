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

getDecimalRandom(10, 50, 5);

function getRandom (min, max) {
  return getDecimalRandom(min, max, 0);
}

getRandom(5, 70);


//Выполнение домашнего задания раздела 4

//const AVATAR_COUNT = 8;
const TYPE_HOUSE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
//const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
//const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

function getRandomArrayElement (elements) {
  return elements[getRandom(0, elements.length - 1)];
}

function getOffer() {
  return {
    author: {
      //avatar: 'img/avatars/user{{0' + getRandom(1, AVATAR_COUNT) + '}}.png',
    },
    offer: {
      title: 'Сдача недвижимости',
      //address: {{location.x}} {{location.y}},
      price: getRandom(0, 100000),
      type: getRandomArrayElement(TYPE_HOUSE),
      rooms: getRandom(1, 20),
      guests: getRandom(0, 50),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      //features: ,
      //description: ,
      //photos: ,
    },
    location: {
      lat: getDecimalRandom(35.65000, 35.70000, 5),
      lng: getDecimalRandom(139.70000, 139.80000, 5),
    },
  };
}

getOffer();

//console.log(getOffer());

// В файле main.js на основе написанных в прошлом задании вспомогательных функций напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

// Структура каждого объекта должна быть следующей:

//author, объект — описывает автора. Содержит одно поле:
//  + avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются.
//offer, объект — содержит информацию об объявлении. Состоит из полей:
//  title, строка — заголовок предложения. Придумайте самостоятельно.
//  address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
//  price, число — стоимость. Случайное целое положительное число.
//  + type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
//  rooms, число — количество комнат. Случайное целое положительное число.
//  guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
//  + checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
//  + checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
//  + features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
//  description, строка — описание помещения. Придумайте самостоятельно.
//  + photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content///intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
//location, объект — местоположение в виде географических координат. Состоит из двух полей:
//  lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
//  lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.

