import regExpLib from '../../js/src/regexp';
/**
 * @description 校验是否为货位号
 * @author yuanyingying
 * @date 30/11/2021
 * @export
 * @param str
 * @returns {*} 返回true/false
 */
export function isLocCode(str: string): boolean {
  const reg = regExpLib().isLocCode;
  return reg.test(str);
}

export default {
  isLocCode,
};
