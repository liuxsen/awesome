module.exports = {
  extends: [
    '../base/index.js',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'import'
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 0
  }
}
