import { isApprNo } from '../../packages/validate/src/isApprNo';

test('正常入参', () => {
  expect(isApprNo('国药准字H20080487')).toBe(true);
});

test('空', () => {
  expect(isApprNo(' ')).toBe(false);
  expect(isApprNo(0 as unknown as string)).toBe(false);
  expect(isApprNo(-1 as unknown as string)).toBe(false);
  expect(isApprNo(null)).toBe(false);
  expect(isApprNo('')).toBe(false);
});

test('中文', () => {
  expect(isApprNo('中wen')).toBe(false);
});

test('WINGgng时定', () => {
  expect(isApprNo('WINGgng时定')).toBe(false);
});

test('文本数字', () => {
  expect(isApprNo('123')).toBe(false);
});

test('文本', () => {
  expect(isApprNo('文本')).toBe(false);
});

test('特殊符号', () => {
  expect(isApprNo(`）（*%#￥%#￥%、''`)).toBe(false);
});

test('进口药', () => {
  expect(isApprNo(`进H2304043534`)).toBe(false);
});

test('医疗器械', () => {
  expect(isApprNo(`691516515616`)).toBe(false);
});
test('与监管码/69码混淆', () => {
  expect(isApprNo(`815961651561621561`)).toBe(false);
});
