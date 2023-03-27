/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { isPositiveInt } from '../../packages/number/src/isPositiveInt';

test('999', () => {
  expect(isPositiveInt('999')).toBeTruthy();
});
test('10001', () => {
  expect(isPositiveInt(10001)).toBeTruthy();
});
test('0.0000', () => {
  expect(isPositiveInt('0.0000')).toBeFalsy();
});
test('-0.0', () => {
  expect(isPositiveInt('-0.0')).toBeFalsy();
});
test('0', () => {
  expect(isPositiveInt('0')).toBeFalsy();
});
test('空', () => {
  expect(isPositiveInt()).toBeFalsy();
  expect(isPositiveInt('')).toBeFalsy();
  expect(isPositiveInt(null)).toBeFalsy();
});
test('Π', () => {
  expect(isPositiveInt('Π')).toBeFalsy();
});
test('-1', () => {
  expect(isPositiveInt('-1')).toBeFalsy();
});
test('9007199254740993', () => {
  expect(isPositiveInt(9007199254740993)).toBeTruthy();
});
test('1.156', () => {
  expect(isPositiveInt('1.156')).toBeFalsy();
});
test('-9007199254740999', () => {
  expect(isPositiveInt('-9007199254740999')).toBeFalsy();
});
test('17.5616', () => {
  expect(isPositiveInt('17.5616')).toBeFalsy();
});
test('874949195.12235641', () => {
  expect(isPositiveInt('874949195.12235641')).toBeFalsy();
});
test('-99.12235641', () => {
  expect(isPositiveInt('-99.12235641')).toBeFalsy();
});
test('壹', () => {
  expect(isPositiveInt('壹')).toBeFalsy();
});
test('te殊', () => {
  expect(isPositiveInt('te殊')).toBeFalsy();
});
test('@#$%^', () => {
  expect(isPositiveInt('@#$%^')).toBeFalsy();
});
test('瀿鷉', () => {
  expect(isPositiveInt('瀿鷉')).toBeFalsy();
});
