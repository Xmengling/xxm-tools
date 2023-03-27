/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { accMul } from '../../packages/js/dist/main';

test("'999', '32485'", () => {
  expect(accMul('999', '32485')).toStrictEqual(32452515);
});

test('1000,234123', () => {
  expect(accMul(1000, 234123)).toStrictEqual(234123000);
});

test('10.1651,-0.0223', () => {
  expect(accMul(10.1651, -0.0223)).toStrictEqual(-0.226682);
});

test('-0.432,-23.40', () => {
  expect(accMul(-0.432, -23.4)).toStrictEqual(10.1088);
});

test('898190.1651,15611.3452345', () => {
  expect(() => accMul(898190.1651, 15611.3452345)).toThrow(Error);
});

test('100001,sad;g', () => {
  expect(() => accMul(100001, 'sad;g')).toThrow(Error);
});

test('undefined, undefined', () => {
  expect(() => accMul(undefined, undefined)).toThrow(Error);
});

test('null, null', () => {
  expect(() => accMul(null, null)).toThrow(Error);
});

test('0, 0', () => {
  expect(accMul(0, 0)).toStrictEqual(0);
});

test('-0, -0', () => {
  expect(accMul(-0, -0)).toStrictEqual(0);
});

test('0.1651, 123, 123', () => {
  expect(accMul(0.1651, 123, 123)).toStrictEqual(20.3073);
});

test('', () => {
  expect(() => accMul('')).toThrow(Error);
});

test('-1', () => {
  expect(() => accMul(-1)).toThrow(Error);
});

test("'Π','Π'", () => {
  expect(() => accMul('Π', 'Π')).toThrow(Error);
});

test('9007199254740993,3490324095i23409seafs', () => {
  expect(() => accMul(9007199254740993, '3490324095i23409seafs')).toThrow(
    Error,
  );
});

test('-99999', () => {
  expect(() => accMul('-99999')).toThrow(Error);
});

test('1.156', () => {
  expect(() => accMul('1.156')).toThrow(Error);
});

test('19651653465.1561511,1965165165.1561784165', () => {
  expect(() => accMul(19651653465.1561511, 1965165165.1561784165)).toThrow(
    Error,
  );
});

test('-9007199254740999', () => {
  expect(() => accMul('-9007199254740999')).toThrow(Error);
});

test('17.5616', () => {
  expect(() => accMul('17.5616')).toThrow(Error);
});

test('874949195.12235641', () => {
  expect(() => accMul('874949195.12235641')).toThrow(Error);
});

test('17.5616', () => {
  expect(() => accMul('17.5616')).toThrow(Error);
});

test('null', () => {
  expect(() => accMul(null)).toThrow(Error);
});
