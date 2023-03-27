/* eslint-disable @typescript-eslint/no-loss-of-precision */

import { toUpperChn } from '../../packages/number/src/toUpperChn';

test('999 to be 999', () => {
  expect(toUpperChn('999' as unknown as number)).toStrictEqual('玖佰玖拾玖');
});

test('100001', () => {
  expect(toUpperChn(100001)).toStrictEqual('壹拾万零壹');
});

test('0.0000', () => {
  expect(toUpperChn('0.0000' as unknown as number)).toStrictEqual('零');
});
test('-0.0', () => {
  expect(toUpperChn(-0.0)).toStrictEqual('零');
});
test('0', () => {
  expect(toUpperChn(0)).toStrictEqual('零');
});
test('空', () => {
  expect(toUpperChn('' as unknown as number)).toStrictEqual('--');
  expect(toUpperChn()).toStrictEqual('--');
  expect(toUpperChn(null)).toStrictEqual('--');
});
test('-1', () => {
  expect(toUpperChn(-1)).toStrictEqual('负壹');
});
test('Π', () => {
  expect(toUpperChn('Π')).toStrictEqual('--');
});
test('9007199254740993', () => {
  expect(() => toUpperChn(9007199254740993)).toThrow(
     Error
  );
});
test('-99999', () => {
  expect(toUpperChn(-99999)).toStrictEqual('负玖万玖仟玖佰玖拾玖');
});
test('1.156', () => {
  expect(toUpperChn(1.156)).toStrictEqual('壹元壹角陆分');
});
test('-9007199254740999', () => {
  expect(() => toUpperChn(-9007199254740999)).toThrow(
    Error
  );
});
test('17.5616', () => {
  expect(toUpperChn(17.5616)).toStrictEqual('壹拾柒元伍角陆分');
});
test('874949195.12235641', () => {
  expect(toUpperChn(874949195.12235641)).toStrictEqual(
    '捌亿柒仟肆佰玖拾肆万玖仟壹佰玖拾伍元壹角贰分',
  );
});
test('-99.12235641', () => {
  expect(toUpperChn(-99.12235641)).toStrictEqual('负玖拾玖元壹角贰分');
});
test('壹', () => {
  expect(toUpperChn('壹')).toStrictEqual('--');
});
test('te殊', () => {
  expect(toUpperChn('te殊')).toStrictEqual('--');
});
test('@#$%^', () => {
  expect(toUpperChn('@#$%^')).toStrictEqual('--');
});
test('瀿鷉', () => {
  expect(toUpperChn('瀿鷉')).toStrictEqual('--');
});
