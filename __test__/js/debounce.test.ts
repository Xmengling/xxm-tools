import { debounce } from '../../packages/js/src/debounce';

describe('测试防抖函数', () => {
  test('正常返回函数', () => {
    const result = debounce(() => {});
    expect(typeof result).toBe('function');
  });

  test('函数在延迟时间后被调用', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 350);
    debouncedFn();
    expect(mockFn).not.toBeCalled();
    jest.advanceTimersByTime(350);
    expect(mockFn).toBeCalled();
  });

  test('参数被正确传递', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn(1, 2, 3);
    jest.advanceTimersByTime(500);

    expect(mockFn).toBeCalledWith(1, 2, 3);
  });

  test('设置延迟，则在对应延迟后调用函数', () => {
    jest.useFakeTimers();
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);
    debouncedFn();
    debouncedFn();
    debouncedFn();
    expect(mockFn).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(500);
    debouncedFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('函数调用的 this 上下文被正确传递', () => {
    const mockThis = { x: 1 };
    const mockFn = jest.fn(function (this: typeof mockThis) {
      return this.x;
    });

    const debouncedFn = debounce(mockFn, 500);

    const result = debouncedFn.call(mockThis);
    jest.advanceTimersByTime(500);

    expect(result).toEqual(1);
  });

  test('参数不为函数抛异常', () => {
    expect(() => {
      debounce(null);
    }).toThrow(TypeError);
  });
});
