const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const translatedTypeHouse= {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const nameClasses = {
  avatar: '.popup__avatar',
  title: '.popup__title',
  address: '.popup__text--address',
  price: '.popup__text--price',
  type: '.popup__type',
  rooms: '.popup__text--capacity',
  guests: '.popup__text--capacity',
  checkin: '.popup__text--time',
  checkout: '.popup__text--time',
  features: '.popup__features',
  photos: '.popup__photos',
};

const roomsAndGuests = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const typeHouseAndPrice = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 3000,
};

export {FEATURES, translatedTypeHouse, nameClasses, roomsAndGuests, typeHouseAndPrice};
