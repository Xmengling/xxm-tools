import regExpLib from '../../js/src/regexp';

// 国药准字格式为：国药准字+1位字母+8位数字
// 字母包括H、Z、S、 B、T、F、J,分别代表药品不同类别：H代表化学药品，Z代表中成药，S代表生物制品，B代表保健药品，T代表体外化学诊断试剂，F代表药用辅料，J代表进口分包装药品
// 8位数字的第1、2位代表原批准文号的来源，其中10代表原卫生部批准的药品；
// 第3、4位代表换发批准文号之年的公元年号的后两位数字，但来源于卫生部和国家药品监管部门的批准文号仍使用原文号年号的后两位数字。
// 第5、6、7、8位为批准文号的顺序号。

/**
 * @description 校验是否是国药准字
 * @author yuanyingying
 * @date 24/11/2021
 * @export
 * @param str
 * @returns { boolean } 返回是否是国药准字
 */
export function isApprNo(str: string): boolean {
  const reg = regExpLib().isApprNo;
  return reg.test(str);
}

export default {
  isApprNo,
};
