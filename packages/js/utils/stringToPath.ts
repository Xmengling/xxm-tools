const charCodeOfDot = '.'.charCodeAt(0);
const reEscapeChar = /\\(\\)?/g;
// 匹配属性名 从lodash迁移而来
const rePropName = RegExp(
  // Match anything that isn't a dot or bracket.
  '[^.[\\]]+' +
    '|' +
    // Or match property names within brackets.
    '\\[(?:' +
    // Match a non-string expression.
    '([^"\'][^[]*)' +
    '|' +
    // Or match strings (supports escaping characters).
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' +
    '|' +
    // Or match "" as the space between consecutive dots or empty brackets.
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))',
  'g',
);

/**
 * @description 解析属性访问路径`string`，输出为单个层级路径的数组
 * @from lodash
 * @author 袁绍宏
 * @date 2021/11/30
 * @param {string} string 待解析路径字符串
 * @returns {Array} 单个层级路径的数组
 */
export function stringToPath(string: string): string[] {
  const result: string[] = [];
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push('');
  }
  string.replace(rePropName, (match, expression, quote, subString) => {
    let key = match;
    if (quote) {
      key = subString.replace(reEscapeChar, '$1');
    } else if (expression) {
      key = expression.trim();
    }
    result.push(key);
    return '';
  });
  return result;
}

export default stringToPath;
