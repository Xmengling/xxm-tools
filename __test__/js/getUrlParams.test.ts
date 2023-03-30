import { getUrlParams } from '../../packages/js/dist/main';

test('正常参数', () => {
  expect(getUrlParams('https://www.example.com/?id=123&name=test')).toEqual({
    id: '123',
    name: 'test',
  });
});

test('空字符串', () => {
  expect(() => getUrlParams('')).toThrow('Parameter "url" cannot be empty.');
});

test('无参数链接', () => {
  expect(getUrlParams('https://www.google.com')).toEqual({});
});

test('参数中有特殊字符', () => {
  expect(getUrlParams('https://example.com?a=b&c=%20d')).toStrictEqual({
    a: 'b',
    c: ' d',
  });
});

test('参数值为空字符串', () => {
  expect(getUrlParams('https://example.com?a=&b=c')).toStrictEqual({
    a: '',
    b: 'c',
  });
});
