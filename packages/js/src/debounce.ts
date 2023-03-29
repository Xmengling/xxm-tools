import { checkDataType } from './checkDataType';

/**
 * @description
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @param {COMMON_FUNCTION} func  需要防抖的函数
 * @param {number} delay 延迟
 * @returns {COMMON_FUNCTION} 防抖处理后的函数
 */
export function debounce(func: COMMON_FUNCTION, delay = 350): COMMON_FUNCTION {
  const fnIsFunction = checkDataType(func, 'function');
  if (!fnIsFunction) {
    const typeError: TypeError = new TypeError(
      'Parameter 1 is not a function!',
    );
    throw typeError;
  }

  let timer: NodeJS.Timeout | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function callback(...rest: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(timer);
      func.apply(this, rest);
    }, delay);
  };
}

interface COMMON_FUNCTION {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...rest: any[]): any;
}

export default {
  debounce,
};
