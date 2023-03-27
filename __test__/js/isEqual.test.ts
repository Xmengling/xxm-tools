import { isEqual } from '../../packages/js/src/isEqual';

test('单个参数,非数组或长度小于2', () => {
  expect(() => isEqual()).toThrow(TypeError);
  expect(() => isEqual('')).toThrow(TypeError);
  expect(() => isEqual(1)).toThrow(TypeError);
  expect(() => isEqual([1])).toThrow(TypeError);
});

test('基本类型', () => {
  expect(isEqual(null, null)).toBe(true);
  expect(isEqual({}, {})).toBe(true);
  expect(isEqual(undefined, undefined)).toBe(true);
  expect(isEqual(false, false)).toBe(true);
  expect(isEqual('', '')).toBe(true);
  expect(isEqual(' ', ' ')).toBe(true);
  expect(isEqual(1, 1)).toBe(true);
});

test('单个参数,且为长度大于等于2的数组', () => {
  expect(isEqual([1, 1])).toBe(true);
  expect(isEqual([1, 1, 1])).toBe(true);
  expect(isEqual([1, 1, 2])).toBe(false);
  expect(isEqual([1, 2, 2])).toBe(false);
  expect(isEqual([{ 1: 1 }, { 1: 1 }])).toBe(true);
  expect(
    isEqual([
      { 1: 1, 2: 2 },
      { 1: 1, 2: 2 },
    ]),
  ).toBe(true);
  expect(
    isEqual([
      { 1: 1, 2: 2 },
      { 1: 1, 2: {} },
    ]),
  ).toBe(false);
  expect(isEqual([[{ 1: 1, 2: 2 }], [{ 1: 1, 2: 2 }]])).toBe(true);
  expect(isEqual({ 0: 1, 1: 2 }, [1, 2])).toBe(false);
  expect(isEqual({ 0: 1, 1: 2, length: 2 }, [1, 2])).toBe(false);
});

test('多个参数（大于2）', () => {
  expect(isEqual([1], [2], [2])).toBe(false);
  expect(isEqual([1], [2], [3])).toBe(false);
  expect(isEqual([1], [1], [1])).toBe(true);
  expect(isEqual([1, 1], [1], [1])).toBe(false);
});
