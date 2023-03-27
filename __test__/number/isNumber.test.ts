/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { isNumber } from '../../packages/number/src/isNumber';

test('999', () => {
  expect(isNumber('999')).toBeTruthy();
});
test('10001', () => {
  expect(isNumber(10001)).toBeTruthy();
});
test('0.0000', () => {
  expect(isNumber('0.0000')).toBeTruthy();
});
test('-0.0', () => {
  expect(isNumber('-0.0')).toBeTruthy();
});
test('0', () => {
  expect(isNumber('0')).toBeTruthy();
});
test('空', () => {
  expect(isNumber()).toBeFalsy();
  expect(isNumber('')).toBeFalsy();
  expect(isNumber(null)).toBeFalsy();
});
test('Π', () => {
  expect(isNumber('Π')).toBeFalsy();
});
test('-1', () => {
  expect(isNumber('-1')).toBeTruthy();
});
test('9007199254740993', () => {
  expect(isNumber(9007199254740993)).toBeTruthy();
});
test('1.156', () => {
  expect(isNumber('1.156')).toBeTruthy();
});
test('-9007199254740999', () => {
  expect(isNumber('-9007199254740999')).toBeTruthy();
});
test('17.5616', () => {
  expect(isNumber('17.5616')).toBeTruthy();
});
test('874949195.12235641', () => {
  expect(isNumber('874949195.12235641')).toBeTruthy();
});
test('-99.12235641', () => {
  expect(isNumber('-99.12235641')).toBeTruthy();
});
test('壹', () => {
  expect(isNumber('壹')).toBeFalsy();
});
test('te殊', () => {
  expect(isNumber('te殊')).toBeFalsy();
});
test('@#$%^', () => {
  expect(isNumber('@#$%^')).toBeFalsy();
});
test('瀿鷉', () => {
  expect(isNumber('瀿鷉')).toBeFalsy();
});
