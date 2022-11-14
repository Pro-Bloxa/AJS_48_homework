export default class Validator {
  validateUsername(name) {
    this.name = name;
    if (/^[a-z\d_-]$/.test(name) === false) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    } else if (/\d{4,}/.test(name) === true) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    } else if (/^[\d_-]/.test(name) === true) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    } else if (/[\d_-]$/.test(name) === true) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
    }
    return this.name;
  }
}

new Validator().validateUsername('Gbkjk02d');
