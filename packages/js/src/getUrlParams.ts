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
  const res: URL_RESULT = {};
  const queryArray = url.split('?');
  const queryString: string | undefined = queryArray[1] || queryArray[0];
  if (queryString) {
    const queryParams: string[] = queryString.split('&');
    queryParams.forEach((item) => {
      const keyIndex: number = item.indexOf('=');
      const key: string = item.substring(0, keyIndex);
      const value: string = item.substring(keyIndex + 1);
      res[key] = value;
    });
  }
  return res;
}

declare interface URL_RESULT {
  [prop: string]: string;
}

export default {
  getUrlParams,
};
