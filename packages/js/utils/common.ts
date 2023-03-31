// eslint-disable-next-line import/no-cycle

import { toFixed } from '../../number/lib/number';

/**

 * @description 是否为不合法的数字处理参数（如运算数）

 * @author XMengling

 * @date 03/29/2023

 * @export

 * @param {string | number} value 要进行判断的数据

 * @returns {boolean} 判断结果

 */

export const isInvalidAccParam = (value: string | number): boolean => {
  return (
    typeof value === 'undefined' ||
    value === null ||
    value === '' ||
    Number.isNaN(+value) ||
    // 符合SafeInteger范围

    !Number.isSafeInteger(+value.toString().replace('.', ''))
  );
};

/**

 * @description 固定最大精度处理 - 若超过指定的小数位数，则toFixed处理（四舍五入）

 * @author XMengling

 * @date 03/29/2023

 * @export

 * @param {string | number} value 要进行处理的数据

 * @param {number} precision 精度，默认为6

 * @returns {string | number} 处理结果

 */

export const precisionFormat = (
  value: string | number,

  precision = 6,
): string | number => {
  let getValue = value;

  if (getValue === null || Number.isNaN(+value)) {
    return getValue;
  }

  if (
    getValue.toString().indexOf('.') !== -1 &&
    getValue.toString().split('.')[1].length > precision
  ) {
    getValue = toFixed(getValue, precision);
  }

  return getValue;
};

/**

 * @description 下载blob文件

 * @author XMengling

 * @date 03/29/2023

 * @export

 * @param blob blob数据

 * @param fileName 下载文件名

 * @returns

 */

export const downloadBlob = (blob: Blob, fileName = 'download') => {
  const link = document.createElement('a');

  const href = window.URL.createObjectURL(blob);

  link.href = href;

  link.download = fileName;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  window.URL.revokeObjectURL(href);
};

export default {
  isInvalidAccParam,

  precisionFormat,

  downloadBlob,
};
