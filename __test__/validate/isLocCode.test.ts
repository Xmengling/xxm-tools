import { isLocCode } from '../../packages/validate/src/isLocCode';

test('空', () => {
  expect(isLocCode(' ')).toBeFalsy();
  expect(isLocCode(null)).toBeFalsy();
  expect(isLocCode(-1 as unknown as string)).toBeFalsy();
  expect(isLocCode('')).toBeFalsy();
  expect(isLocCode(0 as unknown as string)).toBeFalsy();
});
test('中文/乱码', () => {
  expect(isLocCode('中wen')).toBeFalsy();
  expect(isLocCode('WINGgng时定')).toBeFalsy();
  expect(isLocCode('123')).toBeFalsy();
  expect(isLocCode(`）（*%#￥%#￥%、''`)).toBeFalsy();
});

test(`输入`, () => {
  expect(isLocCode('输入')).toBeFalsy();
});

test(`公平啥都没干乐山大佛看来撒个娇里的飞哥考虑到房价两个古典风格`, () => {
  expect(
    isLocCode('公平啥都没干乐山大佛看来撒个娇里的飞哥考虑到房价两个古典风格'),
  ).toBeFalsy();
});
test(`时代的df034890nsdklmhgc`, () => {
  expect(isLocCode('时代的df034890nsdklmhgc')).toBeFalsy();
});
test(`的撒法山豆根（）*）（000001GFDDS`, () => {
  expect(isLocCode('的撒法山豆根（）*）（000001GFDDS')).toBeFalsy();
});
test(`X`, () => {
  expect(isLocCode('X')).toBeFalsy();
});
test('98812-5495616', () => {
  expect(isLocCode('98812-5495616')).toBeFalsy();
});
test(`鐽亽`, () => {
  expect(isLocCode('鐽亽')).toBeFalsy();
});
test(`QWEROPMFSD99999999999999999999999999999999`, () => {
  expect(isLocCode('QWEROPMFSD99999999999999999999999999999999')).toBeFalsy();
});
test(`玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁`, () => {
  expect(
    isLocCode('玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁'),
  ).toBeFalsy();
});

test(`A1`, () => {
  expect(isLocCode(`A1`)).toBeTruthy();
});

test(`B1151561616`, () => {
  expect(isLocCode('B1151561616')).toBeTruthy();
});
