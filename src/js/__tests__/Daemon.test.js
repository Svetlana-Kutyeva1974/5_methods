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

test('string length name error', () => {
  const result1 = new Daemon('hero', 'Daemon');
  const result2 = new Character('hero', 'Daemon');
  expect(result2).not.toMatchObject(result1);
});

test('bow super type error ', () => {
  const result3 = new Daemon('hero5', 'Daemon');
  const result33 = new Character('hero5', 'Daemon');
  result3.damage(10);
  result33.damage(10);
  expect(result3.damage(10)).toBe(result33.damage(10));
});

test('bow super level type error ', () => {
  const result3 = new Daemon('hero5', 'Daemon');
  const result33 = new Character('hero5', 'Daemon');
  result3.levelUp();
  result33.levelUp();
  expect(result3.levelUp()).toBe(result33.levelUp());
});
