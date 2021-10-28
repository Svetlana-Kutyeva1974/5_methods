import * as heroes from '../app.js';

test.each([
  ['hero1', 'Bowman', new heroes.Character('hero1', 'Bowman')],
  ['hero2', 'Bowman', new heroes.Bowman('hero2', 'Bowman')],
  ['hero3', 'Magician', new heroes.Magician('hero3', 'Magician')],
  ['hero4', 'Magician', new heroes.Magician('hero4', 'Magician')],
  ['hero5', 'Magician', new heroes.Magician('hero5', 'Magician')],
  ['hero6', 'Magician', new heroes.Magician('hero6', 'Magician')],
  ['hero7', 'Magician', new heroes.Magician('hero7', 'Magician')],
])(
  'should return a string corresponding to the health level',
  (name, type, createNewObject) => {
    for (const key of Object.values(heroes)) {
      const ClassName = key;
      const result = new ClassName(name, type);
      expect(result).toEqual(createNewObject);
    }
  },
);

test('string length name error', () => {
  const result2 = new heroes.Magician('heroismerror', 'Magician');
  expect(result2).toThrowError(new Error('Ошибка, имя должно содержать не менее 2 и не более 10 символов'));
});
test('type error', () => {
  const result3 = new heroes.Character('hero6', 'Magiciancheck');
  const err1 = 'Ошибка, недопустимый тип элемента';
  expect(result3).toThrowError(err1);
});
/*
test(' level live +1', () => {
  const result4 = new heroes.Character('hero7', 'Bowman');
  expect(result4.levelUp()).;
});
*/
test('level domage 20', () => {
  const result3 = new heroes.Character('hero8', 'Bowman');
  expect(result3.damage(20)).toBe(85);
});
