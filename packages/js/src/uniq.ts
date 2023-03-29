import { checkDataType } from './checkDataType';
import isEqual from './isEqual';

/**
 * @description 数组去重
 * @author XMengling
 * @date 03/29/2023
 * @param {any[]} source 源数组
 * @param {string} [key] 指定比对的字段，针对`object`类型
 * @return {any[]} 去重后的新数组
 * @example
 *
 * uniq([2, 1, 2])
 * // => [2, 1]
 *
 * uniq()
 * // => []
 *
 * uniq('a')
 * // => []
 *
 * uniq(1)
 * // => []
 */
export function uniq<T>(source: T[], key?: string): T[] {
  if (!Array.isArray(source) || source.length === 0) {
    return [];
  }
  const { length } = source;
  const result = [];
  for (let index = 0; index < length; index += 1) {
    const value = source[index];
    let seenIndex = result.length;
    let isFresh = true;
    while (isFresh && seenIndex) {
      seenIndex -= 1;
      const seenValue = result[seenIndex];
      isFresh = !equalExtend(value, seenValue, key);
    }
    if (isFresh) result.push(value);
  }
  return result;
}

/**
 * 校验两个元素是否相同 或 相同结构 或指定`key`相同
 * @param {*} arg1
 * @param {*} arg2
 * @param {string} [key] 指定比对的字段，针对`object`类型
 * @return {boolean}
 */
function equalExtend(arg1, arg2, key?: string) {
  const checkObject = (data) => checkDataType(data, 'object');
  let equal = isEqual(arg1, arg2);
  const isObject = checkObject(arg1) && checkObject(arg2);
  if (!equal && key && isObject) {
    equal = arg1[key] === arg2[key];
  }
  return equal;
}

export default uniq;
