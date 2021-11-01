import Bowman from '../Bowman.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Bowman('hero', 'Bowman');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Bowman('hero', 'Bowman');
  expect(result0.defence).toEqual(Character.TYPES[`${result0.type}`][1]);
});

test('string length name error', () => {
  const result1 = new Bowman('hero', 'Bowman');
  const result2 = new Character('hero', 'Bowman');
  expect(result2).toBe(result1);
});
