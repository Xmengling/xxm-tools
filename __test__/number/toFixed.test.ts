/* eslint-disable @typescript-eslint/no-loss-of-precision */
/* eslint-disable prettier/prettier */
import { toFixed } from '../../packages/number/src/toFixed'

test('带多位小数的零', () => {
  expect(toFixed('0.0000')).toBe("0.00");
});

test('带负号及小数的零', () => {
  expect(toFixed(-0.0)).toBe("0.00");
});

test('文本类型需要补齐位数的零', () => {
  expect(toFixed('0',3,2)).toBe('0.000');
});

test('数字类型的需要补齐位数的零', () => {
  expect(toFixed(0,'4',1)).toBe('0.0000');
});

test('空格', () => {
  expect(toFixed('')).toBe('');
});

test('一半默认空，一半输入空格', () => {
  expect(toFixed(' ','')).toBe(' ');
});

test('前二参数字符串类型', () => {
  expect(toFixed('1','2',2)).toBe('1.00');
});

test('参数类型不定', () => {
  expect(toFixed('101', 10)).toBe('101.0000000000');
});

test('num类型上限值输入', () => {
  expect(toFixed('9007199254740993','0')).toBe('9007199254740993');
});

test('负整数全输入', () => {
  expect(toFixed('-1','2', 2)).toBe('-1.00');
});

test('五位最小负整数，默认空', () => {
  expect(toFixed('-99999')).toBe('-99999.00');
});

test('三位最大负整数，补齐小数位', () => {
  expect(toFixed('-100', 10)).toBe('-100.0000000000');
});

test('num类型下限值输入', () => {
  function runFixed() {
    toFixed(-9007199254740993,'2')
  }
  expect(runFixed).toThrowError(new Error('该数字超出了number临界值，请改为String传入'));
});

test('四位补齐，向下取值', () => {
  expect(toFixed('1.156','4', 2)).toBe('1.1560');
});

test('负一位省略，向下取值', () => {
  expect(toFixed('-0.15','1',2)).toBe('-0.2');
});

test('零小数位省略，向下取值', () => {
  expect(toFixed('17.5616','0',2)).toBe('17');
});
test('负零小数位省略，向下取值', () => {
  expect(toFixed('-92151.5616','1',2)).toBe('-92151.6');
});

test('圆周率向下取值', () => {
  expect(toFixed('3.1415926','6',2)).toBe('3.141592');
});

test('负圆周率向下取值', () => {
  expect(toFixed('-3.1415926','2',2)).toBe('-3.15');
});

test('零小数位省略，向上取值', () => {
  expect(toFixed('874949195.12235641','0',1)).toBe('874949196');
});

test('负零小数位省略，向上取值', () => {
  expect(toFixed('-55.12235641','0',1)).toBe('-55');
});

test('负五位小数省略，向上取值', () => {
  expect(toFixed(-99.12235641,'5', 1)).toBe('-99.12235');
});

test('正五位小数补齐，向上取值', () => {
  expect(toFixed('15615.456','5', 1)).toBe('15615.45600');
});

test('正零小数位四舍五入', () => {
  expect(toFixed('874949195.1223','0',0)).toBe('874949195');
});

test('负零小数位四舍五入', () => {
  expect(toFixed('-874949195.5223','0',0)).toBe('-874949196');
});

test('正小数四舍五入', () => {
  expect(toFixed('875.12','1',0)).toBe('875.1');
});

test('负小数四舍五入', () => {
  expect(toFixed(-875.12156,'3',0)).toBe('-875.122');
});

test('null', () => {
  expect(toFixed(null)).toBe('null');
});
test('-1', () => {
  expect(toFixed(-1)).toBe('-1.00');
});
test('中英文', () => {
  expect(toFixed('te殊')).toBe('te殊');
});
test('特殊符号', () => {
  expect(toFixed('@#$%^')).toBe('@#$%^');
});
test('繁体字', () => {
  expect(toFixed('瀿鷉')).toBe('瀿鷉');
});

test('toFixed(0.030752655071571496, 6)', () => {
  expect(toFixed(0.030752655071571496, 6)).toStrictEqual('0.030753');
})

test('12.015154499446, 10', () => {
  expect(toFixed(12.015154499446, 10)).toStrictEqual('12.0151544994');
})