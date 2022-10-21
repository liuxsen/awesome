module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    './stadard.js',
    'plugin:import/recommended' // https://www.npmjs.com/package/eslint-plugin-import
  ],
  rules: {
    'no-empty': 0,
    'no-new': 0,
    'n/handle-callback-err': 1,
    'comma-spacing': ['error', { before: false, after: true }],
    'prefer-const': 'off'
  }
}
