import regExpLib from '../../js/src/regexp';
/**
 * @description 校验是否为货位号
 * @author XMengling
 * @date 03/29/2023
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
