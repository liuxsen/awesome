module.exports = {
  root: true,
  extends: [
    '@fostars/eslint-config/typescript'
  ],
  // Only one .eslintignore file can be used at a time, so .eslintignore files other than the one in the current working directory will not be used.
  ignorePatterns: [
    // https://eslint.org/docs/latest/user-guide/configuring/ignoring-code
    'out/*'
  ]
}
