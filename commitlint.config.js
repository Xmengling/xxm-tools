module.exports = {
  extends: ['@commitlint/config-angular'],
  ignores: [
    (msg) => {
      const reg = /^Publish/; // 发布
      return reg.test(msg);
    },
  ],
};
