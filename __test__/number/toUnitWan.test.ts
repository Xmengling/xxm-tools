/* eslint-disable @typescript-eslint/no-loss-of-precision */

import { toUnitWan } from '../../packages/number/src/toUnitWan';

test('999', () => {
  expect(toUnitWan('999' as unknown as number)).toStrictEqual('999');
});

test('100001', () => {
  expect(toUnitWan(100001)).toStrictEqual('10.0001万');
});

test('0.0000', () => {
  expect(toUnitWan('0.0000' as unknown as number)).toStrictEqual('0');
});
test('-0.0', () => {
  expect(toUnitWan(-0.0)).toStrictEqual('0');
});
test('0', () => {
  expect(toUnitWan(0)).toStrictEqual('0');
});
test('空', () => {
  expect(toUnitWan('' as unknown as number)).toStrictEqual('--');
  expect(toUnitWan()).toStrictEqual('--');
  expect(toUnitWan(null)).toStrictEqual('--');
});
test('-1', () => {
  expect(toUnitWan(-1)).toStrictEqual('-1');
});
test('Π', () => {
  expect(toUnitWan('Π')).toStrictEqual('--');
});
test('9007199254740993', () => {
  expect(() => toUnitWan(9007199254740993)).toThrow(Error);
});

test('-99999', () => {
  expect(toUnitWan(-99999)).toStrictEqual('-9.9999万');
});
test('1.156', () => {
  expect(toUnitWan(1.156)).toStrictEqual('1.156');
});
test('-9007199254740999', () => {
  expect(() => toUnitWan(-9007199254740999)).toThrow(Error);
});

test('17.5616', () => {
  expect(toUnitWan(17.5616)).toStrictEqual('17.5616');
});

test('-99.12235641', () => {
  expect(toUnitWan(-99.12235641)).toStrictEqual('-99.12235641');
});

test('-235654, 2', () => {
  expect(toUnitWan(-235654, 2)).toStrictEqual('-23.57万');
});

test('-235654, 2', () => {
  expect(toUnitWan(-235654, 3)).toStrictEqual('-23.565万');
});
test('壹', () => {
  expect(toUnitWan('壹')).toStrictEqual('--');
});
test('te殊', () => {
  expect(toUnitWan('te殊')).toStrictEqual('--');
});
test('@#$%^', () => {
  expect(toUnitWan('@#$%^')).toStrictEqual('--');
});
test('瀿鷉', () => {
  expect(toUnitWan('瀿鷉')).toStrictEqual('--');
});
