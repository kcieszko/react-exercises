const multiply = require('./multiply');

it('should multiply a by b', () => {
  expect(multiply(5, 6)).toBe(30);
  expect(multiply(3, 9)).toBe(27);
  expect(multiply(5, 43)).toBe(215);
});
