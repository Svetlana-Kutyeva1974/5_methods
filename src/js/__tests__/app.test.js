import Character from '../app.js';
/*
test.each([
  ['hero1', 'Bowman', new heroes.Character('hero1', 'Bowman')],
  ['hero2', 'Bowman', new heroes.Bowman('hero2', 'Bowman')],
  ['hero3', 'Magician', new heroes.Magician('hero3', 'Magician')],
  ['hero4', 'Magician', new heroes.Magician('hero4', 'Magician')],
  ['hero5', 'Magician', new heroes.Magician('hero5', 'Magician')],
  ['hero6', 'Magician', new heroes.Magician('hero6', 'Magician')],
  ['hero7', 'Magician', new heroes.Magician('hero7', 'Magician')],
])(
  'return a string corresponding to the new class',
  (name, type, createNewObject) => {
    for (const key of Object.values(heroes)) {
      const ClassName = key;
      const result = new ClassName(name, type);
      expect(result).toEqual(createNewObject);
    }
  },
);
*/
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
test(' level live +1', () => {
  const result4 = new heroes.Character('hero7', 'Bowman');
  expect(result4.levelUp()).;
});
*/
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

test('level domage 20', () => {
  const result3 = new Character('hero8', 'Bowman');
  result3.damage(20);
  expect(result3.health).toBeCloseTo(85);
});

test('level health error', () => {
  const result3 = new Character('hero8', 'Bowman');
  result3.health = 0;
  expect(() => {
    result3.levelUp();
  }).toThrow(/Нельзя повысить уровень умершего/);
});

test('level domage error', () => {
  const result3 = new Character('hero8', 'Bowman');
  result3.health = -1;
  /*
  result3.damage(2000);
  */
  expect(() => {
    result3.damage(2000);
  }).toThrow(/Ошибка, уровень жизни игрока меньше нуля/);
});
