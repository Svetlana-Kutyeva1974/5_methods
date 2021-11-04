import Swordsman from '../Swordsman.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Swordsman('hero', 'Swordsman');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Swordsman('hero', 'Swordsman');
  expect(result0.defence).toBe(Character.TYPES[`${result0.type}`][1]);
});
test('Повышение уровня умершего персонажа. Ошибка', () => {
  expect(() => {
    const result = new Swordsman('hero', 'Swordsman');
    result.health = 0;
    result.levelUp();
  }).toThrow('Нельзя повысить уровень умершего');
});

test('Повышение уровня персонажа', () => {
  const result = new Swordsman('hero', 'Swordsman');
  result.health = 80;
  result.levelUp();
  const expected = {
    name: 'hero',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(result).toEqual(expected);
});

test('damage уменьшение здоровья персонажа', () => {
  const heroes = new Swordsman('hero', 'Swordsman');
  heroes.damage(50);
  const result = heroes.health;
  expect(result).toBeCloseTo(55);
});
