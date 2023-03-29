/**

 * @description 设置文档标题

 * @author XMengling

 * @date 03/29/2023

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

