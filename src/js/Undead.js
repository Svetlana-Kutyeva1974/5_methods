import Character from './app.js';

export default class Undead extends Character {
  constructor(...args) {
    super(...args);
    this.attack = Character.TYPES[`${this.type}`][0];
    this.defence = Character.TYPES[`${this.type}`][1];
  }

  damage(point) {
    super.damage(point);
  }

  levelUp() {
    super.levelUp();
  }
}
