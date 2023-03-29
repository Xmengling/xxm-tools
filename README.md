# hub-utils

## 常用脚本
```
yarn bootstrap // 初始化
yarn do:publish // 发布
```


## deno

### 1、安装

```
npm -g ts-node
```

### 2、vscode 配置

```
{
    "name": "Current TS File",
    "type": "node",
    "request": "launch",
    "program": "${workspaceRoot}/node_modules/ts-node/dist/bin.js",
    "args": [
        "${relativeFile}"
    ],
    "cwd": "${workspaceRoot}",
    "protocol": "inspector"
}
```

```
deno run --inspect-brk -A 当前文件
```

## document this
ctrl + alt + d 两次

## leran常用指令
```
# 将 module-1 的包添加到以“prefix-”为前缀文件夹中的包中
lerna add module-1 packages/prefix-*

# 将 module-1 安装到 module-2
lerna add module-1 --scope=module-2

# 将 module-1 安装到 module-2 的 devDependencies
lerna add module-1 --scope=module-2 --dev

# 将 module-1 安装到 module-2 的 peerDependencies
lerna add module-1 --scope=module-2 --peer

# 将 module-1 安装到除了 module-1 的所有模块
lerna add module-1

# 在所有模块中安装 babel-core
lerna add babel-core
```

## yarn woekspaces常用指令
```
yarn workspace <workspace_name> <command> // 对子包执行命令

yarn add mathjs --dev -W // 根目录安装
```
```
hub-utils
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.js
├─ .vscode
│  └─ launch.json
├─ babel.config.json
├─ lerna.json
├─ package.json
├─ README.md
├─ tsconfig.json
├─ webpack.config.js
└─ packages
   ├─ all
   │  ├─ dist
   │  │  ├─ main.d.ts
   │  │  └─ main.js
   │  └─ lib
   │     └─ all.ts
   └─ number
      ├─ dist
      │  ├─ main.d.ts
      │  └─ main.js
      ├─ lib
      │  └─ number.ts
      ├─ package.json
      ├─ README.md
      ├─ src
      │  └─ getTime.ts
      └─ tsconfig.json
```

## 文档
https://www.yuque.com/xiaoxiaomeng-5n4tl/fwc6ga