/* eslint-disable @typescript-eslint/no-explicit-any */
import { downloadBlob } from '../utils/common';
import httpRequest from '../utils/httpRequest';

/**
 * @description 导出excel（blob数据）
 * @author wuxingda
 * @date 29/11/2021
 * @export
 * @param {object} config 配置对象
 * @param {string} config.url 接口地址
 * @param {string} config.token token
 * @param {object} config.params 接口请求参数
 * @param {string} [config.fileName='报表数据excel'] 可选参数，导出文件名
 * @param {function} config.emptyCallback 可选参数，导出数据为空时提供回调函数自定义相关操作
 * @returns {*}
 */
export async function exportExcelBlob({
  url,
  token,
  params = {},
  fileName = '报表数据excel',
  emptyCallback,
}: EXPORT_PARAMS_CONFIG): Promise<void> {
  try {
    const blob = await httpRequest({
      url,
      method: 'post',
      data: params,
      responseType: 'blob',
      headers: { token },
    });
    const { type } = blob;
    // 返回json格式，一般为返回错误情况
    if (type === 'application/json') {
      try {
        const res = await readBlob(blob);
        if (+res.code !== 40001) {
          throw new Error(res.message || '导出失败');
        }
      } catch (error) {
        throw new Error(error);
      }
    }
    // 返回blob格式（application/octet-stream），进行导出
    else {
      // 数据为空
      if (blob.size === 0) {
        if (emptyCallback) {
          emptyCallback();
        } else {
          throw new Error('表格数据为空，不支持导出');
        }
        return;
      }
      downloadBlob(blob, `${fileName}.xlsx`);
    }
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * 读取blob数据
 * @param blob blob数据
 */
const readBlob = (blob: Blob): Promise<any> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(blob, 'utf-8');
    reader.onload = () => {
      const getResult = reader.result;
      if (getResult && typeof getResult === 'string') {
        resolve(JSON.parse(getResult));
      } else {
        reject();
      }
    };
  });
};

interface EXPORT_PARAMS_CONFIG {
  url: string;
  token: string;
  params: object;
  fileName?: string;
  emptyCallback?: () => void;
}

export default {
  exportExcelBlob,
};
