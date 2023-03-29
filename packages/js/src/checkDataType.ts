// 获取数据类型
function checkDataType<T>(data: T): string;
// 判断数据类型
function checkDataType<T>(data: T, checkType: string): boolean;

/**
 * @description 判断或获取数据类型
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @param { any } data 要进行判断的数据必传
 * @param { string } checkType 指定判断的数据类型，若不传则为获取数据类型
 * @returns { Boolean | String } 1.判断数据类型时，返回true/false； 2.获取数据类型时，返回小写的数据类型字符串
 */
function checkDataType<T>(data: T, checkType = ''): boolean | string {
  // 先获取数据类型
  const dataType = (
    typeof data !== 'object'
      ? typeof data
      : Object.prototype.toString.call(data).slice(8, -1)
  ).toLowerCase() as string;

  // 判断是否为指定的类型时，返回布尔值
  if (checkType) {
    return checkType.toString().toLowerCase() === dataType;
  }
  // 获取数据的类型时，返回类型字符串
  return dataType;
}

export { checkDataType };
export default checkDataType;
