module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 避免与pretter冲突
  ],
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['UPPER_CASE'], // 接口名字强制使用UPPER_CASE模式
          },
        ],
        '@typescript-eslint/no-use-before-define': 'off',
        'import/no-named-as-default': 'off',
      },
    },
  ],
  parserOptions: {
    project: 'tsconfig.base.json',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': 'off',
    'no-lonely-if': 'off',
  },
};

// pritter配置
// "[typescript]": {
// 	"editor.defaultFormatter": "esbenp.prettier-vscode"
// },

// 粘贴时格式化代码
// "editor.formatOnPaste": true,
// 保存时格式化代码
// "editor.formatOnSave": true,

//vetur
// {
//     "vetur.format.defaultFormatter.html": "prettyhtml",
//     "vetur.format.defaultFormatter.css": "prettier",
//     "vetur.format.defaultFormatter.postcss": "prettier",
//     "vetur.format.defaultFormatter.scss": "prettier",
//     "vetur.format.defaultFormatter.less": "prettier",
//     "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
//     "vetur.format.defaultFormatter.js": "prettier",
//     "vetur.format.defaultFormatter.ts": "prettier"
//   }
