import { isIdentityCard } from '../../packages/validate/src/isIdentityCard';

test('空', () => {
  expect(isIdentityCard(' ')).toBeFalsy();
  expect(isIdentityCard(null)).toBeFalsy();
  expect(isIdentityCard(-1 as unknown as string)).toBeFalsy();
  expect(isIdentityCard('')).toBeFalsy();
  expect(isIdentityCard(0 as unknown as string)).toBeFalsy();
});
test('中文/乱码', () => {
  expect(isIdentityCard('中wen')).toBeFalsy();
  expect(isIdentityCard('WINGgng时定')).toBeFalsy();
  expect(isIdentityCard('123')).toBeFalsy();
  expect(isIdentityCard('文本')).toBeFalsy();
  expect(isIdentityCard(`）（*%#￥%#￥%、''`)).toBeFalsy();
});

test('正常输入', () => {
  expect(isIdentityCard(`SDGOLNMDGSDF234234`)).toBeFalsy();
});
test(`11010119900307491X`, () => {
  expect(isIdentityCard('11010119900307491X')).toBeTruthy();
});
test(`XXXXXXXXXXXXXXXXXX`, () => {
  expect(isIdentityCard(`XXXXXXXXXXXXXXXXXX`)).toBeFalsy();
});
test(`YYYYYYYYYYYYYYYYYY`, () => {
  expect(isIdentityCard(`YYYYYYYYYYYYYYYYYY`)).toBeFalsy();
});
test(`X`, () => {
  expect(isIdentityCard(`X`)).toBeFalsy();
});
test(`37068120180307941X`, () => {
  expect(isIdentityCard('37068120180307941X')).toBeFalsy();
});
test(`18202788888`, () => {
  expect(isIdentityCard(`18202788888`)).toBeFalsy();
});
test(`23141234FASDT453`, () => {
  expect(isIdentityCard(`23141234FASDT453`)).toBeFalsy();
});
test(`FSADFA`, () => {
  expect(isIdentityCard(`FSADFA`)).toBeFalsy();
});
test(`SDJFKLGJOPSDKFGI`, () => {
  expect(isIdentityCard(`SDJFKLGJOPSDKFGI`)).toBeFalsy();
});
test(`玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁`, () => {
  expect(
    isIdentityCard(`玖仟零柒兆壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万零玖佰玖拾叁`),
  ).toBeFalsy();
});
// test(``, () => {
//   expect(isTel()).toBeTruthy();
//   expect(isTel()).toBeFalsy();
// });
