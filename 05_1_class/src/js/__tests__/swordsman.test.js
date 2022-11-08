import Swordsman from '../swordsman';

test('swordsman is created', () => {
  const newCharacter = new Swordsman('swordsman', 'Swordsman');
  expect(newCharacter.name).toBe('swordsman');
  expect(newCharacter.type).toBe('Swordsman');
});
