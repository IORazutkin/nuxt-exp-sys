module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:jsdoc/recommended'
  ],
  plugins: [
    'jsdoc'
  ],
  rules: {
    'import/order': 'warn',
    'vue/require-component-is': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    'vue/no-v-html': 'off'
  }
}
