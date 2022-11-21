export default class ErrorRepository {
  constructor() {
    this.error = new Map([
      [1, 'Error number 1'],
      [2, 'Error number 2'],
      [3, 'Error number 3'],
    ]);
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    throw new Error('Unknown error');
  }
}
