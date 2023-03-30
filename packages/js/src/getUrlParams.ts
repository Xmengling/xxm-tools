import { checkDataType } from './checkDataType';

/**
 * @description
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @param {url} 需要处理的url字符串
 * @returns {URL_RESULT} 从url里提取出来的queryString键值对
 */
export function getUrlParams(url: string): URL_RESULT {
  const isString = checkDataType(url, 'string');
  if (!isString) {
    const typeError = new TypeError('Parameter 1 is not a string');
    throw typeError;
  }
  if (!url) {
    throw new TypeError('Parameter "url" cannot be empty.');
  }

  const res: URL_RESULT = {};
  const [baseUrl, queryString = ''] = url.split('?');
  // 无参数
  if (!queryString) {
    return res;
  }
  /* eslint-disable no-restricted-syntax */
  for (const queryParam of queryString.split('&')) {
    const [key, value] = queryParam.split('=').map(decodeURIComponent);
    res[key] = value;
  }
  return res;
}

interface URL_RESULT {
  [prop: string]: string;
}

export default {
  getUrlParams,
};
