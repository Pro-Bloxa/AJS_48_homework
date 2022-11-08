import Magician from '../magician';

test('magician is created', () => {
  const newCharacter = new Magician('magician', 'Magician');
  expect(newCharacter.name).toBe('magician');
  expect(newCharacter.type).toBe('Magician');
});
