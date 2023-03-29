/* eslint-disable @typescript-eslint/no-explicit-any */



/**

 * 判断相等

 * @description 判断传入的2个或多个元素是否相等；如果是引用类型，则解构递归判断

 * @author XMengling

 * @date 03/29/2023

 * @param {any[] | any} arg1 传入的待判断元素/元素列表

 * - 入参数量 = 1，arg1必须为长度不小于2的数组，数组内容作为待判断的元素

 * - 入参数量 > 1，arg1作为待判断元素之一

 * @param {any} [arg2] [非必须]传入的待判断元素，可传入多个

 * @return {boolean} 是否相等

 * @example

 * isEqual(1, 2)

 * // => false

 * isEqual([1, 2])

 * // => false

 * isEqual('1', 1)

 * // => false

 * isEqual(1, 1, 1, 1)

 * // => true

 *

 * isEqual([1, 2], [1 ,2])

 * // => true

 * isEqual([{a: 1}, {a: 1}])

 * // => true

 * isEqual([0, 1], {0: 0, 1: 1})

 * // => true

 *

 * isEqual(1)

 * // => Uncaught TypeError: 参数类型有误

 */

export function isEqual(...args): boolean {

  let elements = args;

  if (args.length < 2) {

    const arg1 = args[0];

    if (Array.isArray(arg1)) {

      if (arg1.length < 2) {

        throw new TypeError('数组元素个数不能少于1');

      }

      elements = arg1;

    } else {

      throw new TypeError('参数类型有误');

    }

  }

  const firstItem = elements[0];

  return elements.slice(1).every((item) => {

    return valueEqual(firstItem, item);

  });

}



/**

 * 判断2个元素是否相等

 * @param {any} arg1

 * @param {any} arg2

 * @return {boolean} 是否相等

 */

function valueEqual(arg1: any, arg2: any): boolean {

  const type1 = typeof arg1;

  const bool = type1 === typeof arg2;

  if (!bool) {

    return false;

  }

  if (type1 === 'object' && Array.isArray(arg1) !== Array.isArray(arg2)) {

    return false;

  }

  const type = typeof arg1;

  switch (type) {

    case 'object': // object/array/null

      return objectEqual(arg1, arg2);

    case 'function':

      return strictEqual(arg1, arg2);

    default:

      return strictEqual(arg1, arg2);

  }

}

/**

 * 判断2个元素严格相等

 * @param {any} arg1

 * @param {any} arg2

 * @return {boolean} 是否相等

 */

function strictEqual(arg1, arg2): boolean {

  return arg1 === arg2;

}

/**

 * 判断类对象元素相等

 * @param {OBJECT_LIKE} arg1

 * @param {OBJECT_LIKE} arg2

 * @return {boolean} 是否相等

 */

function objectEqual(arg1: OBJECT_LIKE, arg2: OBJECT_LIKE): boolean {

  if (arg1 === null || arg2 === null) {

    return strictEqual(arg1 as null, arg2 as null);

  }

  const isSameObject = strictEqual(arg1, arg2);

  if (isSameObject) return true;

  return Object.entries(arg1).every(([key, value1]) => {

    const value2 = arg2[key];

    return valueEqual(value1, value2);

  });

}



// object/array

type OBJECT_LIKE = {

  [x: string | number]: any;

};



export default isEqual;

