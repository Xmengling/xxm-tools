import regExpLib from '../../js/src/regexp';

/**
 * @description 校验是否是Email
 * @author yuanyingying
 * @date 24/11/2021
 * @export
 * @param str
 * @returns { boolean } 返回是否是电子邮件
 */
export function isEmail(str: string): boolean {
  const reg = regExpLib().isEmail;
  return reg.test(str);
}

export default {
  isEmail,
};
