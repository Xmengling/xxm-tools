const ora = require('ora');
const { getPackagesEntries } = require('./getPackagesEntries');
const { packingModule } = require('./basic');

build();

/**
 * 依次执行子包构建
 */
async function build() {
  const spinner = ora('开始构建...').start();
  const entries = getPackagesEntries();
  for (let i = 0; i < entries.length; i++) {
    const item = entries[i];
    const { name } = item;
    spinner.info(`正在构建模块[${name}]...`);
    try {
      await packingModule(item);
      spinner.succeed(`模块[${name}]构建成功`);
    } catch (err) {
      spinner.fail(`模块[${name}]构建失败`);
      console.error(err);
    }
  }
}
