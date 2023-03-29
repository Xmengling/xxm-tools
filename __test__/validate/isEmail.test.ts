/* eslint-disable no-restricted-syntax */
// /* eslint-disable prettier/prettier */
import { isEmail } from '../../packages/validate/src/isEmail';

test('2340sderds@163.com', () => {
  const test = '2340sderds@163.com';
  expect(isEmail(test)).toBeTruthy();
});

test('user@mail.server.name', () => {
  const test = 'user@mail.server.name';
  expect(isEmail(test)).toBeTruthy();
});

test('sdfg0-9jmsd........@qq.com', () => {
  expect(isEmail('sdfg0-9jmsd........@qq.com')).toBeFalsy();
});
test('sad34f)()()()9@@@leyopharmmmmmmmm.com', () => {
  const emailStr = 'sad34f)()()()9@@@leyopharmmmmmmmm.com';
  expect(isEmail(emailStr)).toBeFalsy();
});

test('sad34f)()()()9@@@leyopham.com4356erfgdfg', () => {
  const emailStr = 'sad34f)()()()9@@@leyopham.com4356erfgdfg';
  expect(isEmail(emailStr)).toBeFalsy();
});

test('@', () => {
  expect(isEmail('@')).toBeFalsy();
});

test('.com', () => {
  expect(isEmail('.com')).toBeFalsy();
});

test('空', () => {
  expect(isEmail(' ')).toBeFalsy();
  expect(isEmail(null)).toBeFalsy();
  expect(isEmail(-1 as unknown as string)).toBeFalsy();
  expect(isEmail('')).toBeFalsy();
  expect(isEmail(0 as unknown as string)).toBeFalsy();
});

test('中文/乱码', () => {
  expect(isEmail('中wen')).toBeFalsy();
  expect(isEmail('WINGgng时定')).toBeFalsy();
  expect(isEmail('123')).toBeFalsy();
  expect(isEmail('文本')).toBeFalsy();
  expect(isEmail(`）（*%#￥%#￥%、''`)).toBeFalsy();
});
