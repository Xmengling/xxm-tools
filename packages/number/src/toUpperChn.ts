/**
 * @description 数字转成中文大写汉字
 * @author 程梦玲
 * @param {num} val
 * @return {string} val
 * @example
 * toUpperChn(123)
 * // => 壹佰贰拾叁
 */
import { isInvalidAccParam } from '../../js/utils/common'
export function toUpperChn(num?: number | string): string {

  const reg = /-?[0-9]+.?[0-9]*/;
  const isNum = reg.test(String(num))

  // 非数字
  if (!isNum) {
    return '--';
  }

  // 值为0
  if (Number(num) === 0) {
    return '零';
  }
  
  // 超出了临界值
  if(isInvalidAccParam(num)) {
    throw new Error('该数字超出了临界值')
  }

  const isNegtive = (num < 0)
  if(isNegtive) {
    num = Math.abs(Number(num))
  }

  // 配置
  const confs = {
      lower: {
          num: ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
          unit: ["", "十", "百", "千", "万"],
          level: ["", "万", "亿"]
      },
      upper: {
          num: ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"],
          unit: ["", "拾", "佰", "仟"],
          level: ["", "万", "亿", '兆']
      },
      decimal: {
          unit: ["分", "角"]
      },
      maxNumber: 999999999999.99
  };

  const conf = confs['upper'];
  const numbers = String(Number(num).toFixed(2)).split(".");
  const integer = numbers[0].split("");
  const decimal = Number(numbers[1]) === 0 ? [] : numbers[1].split("");

  // 四位分级
  const levels = integer.reverse().reduce((pre, item, idx) => {
      let level = pre[0] && pre[0].length < 4 ? pre[0] : [];
      let value =
          item === "0" ? conf.num[item] : conf.num[item] + conf.unit[idx % 4];
      level.unshift(value);

      if (level.length === 1) {
          pre.unshift(level);
      } else {
          pre[0] = level;
      }

      return pre;
  }, []);

  // 整数部分
  const _integer = levels.reduce((pre, item, idx) => {
      let _level = conf.level[levels.length - idx - 1];
      let _item = item.join("").replace(/(零)\1+/g, "$1"); // 连续多个零字的部分设置为单个零字

      // 如果这一级只有一个零字，则去掉这级
      if (_item === "零") {
          _item = "";
          _level = "";

          // 否则如果末尾为零字，则去掉这个零字
      } else if (_item[_item.length - 1] === "零") {
          _item = _item.slice(0, _item.length - 1);
      }

      return pre + _item + _level;
  }, "");

  // 小数部分
  let _decimal = decimal
      .map((item, idx) => {
          const unit = confs.decimal.unit;
          const _unit = item !== "0" ? unit[unit.length - idx - 1] : "";

          return `${conf.num[item]}${_unit}`;
      })
      .join("");

  let result = `${_integer}`
  // 如果是小数，则补个'元'字 + 小数位
  if(_decimal) {
    result = `${result}元` + (_decimal || "");
  }
  // 如果是负数，则补个'负'字
  if(isNegtive) {
    result = `负${result}`;
  }
  return result;
};

export default {
  toUpperChn,
};
