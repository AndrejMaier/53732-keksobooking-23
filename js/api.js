//import {putPinsToMap} from './form.js';
import { openModal } from './modal.js';
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
      body: body,
    },
  )
    .then((response) => {
      if (response.ok) {
        //openModal(onSuccess);
        console.log(response.status);
      } else {
        //openModal(onFail);
        console.log(response.status);
      }
    })
    .catch(
      openModal(onFail),
    );
};

export {getData, sendData};
