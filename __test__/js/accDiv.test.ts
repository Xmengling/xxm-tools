/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { accDiv } from '../../packages/js/dist/main';

test("'999', '32485'", () => {
  expect(accDiv('999', '32485')).toStrictEqual(0.030753);
});

test('1000,234123', () => {
  expect(accDiv(1000, 234123)).toStrictEqual(0.004271);
});

test('10.1651,-223', () => {
  expect(accDiv(10.1651, -223)).toStrictEqual(-0.045583);
});

test('-0.432,-23.40', () => {
  expect(accDiv(-0.432, -23.4)).toStrictEqual(0.018462);
});

test('898190.1651,15611.3452345', () => {
  expect(accDiv(898190.1651, 15611.3452345)).toStrictEqual(57.53445);
});

test('100001,sad;g', () => {
  expect(() => accDiv(100001, 'sad;g')).toThrow(Error);
});

test('undefined, undefined', () => {
  expect(() => accDiv(undefined, undefined)).toThrow(Error);
});

test('null, null', () => {
  expect(() => accDiv(null, null)).toThrow(Error);
});

test('0, 0', () => {
  expect(() => accDiv(0, 0)).toThrow(Error);
});

test('-0, -0', () => {
  expect(() => accDiv(-0, -0)).toThrow(Error);
});

test('0.1651, 123, 123', () => {
  expect(accDiv(0.1651, 123, 123)).toStrictEqual(0.001342);
});

test('', () => {
  expect(() => accDiv('')).toThrow(Error);
});

test('-1', () => {
  expect(() => accDiv(-1)).toThrow(Error);
});

test("'Π','Π'", () => {
  expect(() => accDiv('Π', 'Π')).toThrow(Error);
});

test('9007199254740993,3490324095i23409seafs', () => {
  expect(() => accDiv(9007199254740993, '3490324095i23409seafs')).toThrow(
    Error,
  );
});

test('-99999', () => {
  expect(() => accDiv('-99999')).toThrow(Error);
});

test('1.156', () => {
  expect(() => accDiv('1.156')).toThrow(Error);
});

test('19651653465.1561511,1965165165.1561784165', () => {
  expect(accDiv(19651653465.1561511, 1965165165.1561784165)).toStrictEqual(
    10.000001,
  );
});

test('-9007199254740999', () => {
  expect(() => accDiv('-9007199254740999')).toThrow(Error);
});

test('17.5616', () => {
  expect(() => accDiv('17.5616')).toThrow(Error);
});

test('874949195.12235641', () => {
  expect(() => accDiv('874949195.12235641')).toThrow(Error);
});

test('17.5616', () => {
  expect(() => accDiv('17.5616')).toThrow(Error);
});

test('null', () => {
  expect(() => accDiv(null)).toThrow(Error);
});
