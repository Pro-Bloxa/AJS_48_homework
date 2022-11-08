import Bowerman from '../bowerman';

test('bowerman is created', () => {
  const newCharacter = new Bowerman('bowerman', 'Bowerman');
  expect(newCharacter.name).toBe('bowerman');
  expect(newCharacter.type).toBe('Bowerman');
});
