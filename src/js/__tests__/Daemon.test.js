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
  expect(result2).toEqual(result1);
});
