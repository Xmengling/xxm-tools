/**
 * @description 数字转成中文汉字
 * @author XMengling
 * @param {number} val
 * @return {string} val
 * @example
 * toChn(123)
 * // => 一百二十三
 */
import { isInt } from './isInt'
import { isInvalidAccParam } from '../../js/utils/common'

export function toChn(num?: number | string): string {

  const reg = /-?[0-9]+.?[0-9]*/;
  const isNum = reg.test(String(num)) // 是否数字

  // 非数字
  if (!isNum) {
    return '--';
  }

  // 值为0
  if (Number(num) === 0) {
    return '零';
  }
  
  // 超出了临界值
  if(isInvalidAccParam(num)) {
    throw new Error('该数字超出了临界值')
  }

  // 是否负数
  const isNegtive = (num < 0)
  if(isNegtive) {
    num = Math.abs(Number(num))
  }

  // 是小数：拆分整数部分和小数部分
  let intPart
  let decimalPart
  if(!isInt(num)) {
    const numSplit = num.toString().split('.')
    intPart = numSplit[0]
    decimalPart = numSplit[1]
  } else {
    intPart = num
    decimalPart = 0
  }

  const arr1 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const arr2 = [
    '',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿',
    '十',
    '百',
    '千',
    '兆',
    '十',
    '百',
    '千',
    '京',
  ]; // 可继续追加更高位转换值

  // 处理整数部分
  let intResult = ''
  const initArray = intPart.toString().split('');
  for (let i = 0; i < initArray.length; i += 1) {
    const des_i = initArray.length - 1 - i; // 倒序排列设值
    intResult = arr2[i] + intResult;
    const arr1_index = initArray[des_i]; // 具体数字
    intResult = arr1[arr1_index] + intResult; // 具体数字对应的中文 + 单位
  }
  // 将【零千、零百】换成【零】 【十零】换成【十】
  intResult = intResult.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十');
  // 合并中间多个零为一个零
  intResult = intResult.replace(/零+/g, '零');
  // 将【零亿】换成【亿】【零万】换成【万】
  intResult = intResult.replace(/零亿/g, '亿').replace(/零万/g, '万');
  // 将【亿万】换成【亿】
  intResult = intResult.replace(/亿万/g, '亿');
  // 移除末尾的零
  intResult = intResult.replace(/零+$/, '');
  // 将【一十】换成【十】
  intResult = intResult.replace(/^一十/g, '十');

  // 处理小数部分
  let decimalResult = ''
  if(decimalPart > 0) {
    const decimalArray = decimalPart.toString().split('');
    for (let i = 0; i < decimalArray.length; i += 1) {
      const num = decimalArray[i]
      decimalResult = decimalResult + arr1[num]; // 具体数字对应的中文
    }
  }

  // 拼接结果
  let result = intResult
  // 如果是小数，则补上小数位
  if(decimalPart > 0) {
    result = `${result}点${decimalResult}`
  }
  // 如果是负数，则补个负字
  if(isNegtive) {
    return `负${result}`;
  }
  return `${result}`;
}
export default {
  toChn,
};
