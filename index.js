'use strict';

const DENYLIST = new Set([
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
  '12345678909'
]);
const validTypes = new Set(['string', 'number']);

const isValidType = type => validTypes.has(typeof type);
const isBlocked = input => DENYLIST.has(input);
const isValidLength = string => string.length === 11;
const isValidChars = string => typeof string === 'number' || string.match(/^[0-9\-\.]*$/);
const sanitize = input => {
  if (typeof input === 'number') {
    input = input.toString();
  }
  return input.replace(/(\s|-|\.)/g, '');
};
const verificationDigit = cpfBase => {
  const modulus = cpfBase.length + 1;
  let sum = 0;
  for (let i = 0; i < cpfBase.length; i++) {
    sum += parseInt(cpfBase[i], 10) * (modulus - i);
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

module.exports = function (input) {
  if (!isValidType(input) || !isValidChars(input)) {
    return false;
  }
  const cpf = sanitize(input);

  if (!isValidLength(cpf) || isBlocked(cpf)) {
    return false;
  }

  let cpfBase = cpf.substr(0,9);
  cpfBase += verificationDigit(cpfBase);
  cpfBase += verificationDigit(cpfBase);
  return cpfBase === cpf;
};
