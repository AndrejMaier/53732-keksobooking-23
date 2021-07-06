import {roomsAndGuests} from './vars.js';

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');


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

// Валидация формы
const rooms = document.querySelector('#room_number');
const quantityGuests = document.querySelector('#capacity');
const quantityGuestsList = quantityGuests.querySelectorAll('option');


const syncRoomsAndGuests = () => {
  rooms.addEventListener('change', (event) => {
    const room = Number(event.target.value);
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

export {disableForm, enableForm, syncRoomsAndGuests};
