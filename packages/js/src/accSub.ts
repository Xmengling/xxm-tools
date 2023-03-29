import { isInvalidAccParam, precisionFormat } from '../utils/common';

/**
 * @description 减法
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @param {string | number} arg1 运算数1
 * @param {string | number} arg2 运算数2
 * @returns {number} 运算结果
 */
export function accSub(arg1: string | number, arg2: string | number): number {
  if (typeof arg1 === 'undefined' || typeof arg2 === 'undefined') {
    throw new Error('请传入参数');
  }
  let getArg1 = precisionFormat(arg1);
  let getArg2 = precisionFormat(arg2);
  if (isInvalidAccParam(getArg1) || isInvalidAccParam(getArg2)) {
    throw new Error('传入参数有误，请检查');
  }
  getArg1 = Number(getArg1);
  getArg2 = Number(getArg2);
  let r1;
  let r2;

  try {
    r1 = getArg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = getArg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  const m = 10 ** Math.max(r1, r2);
  const n = r1 >= r2 ? r1 : r2;
  let result = Number(((getArg1 * m - getArg2 * m) / m).toFixed(n));
  result = +precisionFormat(result);

  if (isInvalidAccParam(result)) {
    throw new Error('计算结果有误，请检查传参');
  }
  return result;
}

// console.log(accSub('999', '32485'));
// console.log(accSub(1000, 234123));
// console.log(accSub(10.1651, -223));
// console.log(accSub(-0.432, -23.4));
// console.log(accSub(898190.1651, 15611.3452345));
// console.log(accSub(100001, 'sad;g'));
// console.log(accSub(undefined, undefined));
// console.log(accSub(null, null));
// console.log(accSub(0, 0));
// console.log(accSub(-0, -0));
// console.log(accSub(0.1651, 123));
// console.log(accSub('Π', 'Π'));
// console.log(accSub(9007199254740993, '3490324095i23409seafs'));
// console.log(accSub(19651653465.1561511, 1965165165.1561784165));

export default {
  accSub,
};
