/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { toThousand } from '../../packages/number/src/toThousand';

test('999 to be 999', () => {
  expect(toThousand('999' as unknown as number)).toStrictEqual('999.00');
});

test('100001', () => {
  expect(toThousand(100001)).toStrictEqual('100,001.00');
});

test('0.0000', () => {
  expect(toThousand('0.0000' as unknown as number)).toStrictEqual('0.00');
});
test('-0.0', () => {
  expect(toThousand(-0.0)).toStrictEqual('0.00');
});
test('0', () => {
  expect(toThousand(0)).toStrictEqual('0.00');
});
test('空', () => {
  expect(toThousand('' as unknown as number)).toStrictEqual('0.00');
  expect(toThousand()).toStrictEqual('0.00');
  expect(toThousand(null)).toStrictEqual('0.00');
});
test('-1', () => {
  expect(toThousand(-1)).toStrictEqual('-1.00');
});
test('Π', () => {
  expect(toThousand('Π')).toStrictEqual('0.00');
});
test('9007199254740993', () => {
  expect(() => toThousand(9007199254740993)).toThrow(Error);
});
test('-99999', () => {
  expect(toThousand(-99999)).toStrictEqual('-99,999.00');
});
test('1.156', () => {
  expect(toThousand(1.156)).toStrictEqual('1.16');
});
test('-9007199254740999', () => {
  expect(() => toThousand(-9007199254740999)).toThrow(Error);
});

test('17.5616', () => {
  expect(toThousand(17.5616)).toStrictEqual('17.56');
});
test('874949195.12235641', () => {
  expect(toThousand(874949195.12235641)).toStrictEqual('874,949,195.12');
});
test('-99.12235641', () => {
  expect(toThousand(-99.12235641)).toStrictEqual('-99.12');
});
test('壹', () => {
  expect(toThousand('壹')).toStrictEqual('0.00');
});
test('te殊', () => {
  expect(toThousand('te殊')).toStrictEqual('0.00');
});
test('@#$%^', () => {
  expect(toThousand('@#$%^')).toStrictEqual('0.00');
});
test('瀿鷉', () => {
  expect(toThousand('瀿鷉')).toStrictEqual('0.00');
});
