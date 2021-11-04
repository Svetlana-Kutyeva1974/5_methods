import Magician from '../Magician.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Magician('hero', 'Magician');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Magician('hero', 'Magician');
  expect(result0.defence).toBe(Character.TYPES[`${result0.type}`][1]);
});

test('Повышение уровня умершего персонажа. Ошибка', () => {
  expect(() => {
    const result = new Magician('hero', 'Magician');
    result.health = 0;
    result.levelUp();
  }).toThrow('Нельзя повысить уровень умершего');
});

test('Повышение уровня персонажа', () => {
  const result = new Magician('hero', 'Magician');
  result.health = 50;
  result.levelUp();
  const expected = {
    name: 'hero',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(result).toEqual(expected);
});

test('damage уменьшение здоровья персонажа', () => {
  const heroes = new Magician('hero', 'Magician');
  heroes.damage(20);
  const result = heroes.health;
  expect(result).toBeCloseTo(88);
});
