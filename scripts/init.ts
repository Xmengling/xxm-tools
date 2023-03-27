import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const gitHooksPath = resolve(__dirname, '../.git/hooks');

init();

function init() {
  const HOOK_COMMIT_MSG = 'commit-msg';
  if (hookCheck(HOOK_COMMIT_MSG)) return;
  hookInstall(HOOK_COMMIT_MSG);
}
/**
 * 检测当前是否存在指定的git hook
 * @param hook hook名称
 * @returns {boolean}
 */
function hookCheck(hook: string) {
  const dirDetail = readdirSync(gitHooksPath);
  return dirDetail.includes(hook);
}
/**
 * 写入git hook
 * @param hook hook名称
 */
function hookInstall(hook: string) {
  const content = readFileSync(resolve(__dirname, hook));
  const hookPath = resolve(gitHooksPath, hook);
  writeFileSync(hookPath, content);
}
