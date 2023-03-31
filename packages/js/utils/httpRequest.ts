/* eslint-disable @typescript-eslint/no-explicit-any */

import { checkDataType } from '../src/checkDataType';

/**
 * @description http请求
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @param {object} params 配置对象
 * @param {string} params.url 请求地址
 * @param {"GET"|"POST"|"PUT"|"DELETE"} params.method 请求方法
 * @param {object|FormData|string} params.data 传参对象，json、formdata、普通表单字符串
 * @param {{ [key: string]: string }} params.headers "XMLHttpRequest.header"设置对象
 * @param {"arraybuffer"|"blob"|"document"|"json"|"text"} params.responseType 定义响应类型的枚举值
 * @param {number} params.timeout 超时检测毫秒数
 */

const httpRequest = (params): Promise<any> => {
  if (checkDataType(params) !== 'object') {
    throw new Error('配置参数传参有误');
  }

  if (!params.method) throw new Error('缺少请求类型');

  if (!params.url) throw new Error('缺少请求url');

  return new Promise((resolve, reject) => {
    const XHR = new XMLHttpRequest();

    // 请求方法
    const { method } = params;

    // 请求链接
    let { url } = params;

    // 非GET请求传参
    let body = null;

    // GET请求传参
    let query = '';

    // 传参数据类型
    const dataType = checkDataType(params.data);

    // 传参处理
    if (method === 'GET') {
      // 解析对象传参
      if (dataType === 'object') {
        Object.keys(params.data).forEach((key) => {
          query += `&${key}=${params.data[key]}`;
        });
      } else {
        throw new Error('GET请求传参有误，请求参数应为object类型');
      }

      if (query) {
        query = `?${query.slice(1)}`;

        url += query;
      }
    } else {
      body = dataType === 'object' ? JSON.stringify(params.data) : params.data;
    }

    // 监听请求变化
    XHR.onreadystatechange = () => {
      if (XHR.readyState !== 4) return;
      if (XHR.status === 200 || XHR.status === 304) {
        resolve(XHR.response);
      } else {
        reject(XHR.response);
      }
    };

    XHR.open(method, url, true);

    // 设置对应的传参请求头，GET方法不需要
    if (params.method !== 'GET') {
      switch (dataType) {
        case 'object':
          XHR.setRequestHeader('Content-Type', 'application/json'); // json请求
          break;

        case 'string':
          XHR.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded',
          ); // 表单请求，非new FormData

          break;

        default:
          break;
      }
    }

    // 设置请求头信息
    if (params.headers) {
      Object.keys(params.headers).forEach((key) => {
        const value = params.headers[key];
        XHR.setRequestHeader(key, value);
      });
    }

    // 定义响应类型
    if (params.responseType) {
      XHR.responseType = params.responseType;
    }

    // 在IE中，超时属性只能 在调用open()方法之后 且 在调用send()方法之前设置。
    if (params.timeout > 0) {
      XHR.timeout = params.timeout;
      XHR.ontimeout = () => {
        console.warn('接口请求超时');
        XHR.abort();
      };
    }

    XHR.send(body);
  });
};

export default httpRequest;
