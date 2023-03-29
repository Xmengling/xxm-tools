/**
 * @description 导出excel（json数据）
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @param headerConfig 表头配置
 * @param dataList 表格数据
 * @param [filename='报表数据excel']
 * @returns {*}
 */
export function exportExcelJson(
  headerConfig: HEADER_CONFIG,
  dataList: OBJECT_DATA_CONFIG[],
  filename = '报表数据excel',
): void {
  if (!dataList || dataList.length === 0) {
    throw new Error('表格数据为空，不支持导出');
  }
  try {
    const header = [];
    const propList = [];
    // 处理表头
    Object.keys(headerConfig).forEach((key) => {
      header.push(key);
      propList.push(headerConfig[key]);
    });
    // 处理数据
    const data = [];
    dataList.forEach((dataItem) => {
      const signalList = [];
      propList.forEach((prop) => {
        signalList.push(dataItem[prop]);
      });
      data.push(signalList);
    });
    import('../utils/Export2Excel').then((excel) => {
      excel.export_json_to_excel({
        header,
        data,
        filename,
      });
    });
  } catch (error) {
    throw new Error(error);
  }
}

interface HEADER_CONFIG {
  [key: string]: string;
}

interface OBJECT_DATA_CONFIG {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default {
  exportExcelJson,
};
