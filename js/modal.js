
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const openModal = (modalTemplate) => {
  const modal = modalTemplate.cloneNode(true);
  document.body.appendChild(modal);
  document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (isEscEvent){
      document.body.removeChild(modal);
    }
  });
};

// const closeModal = (modal) => {
// };

export {openModal};
