'use strict';

const text = document.querySelector('p');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  if (text.classList.contains('red')) {
    text.classList.remove('red');
  } else {
    text.classList.add('red');
  }
});