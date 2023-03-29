// eslint-disable-next-line import/no-cycle
import { isInvalidAccParam, precisionFormat } from '../utils/common';

/**
 * @description 除法
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @param {string | number} arg1 被除数
 * @param {string | number} arg2 除数
 * @returns {number} 运算结果
 */
export function accDiv(arg1: string | number, arg2: string | number): number {
  if (typeof arg1 === 'undefined' || typeof arg2 === 'undefined') {
    throw new Error('请传入参数');
  }
  if (+arg2 === 0) {
    throw new Error('除数不能为0');
  }
  const getArg1 = precisionFormat(arg1);
  const getArg2 = precisionFormat(arg2);
  if (isInvalidAccParam(getArg1) || isInvalidAccParam(getArg2)) {
    throw new Error('传入参数有误，请检查');
  }
  let t1 = 0;
  let t2 = 0;

  try {
    t1 = getArg1.toString().split('.')[1].length;
  } catch (e) {
    // 整数
  }
  try {
    t2 = getArg2.toString().split('.')[1].length;
  } catch (e) {
    // 整数
  }
  const r1 = Number(getArg1.toString().replace('.', ''));
  const r2 = Number(getArg2.toString().replace('.', ''));
  const v = 10 ** (t2 - t1);
  let result = (r1 / r2) * v;
  result = +precisionFormat(result);

  if (isInvalidAccParam(result)) {
    throw new Error('计算结果有误，请检查传参');
  }
  return result;
}

// console.log(accDiv('999', '32485'));
// console.log(accDiv(1000, 234123));
// console.log(accDiv(10.1651, -223));
// console.log(accDiv(-0.432, -23.4));
// console.log(accDiv(898190.1651, 15611.3452345));
// console.log(accDiv(100001, 'sad;g'));
// console.log(accDiv(undefined, undefined));
// console.log(accDiv(null, null));
// console.log(accDiv(0, 0));
// console.log(accDiv(-0, -0));
// console.log(accDiv(0.1651, 123));
// console.log(accDiv('Π', 'Π'));
// console.log(accDiv(9007199254740993, '3490324095i23409seafs'));
// console.log(accDiv(19651653465.1561511, 1965165165.1561784165));

export default {
  accDiv,
};
