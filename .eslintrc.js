// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    "amd": true,
    "es6": true,
    "node": false
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-undef": "off",
    'semi': 0,
    'camelcase': 0,
    'indent': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'space-before-function-paren': 0,
    'brace-style': 0,
    'no-new': 0,
    'new-cap': 0,
    'quotes': 0,
    "no-sequences": 0,
    "no-unused-expressions": 0,
    "one-var": 0,
    "no-return-assign": 0,
    "no-mixed-operators": 0,
    "no-use-before-define": 0,
    "no-proto": 0,
    "no-redeclare": 0,
    "no-cond-assign": 0,
    "eqeqeq": 0,
    "no-useless-escape": 0,
    "no-useless-call": 0,
    "no-extra-boolean-cast": 0,
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
  }
}
