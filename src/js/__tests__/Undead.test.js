import Undead from '../Undead.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Undead('hero', 'Undead');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Undead('hero', 'Undead');
  expect(result0.defence).toEqual(Character.TYPES[`${result0.type}`][1]);
});

test('string length name error', () => {
  const result1 = new Undead('hero', 'Undead');
  const result2 = new Character('hero', 'Undead');
  expect(result2).toBe(result1);
});
