import regExpLib from '../../js/src/regexp';

/**
 * @description 校验是否是手机号码（大陆）
 * @author yuanyingying
 * @date 24/11/2021
 * @export
 * @param str
 * @returns { boolean } 返回是否是手机号码（大陆）
 */
export function isMobilePhone(str: string | number): boolean {
  const reg = regExpLib().isMobile;
  return reg.test(String(str));
}

export default {
  isMobilePhone,
};
