/**
 * @description 元素滚动至顶部
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @param {object} config
 * @param {Document} config doc 文档对象
 * @param {string} config.selector css选择器
 * @param {targetTop } [config.targetTop=0] 选填，目标元素顶部与视口可见内容的距离，默认为0。
 * @throws 当目标元素不存在时会抛出错误
 * @returns {undefined}
 */
export function scrollToTop({ doc, selector, targetTop = 0 }: SCROLL_PARAM) {
  const element = doc.querySelector(selector);
  if (element) {
    element.scrollTop = targetTop;
  } else {
    throw new Error('目标元素不存在');
  }
}

interface SCROLL_PARAM {
  doc: Document; // 文档对象
  selector: string; // 选择器
  targetTop?: number;
}

export default {
  scrollToTop,
};
