const {FlatCompat} = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

module.exports = [
  {
    ignores: ['build/**', 'node_modules/**'],
  },
  ...compat.config({
    extends: ['plugin:react/recommended', 'google'],
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'no-var': 'error',
      'max-len': ['error', 80, {ignorePattern: 'd="([\\s\\S]*?)"'}],
      'comma-dangle': [
        'error',
        {
          arrays: 'only-multiline',
          objects: 'only-multiline',
        },
      ],
      'react/prop-types': 'off',
      'no-console': 'warn',
      'space-infix-ops': 'warn',
      'require-jsdoc': 'off',
      'valid-jsdoc': 'off',
    },
  }),
  {
    files: ['./src/content/*.js'],
    rules: {
      'max-len': ['warn', 500],
    },
  },
]
