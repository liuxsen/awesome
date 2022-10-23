module.exports = {
  root: true,
  extends: [
    '@fostars/eslint-config/typescript'
  ],
  // Only one .eslintignore file can be used at a time, so .eslintignore files other than the one in the current working directory will not be used.
  ignorePatterns: [
    // https://eslint.org/docs/latest/user-guide/configuring/ignoring-code
    'out/*'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    // 为了读取tsconfig.json 文件，适配 ts 的 pathmaping
    'import/resolver': {
      typescript: {
        project: '/Users/liujianhui/apps/awesome/packages/demo/ts-dev/tsconfig.json'
      }
    }
  }
}
