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

test('string length name error', () => {
  const result1 = new Magician('hero', 'Magician');
  const result2 = new Character('hero', 'Magician');
  expect(result2).not.toMatchObject(result1);
});

test('bow super type error ', () => {
  const result3 = new Magician('hero5', 'Magician');
  const result33 = new Character('hero5', 'Magician');
  result3.damage(20);
  result33.damage(20);
  expect(result3.damage(20)).toBe(result33.damage(20));
});

test('bow super level type error ', () => {
  const result3 = new Magician('hero5', 'Magician');
  const result33 = new Character('hero5', 'Magician');
  result3.levelUp();
  result33.levelUp();
  expect(result3.levelUp()).toBe(result33.levelUp());
});
