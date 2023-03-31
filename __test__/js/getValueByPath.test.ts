import { getValueByPath } from '../../packages/js/src/getValueByPath';

describe('测试检索指定路径属性', () => {
  test('字符串', () => {
    expect(getValueByPath({ a: [{ b: { c: 3 } }] }, 'a[0].b.c')).toStrictEqual(
      3,
    );
  });
  test("{ a: [{ b: { c: 3 } }] }, ['a', '0', 'b', 'c']", () => {
    expect(
      getValueByPath({ a: [{ b: { c: 3 } }] }, ['a', '0', 'b', 'c']),
    ).toStrictEqual(3);
  });

  test("{ a: [{ b: { c: 3 } }] }, ['a', 'b', 'c'], 'default'", () => {
    expect(
      getValueByPath({ a: [{ b: { c: 3 } }] }, ['a', 'b', 'c'], 'default'),
    ).toStrictEqual('default');
  });

  test("{}, 'toString'", () => {
    expect(getValueByPath({}, 'toString')).toStrictEqual(undefined);
  });

  test('{ a: [{ b: { c: 3 } }] }, 123', () => {
    expect(getValueByPath({ a: [{ b: { c: 3 } }] }, 123)).toStrictEqual(
      undefined,
    );
  });

  test('{ a: [{ b: { c: 3 } }] }, true', () => {
    expect(getValueByPath({ a: [{ b: { c: 3 } }] }, true)).toStrictEqual(
      undefined,
    );
  });

  test('{ a: [{ b: { c: 3 } }] }, null', () => {
    expect(getValueByPath({ a: [{ b: { c: 3 } }] }, null)).toStrictEqual(
      undefined,
    );
  });

  test('{ a: [{ b: { c: 3 } }] }, undefined', () => {
    expect(getValueByPath({ a: [{ b: { c: 3 } }] }, undefined)).toStrictEqual(
      undefined,
    );
  });

  test('{ a: [{ b: { c: 3 } }] }, {}', () => {
    expect(getValueByPath({ a: [{ b: { c: 3 } }] }, {})).toStrictEqual(
      undefined,
    );
  });

  test("{ a: [{ b: { c: 3 } }] }, 'b')", () => {
    expect(getValueByPath({ a: [{ b: { c: 3 } }] }, 'b')).toStrictEqual(
      undefined,
    );
  });

  test("{ a: [{ b: { c: 3 } }] }, ['a', 'b']", () => {
    expect(getValueByPath({ a: [{ b: { c: 3 } }] }, ['a', 'b'])).toStrictEqual(
      undefined,
    );
  });
});
