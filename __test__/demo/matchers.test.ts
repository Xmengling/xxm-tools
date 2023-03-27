// base
const sum = (a, b) => {
  return a + b;
};
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// toEqual
test('toEqual匹配器，测试严格相等', () => {
  const apple = { color: 'red' };
  // expect(apple).toBe({ color: 'red' }); // Object.is equality
  // expect(apple).toBe(apple);
  // const strawberry = apple;
  // expect(apple).toBe(strawberry);
  // If it should pass with deep equality, replace "toBe" with "toStrictEqual"

  expect(apple).toEqual({ color: 'red' });
});

// 真值判断
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// 数字判断
test('2 + 2', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // 大于
  expect(value).toBeGreaterThanOrEqual(3.5); // 大于等于
  expect(value).toBeLessThan(5); // 小于
  expect(value).toBeLessThanOrEqual(4.5); // 小于等于

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// 浮点数
test('两个浮点数字相加', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); // 这句会报错，因为浮点数的js运算有误差
  expect(value).toBeCloseTo(0.3); // 这句可以运行
});

// 字符串
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// 数组或可迭代对象
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

// 报错
const throwErrorFunc = () => {
  throw new Error('this is error');
};

test('toThrow 匹配器', () => {
  expect(() => throwErrorFunc()).toThrow('error');

  // 必须使用一个函数将被测试的函数做一个包装，否则会因为函数抛出错误导致该断言失败
  // expect(throwErrorFunc()).toThrow();

  // 用正则匹配错误信息
  expect(() => throwErrorFunc()).toThrow('this is error');
  expect(() => throwErrorFunc()).toThrow(/error/);
});
