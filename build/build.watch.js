/**
 * 监听某个子包的变动并自动构建
 * 用于开发场景下配合jest测试
 */
const { watch } = require('fs');
const ora = require('ora');
const inquirer = require('inquirer');
const { getPackagesEntries } = require('./getPackagesEntries');
const { packingModule, cleanDist } = require('./basic');
let spinner;

main();

async function main() {
  const entries = getPackagesEntries();
  const { entry } = await inquirer.prompt({
    type: 'list',
    name: 'entry',
    message: '选择待监听的包',
    choices: entries.map((item) => {
      return { name: item.name, value: item };
    }),
  })
  spinner = ora('开始监听构建...').start();
  const doBuild = builder(entry);
  await doBuild();
  doWatch(entry, doBuild);
}

/**
 * 获取子包构建器 含防抖
 * @param {object} entry 
 * @returns {function} 子包构建器
 */
function builder(entry) {
  let timer = null;
  return () => {
    if (timer) clearTimeout(timer);
    return new Promise(resolve => {
      timer = setTimeout(async () => {
        const { name, path } = entry;
        spinner.info(`正在构建模块[${name}]...`);
        cleanDist(path);
        try {
          await packingModule(entry, {
            devtool: 'eval',
          });
          cleanDist(path, 'main.d.ts');
          spinner.succeed(`模块[${name}]构建成功`);
        } catch (err) {
          spinner.fail(`模块[${name}]构建失败`);
          console.error(err);
        }
        timer = null;
        resolve();
      }, 500);
    })
  }
}
/**
 * 监听子包文件改变
 * @param {object} entry 子包入口数据
 * @param {function} doBuild 执行构建更新
 */
function doWatch(entry, doBuild) {
  const { name, path } = entry;
  watch(path, {
    recursive: true,
  }, async (eventType, filename) => {
    if (!filename) return;
    if (checkIgnore(filename)) return;
    await doBuild();
    spinner.info(`正在监听模块[${name}]...`);
  })
  spinner.info(`正在监听模块[${name}]...`);
}
/**
 * 监听忽略
 */
const WATCH_IGNORE = [
  'node_modules',
  'dist',
  'package.json',
  'README.md'
];
function checkIgnore(filename) {
  return  WATCH_IGNORE.some(text => filename.includes(text));
}
