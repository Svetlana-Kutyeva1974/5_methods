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

test('string length name error', () => {
  const result1 = new Swordsman('hero', 'Swordsman');
  const result2 = new Character('hero', 'Swordsman');
  expect(result2).not.toMatchObject(result1);
});
test('bow super type error ', () => {
  const result3 = new Swordsman('hero5', 'Swordsman');
  const result33 = new Character('hero5', 'Swordsman');
  result3.damage(4);
  result33.damage(4);
  expect(result3.damage(4)).toBe(result33.damage(4));
});

test('bow super level type error ', () => {
  const result3 = new Swordsman('hero5', 'Swordsman');
  const result33 = new Character('hero5', 'Swordsman');
  result3.levelUp();
  result33.levelUp();
  expect(result3.levelUp()).toBe(result33.levelUp());
});
