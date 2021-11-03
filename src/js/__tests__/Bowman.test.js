import Bowman from '../Bowman.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Bowman('hero', 'Bowman');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Bowman('hero', 'Bowman');
  expect(result0.defence).toBe(Character.TYPES[`${result0.type}`][1]);
});

test('string length name error', () => {
  const result1 = new Bowman('hero', 'Bowman');
  const result2 = new Character('hero', 'Bowman');
  expect(result2).not.toMatchObject(result1);
});

test('bow super type error ', () => {
  const result3 = new Bowman('hero5', 'Bowman');
  const result33 = new Character('hero5', 'Bowman');
  result3.damage(20);
  result33.damage(20);
  expect(result3.damage(20)).toBe(result33.damage(20));
});

test('bow super level type error ', () => {
  const result3 = new Bowman('hero5', 'Bowman');
  const result33 = new Character('hero5', 'Bowman');
  result3.levelUp();
  result33.levelUp();
  expect(result3.levelUp()).toBe(result33.levelUp());
});
