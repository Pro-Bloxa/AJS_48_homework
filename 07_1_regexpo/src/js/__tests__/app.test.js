import Validator from '../app';

test('Проверка пройдена', () => {
  const received = new Validator().validateUsername('yes-12ngh_jh1l');
  expect(received).toBe('yes-12ngh_jh1l');
}); // тест не пройден

test('Недопустимые символы', () => {
  const received = new Validator().validateUsername('yes-1выа2ngh_jh1l');
  expect(received).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
}); // тест не пройден

test('Более трех цифр подряд', () => {
  const received = new Validator().validateUsername('yes-1234ngh_jh1l');
  expect(received).toBe(true);
}); // тест не пройден

test('Начало с неверного символа', () => {
  const received = new Validator().validateUsername('5yes-12ngh_jh1l');
  expect(received).toBe(true);
}); // тест не пройден

test('Оканчивается на неверный символ', () => {
  const received = new Validator().validateUsername('yes-12ngh_jh1l5');
  expect(received).toBe(true);
}); // тест не пройден
