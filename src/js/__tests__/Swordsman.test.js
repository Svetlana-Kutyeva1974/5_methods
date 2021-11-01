import Swordsman from '../Swordsman.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Swordsman('hero', 'Swardsman');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Swordsman('hero', 'Bowman');
  expect(result0.defence).toEqual(Character.TYPES[`${result0.type}`][1]);
});

test('string length name error', () => {
  const result1 = new Swordsman('hero', 'Swardsman');
  const result2 = new Character('hero', 'Bowman');
  expect(result2).toBe(result1);
});
