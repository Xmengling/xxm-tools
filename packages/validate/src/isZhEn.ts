import regExpLib from '../../js/src/regexp';

/**
 * @description 校验是否是中英文
 * @author yuanyingying
 * @date 26/11/2021
 * @export
 * @param str
 * @returns {*} 返回 true/false
 */
export function isZhEn(str: string): boolean {
  const reg = regExpLib().isZhEn;
  return reg.test(str);
}

export default {
  isZhEn,
};
