/**
 * @description 设置文档标题
 * @author 陈浩林
 * @date 29/11/2021
 * @deport
 * @param {Document} doc 目标文档
 * @param {string} title 标题
 * @returns {undefined}
 */
export function setDocumentTitle(doc: Document, title: string) {
  // eslint-disable-next-line no-param-reassign
  doc.title = title;
}

export default {
  setDocumentTitle,
};
