/**
 * @description 复制内容
 * @author XMengling
 * @date 03/29/2023
 * @deport
 * @param {string} text 文本
 * @returns boolean
 */
export function useCopy(text: string) {
  try {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    return true;
  } catch (error) {
    return false;
  }
}

console.log('useCopy', useCopy('123'));

export default {
  useCopy,
};
