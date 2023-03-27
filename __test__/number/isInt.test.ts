/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { isInt } from '../../packages/number/src/isInt';

test('999', () => {
  expect(isInt('999')).toBeTruthy();
});
test('10001', () => {
  expect(isInt(10001)).toBeTruthy();
});
test('0.0000', () => {
  expect(isInt('0.0000')).toBeFalsy();
});
test('-0.0', () => {
  expect(isInt('-0.0')).toBeFalsy();
});
test('0', () => {
  expect(isInt('0')).toBeTruthy();
});
test('空', () => {
  expect(isInt()).toBeFalsy();
  expect(isInt('')).toBeFalsy();
  expect(isInt(null)).toBeFalsy();
});
test('Π', () => {
  expect(isInt('Π')).toBeFalsy();
});
test('-1', () => {
  expect(isInt('-1')).toBeTruthy();
});
test('9007199254740993', () => {
  expect(isInt(9007199254740993)).toBeTruthy();
});
test('1.156', () => {
  expect(isInt('1.156')).toBeFalsy();
});
test('-9007199254740999', () => {
  expect(isInt('-9007199254740999')).toBeTruthy();
});
test('17.5616', () => {
  expect(isInt('17.5616')).toBeFalsy();
});
test('874949195.12235641', () => {
  expect(isInt('874949195.12235641')).toBeFalsy();
});
test('-99.12235641', () => {
  expect(isInt('-99.12235641')).toBeFalsy();
});
test('壹', () => {
  expect(isInt('壹')).toBeFalsy();
});
test('te殊', () => {
  expect(isInt('te殊')).toBeFalsy();
});
test('@#$%^', () => {
  expect(isInt('@#$%^')).toBeFalsy();
});
test('瀿鷉', () => {
  expect(isInt('瀿鷉')).toBeFalsy();
});
