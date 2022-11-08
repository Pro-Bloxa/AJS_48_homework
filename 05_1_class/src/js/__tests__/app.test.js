import Character from '../app';

test('character is created', () => {
  const newCharacter = new Character('bowerman', 'Bowerman');
  expect(newCharacter.name).toBe('bowerman');
  expect(newCharacter.type).toBe('Bowerman');
});

test('error name', () => {
  expect(() => {
    const character = new Character('b', 'Bowerman');
    console.log(character);
  }).toThrowError('Некорректная длина имени');
});

test('error type', () => {
  expect(() => {
    const character = new Character('bowerman', 'bowmann');
    console.log(character);
  }).toThrowError('Некорректный тип');
});
