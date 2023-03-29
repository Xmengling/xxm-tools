import { checkDataType } from '../src/checkDataType';

// 匹配读取深层数据的结构 xx[yy] 或 xx.yy
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
// 匹配有效变量名
const reIsPlainProp = /^\w*$/;

/**
 * @description 校验`value`是一个有效的对象属性名
 * @from lodash
 * @author XMengling
 * @date 03/29/2023
 * @param {*} value 待校验的值
 * @param {object} [object] 待查询的对象
 * @returns {boolean} 是否一个有效的对象属性名
 */
export function isKey(value, object?: object): boolean {
  if (Array.isArray(value)) {
    return false;
  }
  const type = typeof value;
  const isSymbol = checkDataType(value, 'symbol');
  if (type === 'number' || type === 'boolean' || value == null || isSymbol) {
    return true;
  }
  return (
    reIsPlainProp.test(value) ||
    !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
  );
}

export default isKey;
