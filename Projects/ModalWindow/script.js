'use strict';

const modal = document.querySelector('.modal');
const showModalBtns = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

function showModal() {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
}

for (const btn of showModalBtns) {
  btn.addEventListener('click', showModal);
}
