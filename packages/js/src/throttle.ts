import { checkDataType } from './checkDataType';

/**
 * @description
 * @author Zhixing Zheng
 * @date 29/11/2021
 * @export
 * @param {COMMON_FUNCTION} 需要节流的函数
 * @param {number} 延迟
 * @returns {COMMON_FUNCTION} 节流处理后的函数
 */
export function throttle(func: COMMON_FUNCTION, delay = 350): COMMON_FUNCTION {
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
    if (timer) return;
    func.apply(this, rest);
    timer = setTimeout(() => {
      clearTimeout(timer as NodeJS.Timeout);
      timer = null;
    }, delay);
  };
}
interface COMMON_FUNCTION {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...rest: any[]): any;
}

export default {
  throttle,
};
