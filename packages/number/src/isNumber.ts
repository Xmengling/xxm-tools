/**

 * @description 判断是否为数字

 * @author XMengling

 * @date 03/29/2023

 * @param {number|string} num

 * @returns {RegExp|Boolean} 参数为空时，返回正则表达式，数字/字符串时,返回true/false

 */

export function isNumber(num?: number | string): RegExp | boolean {
  const reg = /^-?\d*.?\d+$/;

  return reg.test(`${num}`);
}

// 例子

// console.log(isNumber(-15))

// console.log(isNumber('-.15'))

// console.log(isNumber(+15))

// console.log(isNumber('-15'))

// console.log(isNumber('0'))

// console.log(isNumber('-0'))

// console.log(isNumber('+0'))

// console.log(isNumber('-2'))

// console.log(isNumber('-2.6354'))

// console.log(isNumber('-0.55'))

// console.log(isNumber('-0.55r'))

export default {
  isNumber,
};
