// import { convertEmpties } from '../../packages/js/dist/main';
import { convertEmpties } from '../../packages/js/src/convertEmpties';

test('值为空字符串的情况', () => {
  expect(convertEmpties({ name: '' }, { key: 'name' })).toStrictEqual({
    name: '-',
  });
});

test('值为undefined的情况', () => {
  expect(convertEmpties({ name: undefined }, { key: 'name' })).toStrictEqual({
    name: '-',
  });
});

test('值为null的情况', () => {
  expect(convertEmpties({ name: null }, { key: 'name' })).toStrictEqual({
    name: '-',
  });
});

test('值为false的情况', () => {
  expect(convertEmpties({ name: false }, { key: 'name' })).toStrictEqual({
    name: false,
  });
});

test('值为0的情况', () => {
  expect(convertEmpties({ name: 0 }, { key: 'name' })).toStrictEqual({
    name: 0,
  });
});

test('源数据为对象数组，指定键', () => {
  expect(
    convertEmpties([{ name: '' }, { name: 'Tom', age: '' }], { key: 'age' }),
  ).toStrictEqual([{ name: '' }, { name: 'Tom', age: '-' }]);
});

test('源数据为对象数组，指定多个键', () => {
  expect(
    convertEmpties([{ name: '' }, { name: 'Tom', age: '' }], {
      key: ['name', 'age'],
    }),
  ).toStrictEqual([{ name: '-' }, { name: 'Tom', age: '-' }]);
});

test('对象递归处理测试', () => {
  expect(convertEmpties({ name: { name: '' } }, { key: 'name' })).toStrictEqual(
    {
      name: { name: '-' },
    },
  );
});

test('源数据为null', () => {
  expect(convertEmpties(null, { key: 'name' })).toStrictEqual(null);
});

test('源数据为undefined', () => {
  expect(convertEmpties(undefined, { key: 'name' })).toStrictEqual(undefined);
});

test('源数据为false', () => {
  expect(convertEmpties(false as unknown as [], { key: 'name' })).toStrictEqual(
    false,
  );
});

test('源数据为0', () => {
  expect(convertEmpties(0 as unknown as [], { key: 'name' })).toStrictEqual(0);
});

test('源数据为字符串', () => {
  expect(convertEmpties('123' as unknown as [], { key: 'name' })).toStrictEqual(
    '123',
  );
});

test('指定replacer', () => {
  expect(
    convertEmpties({ name: '' }, { key: 'name', replacer: '--' }),
  ).toStrictEqual({
    name: '--',
  });
});

test('指定replacer为null', () => {
  expect(
    convertEmpties({ name: '' }, { key: 'name', replacer: null }),
  ).toStrictEqual({
    name: null,
  });
});

test('指定target为undefined', () => {
  expect(
    convertEmpties({ name: '' }, { key: 'name', target: ['undefined'] }),
  ).toStrictEqual({
    name: '',
  });
});

test('指定target为空数组', () => {
  expect(
    convertEmpties({ name: '' }, { key: 'name', target: [] }),
  ).toStrictEqual({ name: '' });
});

test('指定target', () => {
  expect(
    convertEmpties({ name: '123', age: '' }, { key: 'name', target: ['123'] }),
  ).toStrictEqual({ name: '-', age: '' });
});

test('replacer传入函数，动态替换', () => {
  expect(
    convertEmpties({ name: '' }, { key: 'name', replacer: () => 'xx' }),
  ).toStrictEqual({ name: 'xx' });
});

test('对象循环引用', () => {
  const circleData: any = { name: '' };
  circleData.other = circleData;
  const result: any = { name: '-' };
  result.other = result;
  expect(convertEmpties(circleData, { key: 'name' })).toStrictEqual(result);
});

test('控制对象递归层级数量', () => {
  const data = {
    name: '',
    l1: {
      name: '',
      l2: {
        name: '',
        l3: { name: '' },
      },
    },
  };
  const result = {
    name: '-',
    l1: {
      name: '-',
      l2: {
        name: '',
        l3: { name: '' },
      },
    },
  };
  expect(convertEmpties(data, { key: 'name', level: 2 })).toStrictEqual(result);
});

test('不指定key', () => {
  expect(convertEmpties({ name: '123', age: '' })).toStrictEqual({
    name: '123',
    age: '-',
  });
});

test('不指定key, undefined, null, ""替换值为null', () => {
  expect(
    convertEmpties({ name: '123', age: '' }, { replacer: null }),
  ).toStrictEqual({
    name: '123',
    age: null,
  });
});
