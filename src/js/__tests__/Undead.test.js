import Undead from '../Undead.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Undead('hero', 'Undead');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Undead('hero', 'Undead');
  expect(result0.defence).toBe(Character.TYPES[`${result0.type}`][1]);
});

test('string length name error', () => {
  const result1 = new Undead('hero', 'Undead');
  const result2 = new Character('hero', 'Undead');
  expect(result2).not.toMatchObject(result1);
});

test('Повышение уровня умершего персонажа. Ошибка', () => {
  expect(() => {
    const result = new Undead('hero', 'Undead');
    result.health = 0;
    result.levelUp();
  }).toThrow('Нельзя повысить уровень умершего');
});

test('Повышение уровня персонажа. Ошибка', () => {
  const result = new Undead('hero', 'Undead');
  result.health = 80;
  result.levelUp();
  const expected = {
    name: 'hero',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(result).toEqual(expected);
});

test('damage уменьшение здоровья персонажа', () => {
  const heroes = new Undead('hero', 'Undead');
  heroes.damage(65);
  const result = heroes.health;
  expect(result).toBeCloseTo(51.25);
});
