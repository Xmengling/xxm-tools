import { isTel } from '../../packages/validate/src/isTel';

test('空', () => {
  expect(isTel(' ')).toBeFalsy();
  expect(isTel(null)).toBeFalsy();
  expect(isTel(-1 as unknown as string)).toBeFalsy();
  expect(isTel('')).toBeFalsy();
  expect(isTel(0 as unknown as string)).toBeFalsy();
});
test('中文/乱码', () => {
  expect(isTel('中wen')).toBeFalsy();
  expect(isTel('WINGgng时定')).toBeFalsy();
  expect(isTel('123')).toBeFalsy();
  expect(isTel('文本')).toBeFalsy();
  expect(isTel(`）（*%#￥%#￥%、''`)).toBeFalsy();
});

test(`19562-652163`, () => {
  expect(isTel('19562-652163')).toBeFalsy();
});
test(`37068120180307941X`, () => {
  expect(isTel('37068120180307941X')).toBeFalsy();
});
test(`43567890-`, () => {
  expect(isTel('43567890-')).toBeFalsy();
});
test(`00000000000000001-`, () => {
  expect(isTel('00000000000000001-')).toBeFalsy();
});
test(`X`, () => {
  expect(isTel('X')).toBeFalsy();
});
test(`98812-5495616`, () => {
  expect(isTel(`98812-5495616`)).toBeFalsy();
});
test(`-------------`, () => {
  expect(isTel('-------------')).toBeFalsy();
});
test(`99999999999999999999999999999999-`, () => {
  expect(isTel('99999999999999999999999999999999-')).toBeFalsy();
});
test(`玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁`, () => {
  expect(
    isTel('玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁'),
  ).toBeFalsy();
});
