
const openModal = (modalTemplate) => {
  const modal = modalTemplate.cloneNode(true);
  document.body.appendChild(modal);
};

// const closeModal = () {

// }

export {openModal};
