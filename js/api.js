//import {putPinsToMap} from './form.js';
import {openSuccessModal, openErrorModal} from './modal.js';
import {showAlert} from './util.js';

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((offers) => {
      onSuccess(offers);
    })
    .catch((err) => showAlert(err));
};

const sendData = (body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: body,
    },
  )
    .then((response) => {
      if (response.ok) {
        openSuccessModal();
      } else {
        openErrorModal();
      }
    })
    .catch(() => openErrorModal());
};

export {getData, sendData};
