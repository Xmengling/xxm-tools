import { toFixed } from '../../number/src/toFixed';

/**
 * 解析文件大小
 * @param {number}  待计算大小
 * @return {boolean}
 */
function fileSize(size: number): string {
  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;
  if (size < MB) {
    return `${toFixed((size / KB).toFixed(5))}KB`;
  }
  if (size < GB) {
    return `${toFixed((size / MB).toFixed(5))}MB`;
  }
  return `${toFixed((size / GB).toFixed(5))}GB`;
}

export default fileSize;
