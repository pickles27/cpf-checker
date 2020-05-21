const cpfValidator = require('./index.js');

test('Return true for valid CPF!', () => {
  expect(cpfValidator('585.616.790-26')).toBe(true);
  expect(cpfValidator('417.626.383-04')).toBe(true);
  expect(cpfValidator('406.583.454-60')).toBe(true);
  expect(cpfValidator('274.898.476-56')).toBe(true);
  expect(cpfValidator('676.717.355-07')).toBe(true);
});

test('Return true for valid CPF in numeric form!', () => {
  expect(cpfValidator(58561679026)).toBe(true);
  expect(cpfValidator(41762638304)).toBe(true);
  expect(cpfValidator(40658345460)).toBe(true);
  expect(cpfValidator(27489847656)).toBe(true);
  expect(cpfValidator(67671735507)).toBe(true);
});

test('Return false for invalid CPF!', () => {
  expect(cpfValidator('585.616.790-27')).toBe(false);
});

test('Blacklisted CPFs are not allowed!', () => {
  expect(cpfValidator('111.111.111-11')).toBe(false);
});

test('No objects allowed!', () => {
  expect(cpfValidator({'hi': ':('})).toBe(false);
});

test('No letters allowed!', () => {
  expect(cpfValidator('585.616a.790-26')).toBe(false);
});

test('Over 11 numbers not allowed!', () => {
  expect(cpfValidator('585.6167.7905-26')).toBe(false);
});

test('Under 11 numbers not allowed!', () => {
  expect(cpfValidator('585.67.795-26')).toBe(false);
});

test('No symbols allowed!', () => {
  expect(cpfValidator(Symbol('585.616.790-26'))).toBe(false);
});

test('Returns false for undefined input!', () => {
  expect(cpfValidator(undefined)).toBe(false);
});

test('Returns false for null input!', () => {
  expect(cpfValidator(null)).toBe(false);
});

test('Returns false for empty string!', () => {
  expect(cpfValidator('')).toBe(false);
});

