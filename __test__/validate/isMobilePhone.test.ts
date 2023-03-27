import { isMobilePhone } from '../../packages/validate/src/isMobilePhone';

test('空', () => {
  expect(isMobilePhone(' ')).toBeFalsy();
  expect(isMobilePhone(null)).toBeFalsy();
  expect(isMobilePhone(-1 as unknown as string)).toBeFalsy();
  expect(isMobilePhone('')).toBeFalsy();
  expect(isMobilePhone(0 as unknown as string)).toBeFalsy();
});
test('中文/乱码', () => {
  expect(isMobilePhone('中wen')).toBeFalsy();
  expect(isMobilePhone('WINGgng时定')).toBeFalsy();
  expect(isMobilePhone('123')).toBeFalsy();
  expect(isMobilePhone('文本')).toBeFalsy();
  expect(isMobilePhone(`）（*%#￥%#￥%、''`)).toBeFalsy();
});
test('axx', () => {
  expect(isMobilePhone(18202788888)).toBeTruthy();
});
test('10000000000', () => {
  expect(isMobilePhone(10000000000)).toBeFalsy();
});
test(`19562652163`, () => {
  expect(isMobilePhone(19562652163)).toBeTruthy();
});
test(`10999999999`, () => {
  expect(isMobilePhone(10999999999)).toBeFalsy();
});
test(`19000009991`, () => {
  expect(isMobilePhone('19000009991')).toBeTruthy();
});
test(`00000000000`, () => {
  expect(isMobilePhone('00000000000')).toBeFalsy();
});
test(`37068120180307941X`, () => {
  expect(isMobilePhone('37068120180307941X')).toBeFalsy();
});
test(`43567890-`, () => {
  expect(isMobilePhone('43567890-')).toBeFalsy();
});
test(`X`, () => {
  expect(isMobilePhone('X')).toBeFalsy();
});
test(`玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁`, () => {
  expect(
    isMobilePhone('玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁'),
  ).toBeFalsy();
});
