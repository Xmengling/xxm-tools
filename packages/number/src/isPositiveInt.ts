/**

 * @description 判断是否为正整数

 * @author XMengling

 * @date 03/29/2023

 * @param {number|string} num

 * @returns {RegExp|Boolean} 参数为空时，返回正则表达式，数字/字符串时,返回true/false

 */

export function isPositiveInt(num?: number | string): RegExp | boolean {
  const reg = /^[1-9]\d*$/;

  return reg.test(`${num}`);
}

// 例子

// let reg = isPositiveInt() as RegExp

// console.log(reg.test('15'))

// console.log(isPositiveInt('15.5'))

export default {
  isPositiveInt,
};
