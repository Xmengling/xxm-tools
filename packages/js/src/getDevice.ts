/**
 * @description 获取device类型
 * @author XMengling
 * @date 03/29/2023
 * @export
 * @returns {string} 类型字符串
 */
export function getDevice(): string {
  const UA = navigator.userAgent;
  const sUA = UA.toLowerCase();
  const pf = navigator.platform;
  const android = UA.match(/(Android);?[\s/]+([\d.]+)?/);
  const ipad = UA.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = UA.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && UA.match(/(iPhone\sOS)\s([\d_]+)/);

  // Windows
  const isWin =
    (sUA.indexOf('win32') > -1 ||
      sUA.indexOf('wow32') > -1 ||
      sUA.indexOf('win64') > -1 ||
      sUA.indexOf('wow64') > -1 ||
      sUA.indexOf('windows') > -1) &&
    (pf === 'Win32' || pf === 'Windows');
  if (isWin) {
    return 'windows';
  }

  // Linux
  const isLinux = String(pf).indexOf('Linux') > -1;
  if (isLinux) {
    return 'linux';
  }

  // Android
  if (android || sUA.indexOf('Adr') > -1) {
    return 'android';
  }

  // iOS
  if (iphone && !ipod) {
    return 'iphone';
  }
  if (ipad) {
    return 'ipad';
  }
  if (ipod) {
    return 'ipod';
  }

  // MAC
  const macPf = ['Mac68K', 'MacPPC', 'Macintosh', 'MacIntel'];
  const isMac = /macintosh|mac os x/i.test(UA);
  if (isMac || macPf.includes(pf)) {
    return 'mac';
  }

  return 'unknown';
}

export default {
  getDevice,
};
