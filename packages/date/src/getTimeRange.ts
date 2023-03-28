import * as dayjs from 'dayjs';

/**
 * @description 获取时间范围
 * @author 陈浩林
 * @date 01/12/2021
 * @deport
 * @param {Object} params
 * @param {string} params timeType 时间类型
 * @param {string} [params.format='YYYY-MM-DD HH:mm:ss'] 选填，格式化模板，默认为YYYY-MM-DD HH:mm:ss
 * @returns {Array} 包含有开始时间和结束时间的数组123456
 */
export function getTimeRange({
  timeType,
  format = 'YYYY-MM-DD HH:mm:ss',
}: TIME_PARAM) {
  const { unit, mutation, stride, preFormatUnit, noPreFormat } =
    getTimeConfig(timeType);
  let startTime = dayjs();
  let endTime = dayjs();
  // 进行运算操作
  if (mutation) {
    startTime = startTime[mutation](stride[0], unit);
    endTime = endTime[mutation](stride[1], unit);
  }
  // 进行预格式化操作
  if (!noPreFormat) {
    // 若无指定预格式化的单位，则使用对应timeType的默认单位
    startTime = startTime.startOf(preFormatUnit || unit);
    endTime = endTime.endOf(preFormatUnit || unit);
  }
  // 最后进行格式化，无指定则使用默认格式（见入参解构赋值）
  const start = startTime.format(format);
  const end = endTime.format(format);
  return [start, end];
}

/**
 * @description 获取时间类型对应设置内容
 * @author 陈浩林
 * @date 01/12/2021
 * @param {string} timeType 时间类型
 * @throws 当所传入时间类型不存在时会抛出错误
 * @returns {{unit, type, mutation, stride, preFormatUnit, noPreFormat }} 时间类型设置内容
 */
function getTimeConfig(timeType: string) {
  let unit: Unit;
  let config: CONFIG_ITEM;
  // 遍历timeConfig
  Object.entries(timeConfig).forEach(([key, value]) => {
    // 匹配timeType
    const result = value.find((item) => item.type === timeType);
    if (result) {
      config = result;
      unit = key as Unit;
    }
  });
  if (config) {
    return { unit, ...config };
  }
  throw new Error('所传入时间类型不存在');
}

// 时间类型配置表
const timeConfig: TIME_CONFIG = {
  hour: [
    {
      type: 'past1Hour',
      mutation: 'subtract',
      stride: [1, 0],
      noPreFormat: true,
    },
    {
      type: 'past12Hours',
      mutation: 'subtract',
      stride: [12, 0],
      noPreFormat: true,
    },
  ],
  day: [
    { type: 'today' },
    { type: 'yesterday', mutation: 'subtract', stride: [1, 1] },
    { type: 'past7Days', mutation: 'subtract', stride: [7, 1] },
    { type: 'past15Days', mutation: 'subtract', stride: [15, 1] },
    { type: 'past30Days', mutation: 'subtract', stride: [30, 1] },
  ],
  week: [
    { type: 'thisWeek' },
    { type: 'lastWeek', mutation: 'subtract', stride: [1, 1] },
  ],
  month: [
    { type: 'thisMonth' },
    { type: 'lastMonth', mutation: 'subtract', stride: [1, 1] },
    {
      type: 'past1Month',
      mutation: 'subtract',
      stride: [1, 0],
      preFormatUnit: 'day',
    },
    {
      type: 'past3Months',
      mutation: 'subtract',
      stride: [3, 0],
      preFormatUnit: 'day',
    },
  ],
  year: [
    { type: 'thisYear' },
    { type: 'lastYear', mutation: 'subtract', stride: [1, 1] },
  ],
};

// 入参
interface TIME_PARAM {
  timeType: TimeType;
  format?: string;
}

// 时间类型设置汇总（按单位划分）
type TIME_CONFIG = {
  [propName in Unit]: CONFIG_ITEM[];
};

// 时间类型的设置
interface CONFIG_ITEM {
  type: TimeType;
  mutation?: string;
  stride?: number[];
  preFormatUnit?: Unit;
  noPreFormat?: boolean;
}

// 时间类型的基础单位
type Unit = 'hour' | 'day' | 'week' | 'month' | 'year';

// 时间类型
export type TimeType =
  | 'past1Hour'
  | 'past12Hours'
  | 'today'
  | 'yesterday'
  | 'past7Days'
  | 'past15Days'
  | 'past30Days'
  | 'thisWeek'
  | 'lastWeek'
  | 'thisMonth'
  | 'lastMonth'
  | 'past1Month'
  | 'past3Months'
  | 'thisYear'
  | 'lastYear';

export default {
  getTimeRange,
};
