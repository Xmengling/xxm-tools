import { isInvalidAccParam, precisionFormat } from '../utils/common';

/**
 * @description 乘法
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @param {string | number} arg1 运算数1
 * @param {string | number} arg2 运算数2
 * @returns {number} 运算结果
 */
export function accMul(arg1: string | number, arg2: string | number): number {
  if (typeof arg1 === 'undefined' || typeof arg2 === 'undefined') {
    throw new Error('请传入参数');
  }
  const getArg1 = precisionFormat(arg1);
  const getArg2 = precisionFormat(arg2);
  if (isInvalidAccParam(getArg1) || isInvalidAccParam(getArg2)) {
    throw new Error('传入参数有误，请检查');
  }
  const s1 = getArg1.toString();
  const s2 = getArg2.toString();

  let m = 0;
  try {
    m += s1.split('.')[1].length;
  } catch (e) {
    // 整数
  }
  try {
    m += s2.split('.')[1].length;
  } catch (e) {
    // 整数
  }

  const v = 10 ** m;
  let result = (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / v;
  result = +precisionFormat(result);

  if (isInvalidAccParam(result)) {
    throw new Error('计算结果有误，请检查传参');
  }
  return result;
}

// console.log(accMul('999', '32485'));
// console.log(accMul(1000, 234123));
// console.log(accMul(10.1651, -223));
// console.log(accMul(-0.432, -23.4));
// console.log(accMul(898190.1651, 15611.3452345));
// console.log(accMul(100001, 'sad;g'));
// console.log(accMul(undefined, undefined));
// console.log(accMul(null, null));
// console.log(accMul(0, 0));
// console.log(accMul(-0, -0));
// console.log(accMul(0.1651, 123));
// console.log(accMul('Π', 'Π'));
// console.log(accMul(9007199254740993, '3490324095i23409seafs'));
// console.log(accMul(19651653465.1561511, 1965165165.1561784165));

export default {
  accMul,
};
