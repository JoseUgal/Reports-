const RULES = {
  WARN: 'warn',
  OFF: 'off',
  ERROR: 'error'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'import/no-anonymous-default-export': RULES.OFF,
    'react/display-name': RULES.OFF,
    'no-use-before-define': RULES.OFF,
    'no-unused-vars': RULES.WARN,
    'react/prop-types': RULES.OFF
  }
}
