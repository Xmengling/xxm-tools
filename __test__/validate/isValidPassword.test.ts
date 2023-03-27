import { isValidPassword } from '../../packages/validate/src/isValidPassword';

test('空', () => {
  expect(isValidPassword(' ')).toBeFalsy();
  expect(isValidPassword(null)).toBeFalsy();
  expect(isValidPassword(-1 as unknown as string)).toBeFalsy();
  expect(isValidPassword('')).toBeFalsy();
  expect(isValidPassword(0 as unknown as string)).toBeFalsy();
});
test('中文/乱码', () => {
  expect(isValidPassword('中wen')).toBeFalsy();
  expect(isValidPassword('WINGgng时定')).toBeFalsy();
  expect(isValidPassword('123')).toBeFalsy();
  expect(isValidPassword('文本')).toBeFalsy();
  expect(isValidPassword(`）（*%#￥%#￥%、''`)).toBeFalsy();
});

test(`QWDdadsN12349`, () => {
  expect(isValidPassword('QWDdadsN12349')).toBeTruthy();
});

test(`37068120180307941X`, () => {
  expect(isValidPassword('37068120180307941X')).toBeFalsy();
});
test(`df034890nsdklmhgc`, () => {
  expect(isValidPassword('df034890nsdklmhgc')).toBeFalsy();
});
test(`00000000000000001GFDDS`, () => {
  expect(isValidPassword('00000000000000001GFDDS')).toBeFalsy();
});
test(`X`, () => {
  expect(isValidPassword('X')).toBeFalsy();
});
test(`98812-5495616`, () => {
  expect(isValidPassword('98812-5495616')).toBeFalsy();
});
test(`-------------`, () => {
  expect(isValidPassword('-------------')).toBeFalsy();
});
test(`QWEROPMFSD99999999999999999999999999999999`, () => {
  expect(
    isValidPassword('QWEROPMFSD99999999999999999999999999999999'),
  ).toBeFalsy();
});
test(`玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁`, () => {
  expect(
    isValidPassword('玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁'),
  ).toBeFalsy();
});
