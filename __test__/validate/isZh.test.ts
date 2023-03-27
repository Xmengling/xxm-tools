import { isZh } from '../../packages/validate/src/isZh';

test('空', () => {
  expect(isZh(' ')).toBeFalsy();
  expect(isZh(null)).toBeFalsy();
  expect(isZh(-1 as unknown as string)).toBeFalsy();
  expect(isZh('')).toBeFalsy();
  expect(isZh(0 as unknown as string)).toBeFalsy();
});
test('中文/乱码', () => {
  expect(isZh('中wen')).toBeFalsy();
  expect(isZh('WINGgng时定')).toBeFalsy();
  expect(isZh('123')).toBeFalsy();
  expect(isZh(`）（*%#￥%#￥%、''`)).toBeFalsy();
});

test(`输入`, () => {
  expect(isZh('输入')).toBeTruthy();
});

test(`公平啥都没干乐山大佛看来撒个娇里的飞哥考虑到房价两个古典风格`, () => {
  expect(
    isZh('公平啥都没干乐山大佛看来撒个娇里的飞哥考虑到房价两个古典风格'),
  ).toBeTruthy();
});
test(`时代的df034890nsdklmhgc`, () => {
  expect(isZh('时代的df034890nsdklmhgc')).toBeFalsy();
});
test(`的撒法山豆根（）*）（000001GFDDS`, () => {
  expect(isZh('的撒法山豆根（）*）（000001GFDDS')).toBeFalsy();
});
test(`X`, () => {
  expect(isZh('X')).toBeFalsy();
});
test('98812-5495616', () => {
  expect(isZh('98812-5495616')).toBeFalsy();
});
test(`鐽亽`, () => {
  expect(isZh('鐽亽')).toBeTruthy();
});
test(`QWEROPMFSD99999999999999999999999999999999`, () => {
  expect(isZh('QWEROPMFSD99999999999999999999999999999999')).toBeFalsy();
});
test(`玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁`, () => {
  expect(
    isZh('玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁'),
  ).toBeTruthy();
});
