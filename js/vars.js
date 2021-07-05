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

export {FEATURES, translatedTypeHouse, nameClasses};
