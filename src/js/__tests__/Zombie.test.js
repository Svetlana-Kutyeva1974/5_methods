import Zombie from '../Bowman.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Zombie('hero', 'Zombie');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Zombie('hero', 'Zombie');
  expect(result0.defence).toEqual(Character.TYPES[`${result0.type}`][1]);
});

test('string length name error', () => {
  const result1 = new Zombie('hero', 'Zombie');
  const result2 = new Character('hero', 'Zombie');
  expect(result2).toBe(result1);
});
