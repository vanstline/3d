# IMP 3DInteractive

> OMG报警信息收集系统,使用 Typescript & UMI 框架

## 结构

``` tree
├── README.md
├── config                  // umi框架下约定的项目配置目录
│   ├── config.local.ts     // 不同环境的config
│   ├── config.prod.ts      
│   ├── config.ts           // 主配置文件
│   └── utils.ts            // 获取环境变量文件路径
├── package.json
├── public
├── src
│   ├── api                 // 请求相关文件存放
│   ├── assets              // 资源目录
│   ├── components          // 公共组件目录
│   ├── env                 // 环境目录
│   ├── global.less         
│   ├── layouts
│   ├── models              // 公共状态目录
│   ├── pages
│   └── typings.d.ts        // 项目内类型定义
├── tsconfig.json
```

## 启动

```shell
# 安装
yarn install

# 清理依赖和缓存
yarn clean

# 清理缓存
yarn clean:cache

# 启动
yarn start

# 编译(区分环境)
# 本地server
yarn start # 本地server
yarn analyz # 查看打包后文件大小的map信息
yarn dev:autopush # 开发
yarn dev:staging # 测试
yarn dev:preprod # 预生产
yarn dev:prod # 生产

# 生成产物
yarn build:local # 本地
yarn build:autopush # 开发
yarn build:staging # 测试
yarn build:preprod # 预生产
yarn build:prod # 生产


```

## 方案

### 环境

使用`cross-env`库设置环境变量,命名规则为:`env-环境名称.js`形式,存放在`src/env`目录下.

### 数据流

使用`@umijs/plugin-model`方案,在models文件里定义各个模块所需的model

### 路由

使用 `umi`的约定式路由方案,然后权限部分待定使用自定义组件的方式来跳转路由

### 布局

使用`@umijs/plugin-layout`插件,布局分为两个部分.一个是普通路由下,需要侧边栏的情况下,走`PrimaryLayout`组件,如果是`403`,`404`的情况下,走`PublicLayout`组件.

### 插件

插件的使用主要是规则上的约束,主要是下面几个:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): 配合ESLint做文件检测
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint): 配合StyleLint做规则检测
- [Parser JSDoc](https://marketplace.visualstudio.com/items?itemName=winkchen.parser-jsdoc): 添加注释
