const fs = require('fs');
const path = require('path');

const PACKAGES_PATH = path.resolve(__dirname, '../packages');

/**
 * 获取子包入口信息
 * @returns {[{ name: string, path: string, entry: string }]} 入口信息
 */
function getPackagesEntries() {
  const packagesPath = path.resolve(__dirname, '../packages');
  const folders = fs.readdirSync(packagesPath);
  const libs = folders.map((pkgName) => {
    const pkgPath = path.resolve(packagesPath, pkgName);
    const libFileName = `${pkgName}.ts`;
    const entry = path.resolve(pkgPath, 'lib', libFileName);
    return {
      name: pkgName,
      path: pkgPath,
      entry,
    };
  });
  return libs;
}
/**
 * 获取子包入口信息
 * @param {string} pkgName 包名称
 * @returns {[{ name: string, path: string, entry: string }]} 入口信息
 */
function getPackageEntry(pkgName) {
  const pkgPath = path.resolve(PACKAGES_PATH, pkgName);
  const libFileName = `${pkgName}.ts`;
  const entry = path.resolve(pkgPath, 'lib', libFileName);
  return {
    name: pkgName,
    path: pkgPath,
    entry,
  };
}
module.exports = {
  getPackagesEntries,
  getPackageEntry,
};
