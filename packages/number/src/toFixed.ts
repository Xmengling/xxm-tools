/* eslint-disable @typescript-eslint/no-unused-expressions */
import { isNumber } from './isNumber';
import { isInt } from './isInt';

enum MODE {
  ROUND, // 四舍五入
  CEIL, // 向上取整
  FLOOR, // 向下取整
}

/**
 * @description 对数字保留x位小数，支持正负数。
 * @author maiguoheng
 * @date 26/11/2021
 * @param {number|string} num  需要处理的数字。若非数字，则返回本身
 * @param {number|string} fixedNum 需要保留的小数位数，默认为2 。应为非负整数，否则默认为2
 * @param {number} mode 处理方式。0或其他-四舍五入（默认），1-向上取，2-向下取。
 * @returns {string} 保留x位小数后的结果。
 */
export function toFixed(
  num: number | string,
  fixedNum: number | string = 2,
  mode: MODE = MODE.ROUND,
): string {
  // 校验：非数字
  if (!isNumber(num)) {
    console.error('[error] toFixed：需要处理的字段不是数字类型');
    return `${num}`;
  }

  // 校验：超出临界值
  if (typeof num === 'number' && !Number.isSafeInteger(num)) {
    console.error(
      '[error] toFixed：该数字超出了number临界值，请改为String传入',
    );
    // 超过临界值时num不一定与原来的相同，因此需要抛错而不能直接返回
    throw new Error('该数字超出了number临界值，请改为String传入');
  }

  const innerNum = `${num}`;
  let innerFixedNum = +fixedNum;

  if (!isInt(innerFixedNum) || innerFixedNum < 0) {
    console.error(
      '[error]toFixed：要保留的小数位应为非负整数，已默认保留2位小数',
    );
    innerFixedNum = 2;
  }

  // 原生的toFixed:  2.445.toFixed(2) -> 2.5 (错误)
  // 因此用字符串处理
  const isNegativeNum = +innerNum < 0; // 是否负数
  const arr = innerNum.split('.');
  let int = arr[0].replace('-', '') || '0'; // 整数部分,不论正负,一律处理为非负数，最后再另外处理
  const decimal = arr[1]; // 小数部分
  let result;
  // 原来没有小数点,直接补0
  if (arr.length === 1) {
    result = `${int}.${new Array(innerFixedNum + 1).join('0')}`;
  } else if (decimal.length <= innerFixedNum) {
    // 原来有小数点,且补0即可
    // 要保留的位数【不小于】小数长度时
    result = `${int}.${decimal}${new Array(
      innerFixedNum - decimal.length + 1,
    ).join('0')}`;
  } else {
    // 4.315489184
    // 要保留的位数【小于】小数长度时
    // 判断是否需要进位
    let addOne = false;
    switch (mode) {
      case MODE.ROUND:
        addOne = +decimal[innerFixedNum] >= 5;
        break;
      case MODE.CEIL:
        // 向上取整，正负数刚好相反，因此得判断
        addOne = !!(!isNegativeNum && +decimal[innerFixedNum] > 0);
        break;
      case MODE.FLOOR:
        addOne = !!(isNegativeNum && +decimal[innerFixedNum] > 0);
        break;
      default:
        addOne = +decimal[innerFixedNum] >= 5;
    }

    if (!addOne) {
      result = `${int}.${decimal.slice(0, innerFixedNum)}`;
    } else {
      const newDecimal = [];
      let bitCount = innerFixedNum;
      while (bitCount > 0) {
        const patch = addOne ? 1 : 0;
        const deciNum = Number(decimal[bitCount - 1]) + patch;
        addOne = deciNum > 10;
        const newDeciNum = addOne ? deciNum - 10 : deciNum;
        newDecimal.unshift(newDeciNum);
        bitCount--;
      }
      addOne && (int = String(+int + 1));
      const deciNumStr = newDecimal.join('');
      result = `${int}.${deciNumStr}`;
    }
  }
  // 有效数字位0时，去掉小数点
  +fixedNum === 0 && (result = result?.replace('.', ''));

  isNegativeNum && (result = `-${result}`);

  return result;
}
// 测试用例
// console.log(toFixed(2.42, 1,1))
// console.log(toFixed(2.43, 1,1))
// console.log(toFixed(2.44, 1,1))
// console.log(toFixed(2.45, 1,1))
// console.log(toFixed(2.46, 1,1))

// console.error('正数');
// console.log(toFixed(2.42, 1))
// console.log(toFixed(0.4, 2))
// console.log(toFixed(1.2350, 24))
// console.log(toFixed(16.216487, 2))
// console.log(toFixed(0.99, 1))
// console.log(toFixed(1.487, 3))
// console.log(toFixed(1.587, 2))
// console.log(toFixed(0, 0))
// console.log(toFixed(0, 1))
// console.error('负数');
// console.log(toFixed(-2.4, 3))
// console.log(toFixed(-0.4, 2))
// console.log(toFixed(-1.2350, 24))
// console.log(toFixed(-16.216487, 2))
// console.log(toFixed(-0.99, 1))
// console.log(toFixed(-1.487, 3))
// console.log(toFixed(-1.587, 2))
// console.log(toFixed(-0, 0))
// console.log(toFixed(-0, 1))
// console.log(toFixed(-9007199254740993, '2'));

export default {
  toFixed,
};
