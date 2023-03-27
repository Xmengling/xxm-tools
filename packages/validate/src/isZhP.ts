import regExpLib from '../../js/src/regexp';

/**
 * @description 校验是否是中文及中文符号
 * @author yuanyingying
 * @date 26/11/2021
 * @export
 * @param str
 * @returns {*} 返回是否是是中文及中文符号
 */
export function isZhP(str: string): boolean {
  const reg = regExpLib().isZhP;
  return reg.test(str);
}

export default {
  isZhP,
};
