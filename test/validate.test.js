const cpfValidator = require('../index.js');

test('585.616.790-26 should be GOOD!', () => {
  expect(cpfValidator('585.616.790-26')).toBe(true);
});

test('585.616.790-27 should be BAD!', () => {
  expect(cpfValidator('585.616.790-27')).toBe(false);
});