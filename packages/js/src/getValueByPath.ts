import castPath from '../utils/castPath';

/**
 * @description 检索`object`中路径为`path`的值；若无，则返回默认值`defaultValue`
 * @from lodash
 * @todo 该方法和相关方法，都是从lodash迁移过来的，做了一些数据兼容性的简化
 * @author XMengling
 * @date 03/29/2023
 * @param {Object} object 待检索的对象
 * @param {array | string} path 检索路径
 * @param {any} [defaultValue] 默认值
 * @returns {any} 检索结果
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * getValueByPath(object, 'a[0].b.c')
 * // => 3
 *
 * getValueByPath(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * getValueByPath(object, 'a.b.c', 'default')
 * // => 'default'
 */
export function getValueByPath(
  object: object,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  path: any | any[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any,
) {
  if (object == null) {
    return defaultValue;
  }
  const paths = castPath(path, object);
  const { length } = paths;
  let index = 0;
  let result = object;

  while (result != null && index < length) {
    const subPath = paths[index];
    if (Object.prototype.hasOwnProperty.call(result, subPath)) {
      result = result[subPath];
    } else {
      result = undefined;
    }
    index += 1;
  }
  if (index && index === length) {
    return result;
  }
  return defaultValue;
}

export default getValueByPath;
