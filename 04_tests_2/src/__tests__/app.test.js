import showLevel from '../app';

test('check function showLevel', () => {
  const character = {
    name: 'Маг',
    health: 90,
  };
  const result = showLevel(character);
  expect(result).toBe('healthy');
});
