# eslint-config

## 什么是eslint

ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。

- ESLint 使用 Espree 解析 JavaScript。
- ESLint 使用 AST 去分析代码中的模式
- ESLint 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则。

为了在编辑器中实时提示错误信息，强烈建议安装[VSCode ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 如何使用eslint

1. npm install eslint --save-dev
2. npx eslint --init
3. npx eslint yourfile.js

eslint init 之后会新建一个 .eslintrc.js 文件

eg:

```js
module.exports = {
  root: true,
  extends: [
    'eslint:recommend'
  ],
  rules: {

  }
}
```

可以在rules中自定义自己需要的属性

extends

eslint 内置了所有的规则（默认都是关闭的），在extends中添加 `eslint:recommend` 会将常用的规则打开；也可以使用别人分享的eslint规则，或者分享自己的eslint规则详见 `可共享的eslint`

## eslint 规则都是可配置的

可以通过两种方式来配置eslint
1. 使用javascript注释，把配置信息直接写入到代码中
2. 使用js、json、yml、格式的文件，在项目目录中新建`.eslintrc.js` `.eslintrc.json` `.eslintrc.yml` 文件，或者在package.json中配置eslint 规则，eslint会读取配置文件

注意：js注释可以覆盖配置文件的规则

## env 指定环境变量

列举常用的环境变量

browser - 浏览器环境中的全局变量。
node - Node.js 全局变量和 Node.js 作用域。
commonjs - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
es6 - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
mocha - 添加所有的 Mocha 测试全局变量。
jest - Jest 全局变量。

```js
// .eslintrc.js
...
env: {
  "browser": true,
  "node": true
}
...
// package.json
...
"eslintConfig": {
  "env": {
    "browser": true,
    "node": true
  }
}
...
```

全局变量

当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量。

```js
/* global var1, var2 */
/* global var1:writable, var2:writable */
```

```js
"globals": {
  "var1": "writable", // 可读写
  "var2": "readonly" // 不可写
}
```

### parser

### plugin



## 可共享的eslint
