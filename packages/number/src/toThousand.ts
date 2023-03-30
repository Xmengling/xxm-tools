/**
 * @description 数字转化为千分位货币符号
 * @author XMengling
 * @param {number} val
 * @return {string} val
 * @example
 * toThousand('6573');
 * // => 6,573
 */
import { toFixed } from './toFixed';
import { isInvalidAccParam } from '../../js/utils/common';

export function toThousand(num?: number | string): string {
  // 数字判断
  const reg = /-?[0-9]+.?[0-9]*/;
  const isNum = reg.test(String(num));

  // 非数字
  if (!isNum) {
    return '0.00';
  }

  // 值为0
  if (Number(num) === 0) {
    return '0.00';
  }

  // 超出了临界值
  if (isInvalidAccParam(num)) {
    throw new Error('该数字超出了临界值');
  }

  const result = parseFloat(String(toFixed(String(num)))).toLocaleString(
    'en-US',
    { minimumFractionDigits: 2 },
  );
  return result;
}
export default {
  toThousand,
};
