import Validator from '../app';

test('Валидное имя (пройдено); только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)', () => {
  const received = new Validator().validateUsername('yes-12ngh_jh1l');
  console.log(received);
  expect(received).toEqual('yes-12ngh_jh1l');
});

test('Валидное имя (ОШИБКА); только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)', () => {
  expect(() => {
    const received = new Validator().validateUsername('yes-12ngh_jh1l$');
    console.log(received);
  }).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('Более трех цифр подряд (ОШИБКА)', () => {
  expect(() => {
    const received = new Validator().validateUsername('yes-1234ngh_jh1l');
    console.log(received);
  }).toThrow('Имя не должно содержать подряд более трёх цифр');
});

test('Начало с неверного символа (ОШИБКА)', () => {
  expect(() => {
    const received = new Validator().validateUsername('5yes-12ngh_jh1l');
    console.log(received);
  }).toThrow('Имя не должно начинаться цифрами, символами подчёркивания или тире');
});

test('Начало с неверного символа (ОШИБКА)', () => {
  expect(() => {
    const received = new Validator().validateUsername('yes-12ngh_jh1l5');
    console.log(received);
  }).toThrow('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
});
