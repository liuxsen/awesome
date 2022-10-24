module.exports = {
  root: true,
  extends: [
    '@fostars/eslint-config/typescript'
  ],
  env: {
    jest: true,
    node: true
  },
  rules: {
    // https://stackoverflow.com/questions/70642350/eslint-indent-rule-indents-decorated-members
    indent: ['error', 2, { ignoredNodes: ['PropertyDefinition'] }]
  },
  // Only one .eslintignore file can be used at a time, so .eslintignore files other than the one in the current working directory will not be used.
  ignorePatterns: [
    // https://eslint.org/docs/latest/user-guide/configuring/ignoring-code
    'dist/*'
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
