module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    'no-console': 'off',
    'prettier/prettier': 'error',
  },
};
