import isEqual from './isEqual';

// 重载1 源数据是object类型
function convertEmpties<T extends object>(
  object: T,
  option: ConvertOption,
  replaceHandler?: ReturnType<typeof replaceBy>,
  cache?: Set<T>,
): T;
// 重载2 源数据是object[]数组类型
function convertEmpties<T extends object>(
  array: T[],
  option: ConvertOption,
  replaceHandler?: ReturnType<typeof replaceBy>,
  cache?: Set<T[]>,
): T[];
/**
 * @description 替换数据中的空值为特定字符
 * @author 袁绍宏
 * @date 2021/11/30
 * @param {object | object[]} source 待操作的源数据
 * @param {ConvertOption} option
 * @param {string | string[]} option.key 需处理的key
 * @param {string} [option.replacer] 用于替换的特定字符，默认值'-'
 * @param {*[]} [option.target] 指定的空值，用于匹配需要转换的值 默认[undefined, null, '']
 * @param {*[]} [option.level] 最大递归层级，默认无限递归
 * @param {function} [replaceHandler] [递归参数]缓存，替换器
 * @param {set} [cache] [递归参数]缓存，用于处理循环引用
 * @return {object | object[]} 替换后的数据，引用地址不变
 * @example
 *
 * convertEmpties({ name: '' }, { key: 'name' });
 * // => { name: '-' }
 *
 * convertEmpties({ name: null }, { key: 'name', replacer: '=' });
 * // => { name: '=' }
 *
 * convertEmpties({ name: 'x' }, { key: 'name', target: ['x'] });
 * // => { name: '-' }
 *
 * convertEmpties({ name: '' }, { key: 'age' });
 * // => { name: '' }
 *
 * convertEmpties({ name: '', age: undefined }, { key: 'age' });
 * // => { name: '', age: '-' }
 *
 * convertEmpties([{ name: '' }, { name: 'Tom', age: '' }], { key: 'age' });
 * // => [{ name: '' }, { name: 'Tom', age: '-' }]
 *
 * convertEmpties([{ name: '' }, { name: 'Tom', age: '' }], { key: ['name', 'age'] });
 * // => [{ name: '-' }, { name: 'Tom', age: '-' }]
 *
 */
function convertEmpties<T extends object, K extends T | T[]>(
  source: K,
  option: ConvertOption,
  replaceHandler: ReturnType<typeof replaceBy>,
  cache: Set<K>,
): K {
  const {
    key,
    replacer = '-',
    target = COMMON_TARGET,
    level = Infinity,
  } = option;
  const set = cache || new Set();
  if (set.has(source)) return source; // 处理循环引用
  set.add(source);
  if (!source) return source;
  if (typeof level !== 'number') {
    throw new TypeError('[option.level]必须为数字');
  }
  if (level <= 0) return source; // 不继续递归
  if (!Array.isArray(target)) {
    throw new TypeError('[option.target]必须为数组');
  }
  const keys = Array.isArray(key) ? key : [key];
  const doReplace = replaceHandler || replaceBy(replacer);
  const nextOption = {
    ...option,
    level: level - 1,
  };
  if (Array.isArray(source)) {
    source.forEach((item) =>
      convertEmpties(item, nextOption, doReplace, set as Set<typeof item>),
    );
  } else {
    Object.entries(source).forEach(([k, value]) => {
      if (keys.includes(k)) {
        const found = target.findIndex((item) => isEqual(value, item));
        if (found > -1) {
          doReplace(source, k);
          return;
        }
      }
      if (typeof value === 'object') {
        // 处理对象递归
        convertEmpties(value, nextOption, doReplace, set);
      }
    });
  }
  return source;
}
/**
 * 生成替换处理器
 * @param replacer 替换结果/替换结果的获取回调
 */
function replaceBy(replacer: ConvertOption['replacer']) {
  return (source: object, key: string) => {
    const sourceObject = source;
    const value = sourceObject[key];
    let finalReplacer = replacer;
    if (typeof replacer === 'function') {
      try {
        finalReplacer = replacer(value, sourceObject);
      } catch (error) {
        console.warn('[option.replacer]运行错误', error);
        finalReplacer = value; // 保留旧值
      }
    }
    sourceObject[key] = finalReplacer;
  };
}
// 常用的空值
const COMMON_TARGET = [undefined, null, ''];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReplacerFunc = (value: any, parent: object) => any;
type ConvertOption = {
  key: string | string[];
  replacer?: string | ReplacerFunc;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  target?: any[];
  level?: number;
};

export { convertEmpties };
export default convertEmpties;
