# eslint-config 配置共享


[shareable-configs](https://eslint.org/docs/latest/developer-guide/shareable-configs)

可共享的配置只是导出配置对象的 npm 包。首先，像往常一样创建一个 Node.js 模块。确保模块名称以 开头 `eslint-config-`，例如 `eslint-config-myconfig` .

还支持npm范围模块 `@scope/eslint-config` ，例如 `@scope/eslint-config`或`@scope/eslint-config-myconfig`。

创建一个新index.js文件并导出一个包含您的设置的对象：

相关配置参考项目中

[.eslintrc.js](./.eslintrc.js)

如果是在monorepo项目中，想使用多个配置版本的eslint，可以配置 `root: true` eslint 将会作用在项目范围内

## eslint-ignore

[eslintignore](https://eslint.org/docs/latest/user-guide/configuring/ignoring-code)


一个工作目录只能用一个 `.eslintignore` 文件，所以如果需要在多个包中使用ignore，可以使用 `ignorePatterns`, 或者在package.json 中定义字段 `eslintIgnore`

```js
module.exports = {
  root: true,
  extends: [
    '@fostars/eslint-config/typescript'
  ],
  ignorePatterns: [
    'out/*'
  ]
}
```