import {roomsAndGuests, typeHouseAndPrice} from './vars.js';

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
const typeHouse = document.querySelector('#type');
const priceField = document.querySelector('#price');
const rooms = document.querySelector('#room_number');
const quantityGuests = document.querySelector('#capacity');
const quantityGuestsList = quantityGuests.querySelectorAll('option');

// Переводит страницу в неактивное состояние
const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormFieldsets.forEach((element) => {
    element.disabled = true;
  });
  mapFilters.classList.add('map__filters--disabled');
  mapFiltersSelect.forEach((element) => {
    element.disabled = true;
  });
  mapFiltersFieldset.forEach((element) => {
    element.disabled = true;
  });
};

// Переводит страницу в активное состояние
const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFieldsets.forEach((element) => {
    element.disabled = false;
  });
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersSelect.forEach((element) => {
    element.disabled = false;
  });
  mapFiltersFieldset.forEach((element) => {
    element.disabled = false;
  });
};

//
// Валидация формы
//

// синхронизация полей "количество комнат" и "количество мест"
const syncRoomsAndGuests = () => {
  rooms.addEventListener('change', (e) => {
    const room = Number(e.target.value);
    quantityGuestsList.forEach((option) => {
      if (roomsAndGuests[room].includes(Number(option.value))) {
        option.disabled = false;
        option.selected = true;
      }else {
        option.disabled = true;
      }
    });
  });
};

// синхронизация полей "тип жилья" и "цена за ночь"
const syncTypeHouseAndPrice = () => {
  typeHouse.addEventListener('change', (e) => {
    priceField.min = typeHouseAndPrice[e.target.value];
    priceField.placeholder = typeHouseAndPrice[e.target.value];
  });
};

const checkinField = document.querySelector('#timein');
const checkinFieldList = checkinField.querySelectorAll('option');
const checkoutField = document.querySelector('#timeout');
const checkoutFieldList = checkoutField.querySelectorAll('option');

// обработчик события изменения значения полей
const syncCheckTime = (time1, time2) => {
  time1.addEventListener('change', (e) => {
    time2.forEach((option) => {
      if (option.value === e.target.value) {
        option.selected = true;
      }
    });
  });
};

//синхронизация полей "время заезда и выезда"
const syncCheckinAndCheckout = () => {
  syncCheckTime(checkinField, checkoutFieldList);
  syncCheckTime(checkoutField, checkinFieldList);
};

// настройка формы
const initForm = () => {
  syncRoomsAndGuests();
  syncTypeHouseAndPrice();
  syncCheckinAndCheckout();
};


export {disableForm, enableForm, initForm};
