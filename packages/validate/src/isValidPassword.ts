import regExpLib from '../../js/src/regexp';

/**
 * @description 校验密码是否符合6-16位数字/字母组合
 * @author yuanyingying
 * @date 30/11/2021
 * @export
 * @param str 需校验的密码
 * @returns {*} 返回是否符合密码规则
 */
export function isValidPassword(str: string): boolean {
  const reg = regExpLib().isValidPassword;
  return reg.test(str);
}

export default {
  isValidPassword,
};
