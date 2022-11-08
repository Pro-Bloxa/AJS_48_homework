import Undead from '../undead';

test('undead is created', () => {
  const newCharacter = new Undead('undead', 'Undead');
  expect(newCharacter.name).toBe('undead');
  expect(newCharacter.type).toBe('Undead');
});
