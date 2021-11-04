import Daemon from '../Daemon.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Daemon('hero', 'Daemon');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Daemon('hero', 'Daemon');
  expect(result0.defence).toBe(Character.TYPES[`${result0.type}`][1]);
});

test('Повышение уровня умершего персонажа. Ошибка', () => {
  expect(() => {
    const result = new Daemon('hero', 'Daemon');
    result.health = 0;
    result.levelUp();
  }).toThrow('Нельзя повысить уровень умершего');
});

test('Повышение уровня персонажа', () => {
  const result = new Daemon('hero', 'Daemon');
  result.health = 50;
  result.levelUp();
  const expected = {
    name: 'hero',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(result).toEqual(expected);
});

test('damage уменьшение здоровья персонажа', () => {
  const heroes = new Daemon('hero', 'Daemon');
  heroes.damage(20);
  const result = heroes.health;
  expect(result).toBeCloseTo(88);
});
