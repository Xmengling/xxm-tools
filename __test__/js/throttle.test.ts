import { throttle } from '../../packages/js/src/throttle';

describe('测试节流函数', () => {
  test('正常返回函数', () => {
    const result = throttle(() => {});
    expect(typeof result).toBe('function');
  });

  test('应该立即调用该函数', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 350);
    throttledFn();
    expect(mockFn).toHaveBeenCalled();
  });

  test('应该在延迟内只调用函数一次', () => {
    jest.useFakeTimers();
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 350);
    throttledFn();
    throttledFn();
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(350);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('参数被正确传递', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 500);

    throttledFn(1, 2, 3);
    jest.advanceTimersByTime(500);

    expect(mockFn).toBeCalledWith(1, 2, 3);
  });

  // test('函数调用的 this 上下文被正确传递', () => {
  //   const mockThis = { x: 1 };
  //   const mockFn = jest.fn(function (this: typeof mockThis) {
  //     return this.x;
  //   });

  //   const throttledFn = throttle(mockFn, 500);

  //   const result = throttledFn.call(mockThis);
  //   jest.advanceTimersByTime(500);

  //   expect(result).toEqual(1);
  // });

  test('参数不为函数抛异常', () => {
    expect(() => {
      throttle(null);
    }).toThrow(TypeError);
  });
});
