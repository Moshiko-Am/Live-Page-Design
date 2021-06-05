'use strict';
function toggleMenu() {
  var elBtn = document.querySelector('.btn-menu');
  var elClose = document.querySelector('.menu-close');
  document.body.classList.toggle('menu-open');
  elBtn.classList.toggle('hide');
  elClose.classList.toggle('hide');
}

function onModal() {
  var elModal = document.querySelector('.modal');
  var elScreen = document.querySelector('.modal-screen');
  elModal.classList.toggle('close');
  elScreen.classList.toggle('off');
}
