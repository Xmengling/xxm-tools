/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { accAdd } from '../../packages/js/dist/main';

test("'999', '32485'", () => {
  expect(accAdd('999', '32485')).toStrictEqual(33484);
});

test('1000,234123', () => {
  expect(accAdd(1000, 234123)).toStrictEqual(235123);
});

test('10.1651,-223', () => {
  expect(accAdd(10.1651, -223)).toStrictEqual(-212.8349);
});

test('-0.432,-23.40', () => {
  expect(accAdd(-0.432, -23.4)).toStrictEqual(-23.832);
});

test('898190.1651,15611.3452345', () => {
  expect(accAdd(898190.1651, 15611.3452345)).toStrictEqual(913801.510335);
});

test('100001,sad;g', () => {
  expect(() => accAdd(100001, 'sad;g')).toThrow(Error);
});

test(',', () => {
  expect(() => accAdd(undefined, undefined)).toThrow(Error);
});

test(',', () => {
  expect(() => accAdd(null, null)).toThrow(Error);
});

test('0, 0', () => {
  expect(accAdd(0, 0)).toStrictEqual(0);
});

test('-0, -0', () => {
  expect(accAdd(-0, -0)).toStrictEqual(0);
});

test('0.1651, 123, 123', () => {
  expect(accAdd(0.1651, 123, 123)).toStrictEqual(123.1651);
});

test('-1', () => {
  expect(() => accAdd(-1)).toThrow(Error);
});

test("'Π','Π'", () => {
  expect(() => accAdd('Π', 'Π')).toThrow(Error);
});

test('9007199254740993,3490324095i23409seafs', () => {
  expect(() => accAdd(9007199254740993, '3490324095i23409seafs')).toThrow(
    Error,
  );
});

test('-99999', () => {
  expect(() => accAdd('-99999')).toThrow(Error);
});

test('1.156', () => {
  expect(() => accAdd('1.156')).toThrow(Error);
});

test('19651653465.1561511,1965165165.1561784165', () => {
  expect(() => accAdd(19651653465.1561511, 1965165165.1561784165)).toThrow(
    Error,
  );
});

test('-9007199254740999', () => {
  expect(() => accAdd('-9007199254740999')).toThrow(Error);
});

test('17.5616', () => {
  expect(() => accAdd('17.5616')).toThrow(Error);
});

test('874949195.12235641', () => {
  expect(() => accAdd('874949195.12235641')).toThrow(Error);
});

test('17.5616', () => {
  expect(() => accAdd('17.5616')).toThrow(Error);
});

test('null', () => {
  expect(() => accAdd(null)).toThrow(Error);
});
