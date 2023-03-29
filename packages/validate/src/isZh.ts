import regExpLib from '../../js/src/regexp';

/**
 * @description 校验是否是中文
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @param str
 * @returns {*} 返回是否是中文
 */
export function isZh(str: string): boolean {
  const reg = regExpLib().isZh;
  return reg.test(str);
}

export default {
  isZh,
};
