'use strict';

const passwordEl = document.querySelector('#password');
const confirmPassEl = document.querySelector('#confirm_password');
const passwordNoMatchLabel = document.querySelector('.password--no-match');

let password, passwordConfirmation;

function anotherFunction(e) {
  password = e.target.value;
}

function someFunction(e) {
  passwordConfirmation = e.target.value;

  let border = '1px solid rgba(0, 0, 0, 0.13)';

  if (passwordConfirmation === password) {
    passwordEl.setAttribute('valid', '');
    passwordEl.removeAttribute('invalid');
    confirmPassEl.setAttribute('valid', '');
    confirmPassEl.removeAttribute('invalid');

    passwordNoMatchLabel.style.display = 'none';
    passwordEl.style.border = border;
    confirmPassEl.style.border = border;
  }
}

passwordEl.addEventListener('focusout', anotherFunction);
confirmPassEl.addEventListener('focusout', someFunction);
