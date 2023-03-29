/**
 * @description 打开新标签页
 * @author XMengling
 * @date 03/29/2023
 * @deport
 * @param {string|undefined} url 选填，新标签页的链接。为空则默认打开about:blank
 * @param {string|undefined} name 选填，新标签页的名称（非标题）。该字符串可以用来作为超链接 <a> 或表单 <form> 元素的目标属性值。字符串中不能含有空白字符
 * @param {object|undefined} features 选填，新窗口特性对象。若为空，则在当前窗口打开新标签；若非空，则在新窗口打开。更多特性可查询{@link https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open}
 * @returns {Window|null}  打开的新窗口对象的引用。如果调用失败，返回值会是 null 。
 */
export function openNewTab(url: string, name: string, features: FEATURES) {
  let featureString;
  if (features) {
    featureString = featuresToString(features);
  }
  return window.open(url, name, featureString);
}

/**
 * @description 将窗口特性对象转换为对应的字符串
 * @author XMengling
 * @date 03/29/2023
 * @param {object} features 窗口特性对象
 * @returns {string} 窗口特性字符串
 */
function featuresToString(features: FEATURES) {
  let result: string[];
  // 对象转换为数组，遍历
  Object.entries(features).forEach(([key, value]) => {
    // 若值为boolean，则相应地替换为yes或者no，否则直接使用原值，最后存入result数组中
    if (typeof value === 'boolean') {
      result.push(`${key}=${value ? 'yes' : 'no'}`);
    } else {
      result.push(`${key}=${value}`);
    }
  });
  // 转换为字符串
  return result.join(',');
}

// 窗口特性类型
interface FEATURES {
  resizable?: boolean;
  scrollbars?: boolean;
  left?: string;
  top?: string;
  height?: string;
  width?: string;
  [propName: string]: boolean | string;
}

export default {
  openNewTab,
};
