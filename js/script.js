import { onlyNumberAndEnglish, strongPassword } from './validator.js';

const usernameInput = document.querySelector('#username');
const successMsg = document.querySelector('.success-message');
const failureMsg = document.querySelector('.failure-message');

const passwordInput = document.querySelector('#password');
const passedPasswordMsg = document.querySelector('.passed-password');
const strongPasswordMsg = document.querySelector('.strong-password');

const passwordRetypeInput = document.querySelector('#password-retype');
const matchMsg = document.querySelector('.match-message');
const mismatchMsg = document.querySelector('.mismatch-message');

const signUpBtn = document.querySelector('#sign-up');

const isValid = {
  username: false,
  password: false,
  passwordRetype: false,
};

const clearAll = () => {
  const msgArr = [successMsg, failureMsg, passedPasswordMsg, strongPasswordMsg, matchMsg, mismatchMsg];

  msgArr.forEach((item) => {
    item.classList.add('hide');
  });

  for (let item in isValid) {
    isValid[item] = false;
  }
};

usernameInput.addEventListener('keyup', () => {
  if (onlyNumberAndEnglish(usernameInput.value)) {
    // 아이디 유효성 검사 성공
    isValid.username = true;
    successMsg.classList.remove('hide');
    failureMsg.classList.add('hide');
  } else {
    // 아이디 유효성 검사 실패
    isValid.username = false;
    successMsg.classList.add('hide');
    failureMsg.classList.remove('hide');
  }
});

passwordInput.addEventListener('keyup', () => {
  if (strongPassword(passwordInput.value)) {
    // 비밀번호 유효성 검사 성공
    isValid.password = true;
    passedPasswordMsg.classList.remove('hide');
    strongPasswordMsg.classList.add('hide');
  } else {
    // 비밀번호 유효성 검사 실패
    isValid.password = false;
    passedPasswordMsg.classList.add('hide');
    strongPasswordMsg.classList.remove('hide');
  }
});

passwordRetypeInput.addEventListener('keyup', () => {
  if (passwordInput.value === passwordRetypeInput.value) {
    isValid.passwordRetype = true;
    matchMsg.classList.remove('hide');
    mismatchMsg.classList.add('hide');
  } else {
    isValid.passwordRetype = false;
    matchMsg.classList.add('hide');
    mismatchMsg.classList.remove('hide');
  }
});

signUpBtn.addEventListener('click', () => {
  let valid = true;

  for (let item in isValid) {
    if (isValid[item] === false) {
      valid = false;
    }
  }

  if (valid) {
    alert('회원가입이 완료되었습니다.');
    clearAll();
  } else {
    alert('아이디 또는 비밀번호를 확인해주세요.');
  }
});
