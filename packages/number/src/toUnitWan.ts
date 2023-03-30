/**
 * @description 数字转成万单位
 * @author XMengling
 * @param {number} val
 * @return {string} val
 * @example
 * toUnitWan(123456, 2)
 * // => 12.35万
 */
import { accDiv } from '../../js/src/accDiv';
import { toFixed } from './toFixed';
import { isInvalidAccParam } from '../../js/utils/common';

export function toUnitWan(
  num?: number | string,
  count?: number | string,
): string {
  const reg = /-?[0-9]+.?[0-9]*/;
  const isNum = reg.test(String(num));

  // 非数字
  if (!isNum) {
    return '--';
  }

  // 值为0
  if (Number(num) === 0) {
    return '0';
  }

  // 超出了临界值
  if (isInvalidAccParam(num)) {
    throw new Error('该数字超出了临界值');
  }

  if (Math.abs(Number(num)) < 10000) {
    return `${num}`;
  }
  if (count > 0) {
    const div = accDiv(String(num), 10000); // 除以10000
    return `${toFixed(String(div), count)}万`; // 保留X为小数
  }
  return `${accDiv(String(num), 10000)}万`;
}
export default {
  toUnitWan,
};
