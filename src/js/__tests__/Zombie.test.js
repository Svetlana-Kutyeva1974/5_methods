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

test('string length name error', () => {
  const result1 = new Zombie('hero', 'Zombie');
  const result2 = new Character('hero', 'Zombie');
  expect(result2).not.toMatchObject(result1);
});

test('bow super type error ', () => {
  const result3 = new Zombie('hero5', 'Zombie');
  const result33 = new Character('hero5', 'Zombie');
  result3.damage(2);
  result33.damage(2);
  expect(result3.damage(2)).toBe(result33.damage(2));
});

test('bow super level type error ', () => {
  const result3 = new Zombie('hero5', 'Zombie');
  const result33 = new Character('hero5', 'Zombie');
  result3.levelUp();
  result33.levelUp();
  expect(result3.levelUp()).toBe(result33.levelUp());
});
