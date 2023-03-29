import regExpLib from '../../js/src/regexp';

/**
 * @description 校验是否是固定电话
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @param str
 * @returns { boolean } 返回是否是固定电话
 */
export function isTel(str: string | number): boolean {
  const reg = regExpLib().isTel;
  return reg.test(String(str));
}

export default {
  isTel,
};
