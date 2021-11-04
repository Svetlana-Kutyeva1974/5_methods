import Zombie from '../Zombie.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Zombie('hero', 'Zombie');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Zombie('hero', 'Zombie');
  expect(result0.defence).toBe(Character.TYPES[`${result0.type}`][1]);
});

test('Повышение уровня умершего персонажа. Ошибка', () => {
  expect(() => {
    const result = new Zombie('hero', 'Zombie');
    result.health = 0;
    result.levelUp();
  }).toThrow('Нельзя повысить уровень умершего');
});

test('Повышение уровня персонажа', () => {
  const result = new Zombie('hero', 'Zombie');
  result.health = 60;
  result.levelUp();
  const expected = {
    name: 'hero',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(result).toEqual(expected);
});

test('damage уменьшение здоровья персонажа', () => {
  const heroes = new Zombie('hero', 'Zombie');
  heroes.damage(50);
  const result = heroes.health;
  expect(result).toBeCloseTo(55);
});
