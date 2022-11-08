import Daemon from '../daemon';

test('daemon is created', () => {
  const newCharacter = new Daemon('daemon', 'Daemon');
  expect(newCharacter.name).toBe('daemon');
  expect(newCharacter.type).toBe('Daemon');
});
