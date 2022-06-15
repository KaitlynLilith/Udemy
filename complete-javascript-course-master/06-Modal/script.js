'use strict';
const modal = document.querySelector('.modal');
console.log(modal);
const overlay = document.querySelector('.overlay');
console.log(overlay);
const btnsCloseModal = document.querySelector('.close-modal');
console.log(btnsCloseModal);
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log('Closed Modal');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('Opened Modal');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  console.log(`Event listener on btnsOpenModal [${i}]`);
}

btnsCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    console.log(`Event listener on escape btn`);
  }
});
