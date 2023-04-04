/**
 * @description 获取device类型
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @returns {string} 类型字符串
 */
import Fingerprint2 from 'fingerprintjs2';

export function getFingerprint() {
  return new Promise<string>((resolve, reject) => {
    Fingerprint2.get(function (components) {
      const values = components.map(function (component, index) {
        if (index === 0) {
          // 把微信浏览器里UA的wifi或4G等网络替换成空,不然切换网络会ID不一样
          return component.value.replace(/\bNetType\/\w+\b/, '');
        }
        return component.value;
      });
      // 生成最终id deviceId
      const deviceId = Fingerprint2.x64hash128(values.join(''), 31);
      resolve(deviceId);
    });
  });
}

export default {
  getFingerprint,
};
