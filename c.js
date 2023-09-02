function myfunction() {
  console.log('I was Clicked');
}

function mouse() {
  console.log('mouse over ');
}

function key() {
  console.log('Key Was Pressed ');
}

function keyd() {
  console.log('Key Was Down ');
}

function key() {
  console.log('Key Was Pressed ');
}

function keyu() {
  console.log('Key Was Up ');
}

//event listeners

const $box1 = document.getElementById('Box-1');

$box1.addEventListener('click', (e) => {
  console.log('Event object ', e);
});

const nameInput = document.getElementById('nameInput');
nameInput.addEventListener(keypress, (e) => {
  console.log('key', e);
});

// onerror = (e) => {};

// import { addEventListener } from "module";

const container = document.getElementById('con');

container.addEventListener('click', () => {
  console.log('clicked by container');
});
