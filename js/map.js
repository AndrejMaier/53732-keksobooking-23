import {setAddress, DECIMAL} from './vars.js';
import {enableForm, addressField} from './form.js';
import {renderCard} from './card.js';

const map = L.map('map-canvas');

const loadMap = () => {
  map
    .on('load', () => {
      enableForm();
    })
    .setView(setAddress, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  setAddress,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  const address = evt.target.getLatLng();
  const lat = address.lat.toFixed(DECIMAL);
  const lng = address.lng.toFixed(DECIMAL);
  addressField.value = `${lat}, ${lng}`;
});

const putPinsToMap = (offers) => {
  offers.forEach((offer) => {
    const lat = offer.location.lat;
    const lng = offer.location.lng;

    const pinIcon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
    });

    const pinMarker = L.marker({
      lat,
      lng,
    },
    {
      icon: pinIcon,
    });

    pinMarker
      .addTo(map)
      .bindPopup(renderCard(offer),
        {
          keepInView: true,
        },
      );
  });
};

export {loadMap, putPinsToMap};
