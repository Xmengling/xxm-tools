/*
 * @Author: c28381 cheng.mengling@h3c.com
 * @Date: 2023-03-27 16:40:07
 * @LastEditors: c28381 cheng.mengling@h3c.com
 * @LastEditTime: 2023-03-31 11:47:01
 * @FilePath: \xxm-tools\packages\js\src\exportExcelJson.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    // 处理表头
    const header = Object.keys(headerConfig);
    const propList = Object.values(headerConfig);

    // 处理数据
    const data = dataList.map((dataItem) => {
      return propList.map((prop) => dataItem[prop]);
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
