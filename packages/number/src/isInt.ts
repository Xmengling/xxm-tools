/**
 * @description 判断是否为整数
 * @author XMengling
 * @date 03/29/2023
 * @param {number|string} num
 * @returns {RegExp|Boolean} 参数为空时，返回正则表达式，数字/字符串时,返回true/false
 */

export function isInt(num?: number | string): RegExp | boolean {
  const reg = /^-?([1-9]?\d+)$/;
  return reg.test(`${num}`);
}

// 例子
// console.log(isInt('205'));
// console.log(isInt('-'));
// console.log(isInt(''));
// console.log(isInt('15.5'));
// console.log(isInt('1'));
// console.log(isInt('15'));
// console.log(isInt('-15'));
// console.log(isInt('-15.7'));
// console.log(isInt('-0'));
// console.log(isInt('0'));
// console.log(isInt(0));
// console.log(isInt(15.5));
// console.log(isInt(15));
// console.log(isInt(-15));
// console.log(isInt(-15.7));
// console.log(isInt('-0'));

export default {
  isInt,
};
