import Character from './app';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon', health = 100, level = 1, attack = 10, defence = 40) {
    super(name, type);
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

const daemon = new Daemon('Daemon');
console.log(daemon);
