//import {putPinsToMap} from './form.js';
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

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      metod: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('не удалось отправить форму');
      }
    })
    .catch(() => {
      onFail('не удалось отправить форму');
    });
};

export {getData, sendData};
