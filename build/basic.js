const execSync = require('child_process').execSync;
const pathResolve = require('path').resolve;
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

/**
 * 构建模块
 * @param {object} config
 * @param {object} options
 */
 function packingModule({ path, entry }, options) {
  const config = getWebpackConfig(path, entry, options);
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        reject(err);
        console.log(
          stats.toString({
            chunks: false, // 使构建过程更静默无输出
            colors: true, // 在控制台展示颜色
          }),
        );
        return;
      }
      resolve();
    });
  });
}
/**
 * 获取模块构建配置
 * @param {string} path 模块路径
 * @param {string} entry 模块入口
 * @param {object} options
 * @returns {object} config
 */
function getWebpackConfig(path, entry, options = {}) {
  const config = merge(commonConfig, {
    entry,
    output: {
      path: pathResolve(path, 'dist'),
      filename: '[name].js',
      library: {
        type: 'umd',
        name: 'all',
      },
      globalObject: 'this',
    },
  }, options);
  return config;
}
/**
 * 清除子包dist目录
 * @param {string} pkgPath 子包目录
 * @param {string | string[]} filename dist目录下的具体文件
 */
function cleanDist(pkgPath, filename) {
  let target = pathResolve(pkgPath, 'dist');
  if (typeof filename === 'string') {
    filename = [filename];
  }
  if (filename) {
    if (!Array.isArray(filename)) {
      throw new TypeError('[filename]参数有误')
    }
    target = filename.map(file => pathResolve(target, file)).join(' ')
  }
  try {
    const cmd = `rimraf ${target}`;
    execSync(cmd);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  packingModule,
  cleanDist
}
