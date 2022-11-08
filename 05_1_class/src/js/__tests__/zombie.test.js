import Zombie from '../zombie';

test('zombie is created', () => {
  const newCharacter = new Zombie('zombie', 'Zombie');
  expect(newCharacter.name).toBe('zombie');
  expect(newCharacter.type).toBe('Zombie');
});
