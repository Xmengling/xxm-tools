/* eslint-disable @typescript-eslint/no-loss-of-precision */

import { toChn } from '../../packages/number/src/toChn';

test('999 to be 999', () => {
  expect(toChn('999' as unknown as number)).toStrictEqual('九百九十九');
});

test('100001', () => {
  expect(toChn(100001)).toStrictEqual('十万零一');
});

test('0.0000', () => {
  expect(toChn('0.0000' as unknown as number)).toStrictEqual('零');
});
test('-0.0', () => {
  expect(toChn(-0.0)).toStrictEqual('零');
});
test('0', () => {
  expect(toChn(0)).toStrictEqual('零');
});
test('空', () => {
  expect(toChn('' as unknown as number)).toStrictEqual('--');
  expect(toChn()).toStrictEqual('--');
  expect(toChn(null)).toStrictEqual('--');
});
test('-1', () => {
  expect(toChn(-1)).toStrictEqual('负一');
});
test('Π', () => {
  expect(toChn('Π')).toStrictEqual('--');
});

test('-99999', () => {
  expect(toChn(-99999)).toStrictEqual('负九万九千九百九十九');
});
test('1.156', () => {
  expect(toChn(1.156)).toStrictEqual('一点一五六');
});

test('17.5616', () => {
  expect(toChn(17.5616)).toStrictEqual('十七点五六一六');
});
test('874949195.12235641', () => {
  expect(toChn(874949195.12235641)).toStrictEqual(
    '八亿七千四百九十四万九千一百九十五点一二二三五六四',
  );
});
test('-99.12235641', () => {
  expect(toChn(-99.12235641)).toStrictEqual('负九十九点一二二三五六四一');
});
test('壹', () => {
  expect(toChn('壹')).toStrictEqual('--');
});
test('te殊', () => {
  expect(toChn('te殊')).toStrictEqual('--');
});
test('@#$%^', () => {
  expect(toChn('@#$%^')).toStrictEqual('--');
});
test('瀿鷉', () => {
  expect(toChn('瀿鷉')).toStrictEqual('--');
});
test('9007199254740993', () => {
  expect(() => toChn('9007199254740993')).toThrow(Error);
});
test('-9007199254740999', () => {
  expect(() => toChn('-9007199254740999')).toThrow(Error);
});
