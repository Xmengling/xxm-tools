/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { accSub } from '../../packages/js/dist/main';

test("'999', '32485'", () => {
  expect(accSub('999', '32485')).toStrictEqual(-31486);
});

test('1000,234123', () => {
  expect(accSub(1000, 234123)).toStrictEqual(-233123);
});

test('10.1651,-223', () => {
  expect(accSub(10.1651, -223)).toStrictEqual(233.1651);
});

test('-0.432,-23.40', () => {
  expect(accSub(-0.432, -23.4)).toStrictEqual(22.968);
});

test('898190.1651,15611.3452345', () => {
  expect(accSub(898190.1651, 15611.3452345)).toStrictEqual(882578.819865);
});

test('100001,sad;g', () => {
  expect(() => accSub(100001, 'sad;g')).toThrow(Error);
});

test('undefined, undefined', () => {
  expect(() => accSub(undefined, undefined)).toThrow(Error);
});

test('null, null', () => {
  expect(() => accSub(null, null)).toThrow(Error);
});

test('0, 0', () => {
  expect(accSub(0, 0)).toStrictEqual(0);
});

test('-0, -0', () => {
  expect(accSub(-0, -0)).toStrictEqual(0);
});

test('0.1651, 123, 123', () => {
  expect(accSub(0.1651, 123, 123)).toStrictEqual(-122.8349);
});

test('-1', () => {
  expect(() => accSub(-1)).toThrow(Error);
});

test("'Π','Π'", () => {
  expect(() => accSub('Π', 'Π')).toThrow(Error);
});

test('9007199254740993,3490324095i23409seafs', () => {
  expect(() => accSub(9007199254740993, '3490324095i23409seafs')).toThrow(
    Error,
  );
});

test('-99999', () => {
  expect(() => accSub('-99999')).toThrow(Error);
});

test('1.156', () => {
  expect(() => accSub('1.156')).toThrow(Error);
});

test('19651653465.1561511,1965165165.1561784165', () => {
  expect(() => accSub(19651653465.1561511, 1965165165.1561784165)).toThrow(
    Error,
  );
});

test('-9007199254740999', () => {
  expect(() => accSub('-9007199254740999')).toThrow(Error);
});

test('17.5616', () => {
  expect(() => accSub('17.5616')).toThrow(Error);
});

test('874949195.12235641', () => {
  expect(() => accSub('874949195.12235641')).toThrow(Error);
});

test('17.5616', () => {
  expect(() => accSub('17.5616')).toThrow(Error);
});

test('null', () => {
  expect(() => accSub(null)).toThrow(Error);
});
