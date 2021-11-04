import Character from '../app.js';

test('app string length name error', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const obj = new Character('heroismerror', 'Magician');
  }).toThrow(/Ошибка, имя должно содержать не менее 2 и не более 10 символов/);
});

test('app type error ', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const result3 = new Character('hero5', 'Magiciancheck');
  }).toThrow(/Ошибка, недопустимый тип элемента/);
});
/*
test.each([
  [1, 25, 25, 100, new Character('hero12', 'Bowman')],
])(
  ' return to the health level',
  (level, attack, defence, health, createNewObject) => {
    createNewObject.levelUp();
    expect(level).toBe(1);
    expect(attack).toBeCloseTo(25);
    expect(defence).toBeCloseTo(25);
    expect(health).toBe(100);
  },
);
*/
/*
test('damage уменьшение здоровья персонажа', () => {
  const heroes = new Character('hero', 'Bowman');
  console.log(heroes);
  heroes.damage.call('Character', 65);
  // eslint-disable-next-line no-unused-vars
  const result = heroes.health;
  console.log(heroes);
  expect(result).toBeCloseTo(51.25);
});
*/
test('level health error', () => {
  expect(() => {
    const result3 = new Character('hero8', 'Bowman');
    result3.health = 0;
    result3.levelUp();
  }).toThrow(/Нельзя повысить уровень умершего/);
});

test('level domage error', () => {
  const result3 = new Character('hero8', 'Bowman');
  result3.health = -1;
  expect(() => {
    result3.damage(2000);
  }).toThrow(/Ошибка, уровень жизни игрока меньше нуля/);
});
