import isKey from './isKey';
import stringToPath from './stringToPath';

/**
 * @description 分解`value`为属性访问路径数组
 * @from lodash
 * @author XMengling
 * @date 03/29/2023
 * @param {*} value 待分解值
 * @param {object} [object] 待查询对象
 * @returns {string[]} 属性访问路径数组
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function castPath(value: any | any[], object?: object): any[] {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === 'object') {
    return [''];
  }
  return isKey(value, object) ? [value] : stringToPath(value);
}

export default castPath;
