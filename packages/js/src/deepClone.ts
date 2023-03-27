import { checkDataType } from './checkDataType';

/**
 * @description 深拷贝
 * @author wuxingda
 * @date 25/11/2021
 * @export
 * @template T
 * @param originData 要进行深拷贝的数据
 * @returns {*} 深拷贝后的数据
 */
export function deepClone<T>(originData: T): T {
  // 用于记录对象Hash表（针对循环引用的情况）
  const cache = new WeakMap();

  function clone(data) {
    // 若已存在，则直接返回
    const existData = cache.get(data);
    if (existData) {
      return existData;
    }

    // 基础类型直接返回值
    if (!isObject(data)) {
      return data;
    }

    const getType = checkDataType(data);
    switch (getType) {
      // 日期
      case 'date': {
        return new Date(data);
      }
      // 正则
      case 'regexp': {
        return new RegExp(data);
      }
      // 函数
      case 'function': {
        // eslint-disable-next-line func-names
        return function (...getArguments) {
          return data.call(this, ...getArguments);
        };
      }
      // Map
      case 'map': {
        const result = new Map();
        cache.set(data, result);
        data.forEach((val, key) => {
          if (isObject(val)) {
            result.set(key, clone(val));
          } else {
            result.set(key, val);
          }
        });
        return result;
      }
      // Set
      case 'set': {
        const result = new Set();
        cache.set(data, result);
        data.forEach((val) => {
          if (isObject(val)) {
            result.add(clone(val));
          } else {
            result.add(val);
          }
        });
        return result;
      }
      // 对象(包括数组)
      default: {
        // 收集键名（Reflect.ownKeys：能收集到 Symbol类型 和 不可枚举 的属性）
        const keys = Reflect.ownKeys(data);
        // 获得对象的所有属性以及对应的属性描述
        const allDesc = Object.getOwnPropertyDescriptors(data);
        // 创建一个新对象，并继承传入原对象的原型链
        const result = Object.create(Object.getPrototypeOf(data), allDesc);
        // 对新对象进行记录
        cache.set(data, result);
        // 上面得到的result是对data的浅拷贝，需递归判断进行深拷贝
        keys.forEach((key) => {
          const val = data[key];
          if (isObject(val)) {
            result[key] = clone(val);
          } else {
            result[key] = val;
          }
        });
        return result;
      }
    }
  }

  return clone(originData);
}

function isObject(target) {
  return (typeof target === 'object' && target) || typeof target === 'function';
}

export default {
  deepClone,
};
