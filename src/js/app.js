export class Character {
static TYPES = {
  Bowman: [25, 25],
  Swordsman: [40, 10],
  Magician: [10, 40],
  Daemon: [10, 40],
  Undead: [25, 25],
  Zombie: [40, 10],
}

constructor(name, type) { //
  if (name.length > 10 || name.length < 2) {
    throw new Error('Ошибка, имя должно содержать не менее 2 и не более 10 символов');
  }
  if (!Object.keys(Character.TYPES).includes(type)) {
    throw new Error('Ошибка, недопустимый тип элемента');
  }
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = Character.TYPES[`${type}`][0];
  this.defence = Character.TYPES[`${type}`][1];
}

levelUp() {
  if (this.health !== 0) {
    this.level += 1;
    this.attack += 0.2 * this.attack;
    this.defence += 0.2 * this.defence;
    this.health = 100;
  } else {
    throw new Error('Нельзя повысить уровень умершего');
  }
}

damage(points) {
  if (this.health >= 0) {
    this.health -= points * (1 - this.defence / 100);
  } else {
    throw new Error('Ошибка, уровень жизни игрока меньше нуля');
  }
}
}

export class Bowman extends Character {
}
export class Magician extends Character {
}
export class Swordsman extends Character {
}
export class Daemon extends Character {
}
export class Zombie extends Character {
}
export class Undead extends Character {
}
