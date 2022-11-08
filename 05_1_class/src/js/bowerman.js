import Character from './app';

export default class Bowerman extends Character {
  constructor(name, type = 'Bowerman', health = 100, level = 1, attack = 25, defence = 25) {
    super(name, type);
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

const bowerman = new Bowerman('Bowerman');
console.log(bowerman);
