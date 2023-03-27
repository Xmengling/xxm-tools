import { uniq } from '../../packages/js/dist/main';

test('空', () => {
  expect(uniq()).toStrictEqual([]);
});
test('空', () => {
  expect(uniq(undefined as unknown as unknown[])).toStrictEqual([]);
});

test('null', () => {
  expect(uniq(null as unknown as unknown[])).toStrictEqual([]);
});

test('字符串', () => {
  expect(uniq('a' as unknown as unknown[])).toStrictEqual([]);
});

test('数字', () => {
  expect(uniq(1 as unknown as unknown[])).toStrictEqual([]);
});

test('对象', () => {
  expect(uniq({} as unknown as unknown[])).toStrictEqual([]);
});

test('布尔', () => {
  expect(uniq(false as unknown as unknown[])).toStrictEqual([]);
});

test('[2,1,2]', () => {
  expect(uniq([2, 1, 2])).toStrictEqual([2, 1]);
});

test("['a', 1, 2, 'a', null, undefined, false, '1', 'undefined']", () => {
  expect(
    uniq(['a', 1, 2, 'a', null, undefined, false, '1', 'undefined']),
  ).toStrictEqual(['a', 1, 2, null, undefined, false, '1', 'undefined']);
});

test('[{ a: 1, b: 2 },{ a: 1, b: 2 },{ a: 1, b: 3 },]', () => {
  expect(
    uniq([
      { a: 1, b: 2 },
      { a: 1, b: 2 },
      { a: 1, b: 3 },
    ]),
  ).toStrictEqual([
    { a: 1, b: 2 },
    { a: 1, b: 3 },
  ]);
});
test('[{ a: 1, b: {} },{ a: 1, b: {} },]', () => {
  expect(
    uniq([
      { a: 1, b: {} },
      { a: 1, b: {} },
    ]),
  ).toStrictEqual([{ a: 1, b: {} }]);
});
test("[{ a: 1, b: 2 },{ a: 1, b: 2 },{ a: 1, b: 3 },],'a'", () => {
  expect(
    uniq(
      [
        { a: 1, b: 2 },
        { a: 1, b: 2 },
        { a: 1, b: 3 },
      ],
      'a',
    ),
  ).toStrictEqual([{ a: 1, b: 2 }]);
});
test("[{ a: 1, b: 2 },{ a: 1, b: 2 },{ a: 1, b: 3 },],'xxx'", () => {
  expect(
    uniq(
      [
        { a: 1, b: 2 },
        { a: 1, b: 2 },
        { a: 1, b: 3 },
      ],
      'xxx',
    ),
  ).toStrictEqual([{ a: 1, b: 2 }]);
});

test('[[{ a: 1, b: 2 }], [{ a: 1, b: 2 }]]', () => {
  expect(uniq([[{ a: 1, b: 2 }], [{ a: 1, b: 2 }]])).toStrictEqual([
    [{ a: 1, b: 2 }],
  ]);
});

test("[[{ a: 1, b: 2 }], [{ a: 1, b: 3 }]], 'length'", () => {
  expect(uniq([[{ a: 1, b: 2 }], [{ a: 1, b: 3 }]], 'length')).toStrictEqual([
    [{ a: 1, b: 2 }],
    [{ a: 1, b: 3 }],
  ]);
});

test('[{ 0: 1, 1: 2, length: 2 }, [1, 2]]', () => {
  expect(uniq([{ 0: 1, 1: 2, length: 2 }, [1, 2]])).toStrictEqual([
    { 0: 1, 1: 2, length: 2 },
    [1, 2],
  ]);
});
