/**
 * @description 复制内容
 * @author 程梦玲
 * @date 04/11/2022
 * @deport
 * @param {string} text 文本
 * @returns boolean
 */
export function useCopy(text: string) {
  try {
    let input = document.createElement('input')
    input.value = text
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    return true
  } catch (error) {
    return false
  }
}

export default {
  useCopy,
};