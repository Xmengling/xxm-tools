// 正则表达式库
export function regExpLib() {
  const isMobile = /^((\+|00)86)?1[3456789]\d{9}$/g; // mobile验证(大陆)
  const isEmail = /^([a-zA-Z]|\d)(\w|-)+@[a-zA-Z0-9]+(\.[a-zA-Z0-9_-]+)+$/g; // email验证
  const isTel = /^0\d{2,3}-?\d{7,8}$/g; // 固定电话验证
  const isZh = /(^[\u4e00-\u9fa5]+)$/g; // 中文验证
  const isZhP = /(^[\u0391-\uFFE5]+)$/g; // 中文及中文字符验证
  const isZhEn = /^[\u4e00-\u9fa5a-zA-Z]+$/g; // 中英文验证
  const isUrl = /(http|https):\/\/([\w.]+\/?)\S*/g; // Url地址验证
  const isValidPassword = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,16}$/g; // 6-16位数字/字母组合
  return {
    isMobile,
    isEmail,
    isTel,
    isZh,
    isZhP,
    isZhEn,
    isUrl,
    isValidPassword,
  };
}

export default regExpLib;
