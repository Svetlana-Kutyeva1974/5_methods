import Magician from '../Bowman.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Magician('hero', 'Magician');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Magician('hero', 'Magician');
  expect(result0.defence).toEqual(Character.TYPES[`${result0.type}`][1]);
});

test('string length name error', () => {
  const result1 = new Magician('hero', 'Magician');
  const result2 = new Character('hero', 'Magician');
  expect(result2).toBe(result1);
});
