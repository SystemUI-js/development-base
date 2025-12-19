import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import sonarjs from 'eslint-plugin-sonarjs';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

const baseIgnores = ['**/*.cjs', '**/.history/**', 'vite.config.ts', 'setupTests.ts'];

const jsxA11yFlat = {
  name: 'jsx-a11y/recommended',
  plugins: { 'jsx-a11y': jsxA11y },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: { jsx: true }
    }
  },
  rules: jsxA11y.configs.recommended.rules
};

export default [
  {
    name: 'base/ignores',
    ignores: baseIgnores
  },
  {
    name: 'base/language',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      }
    }
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  jsxA11yFlat,
  sonarjs.configs.recommended,
  {
    name: 'project/custom',
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      'prettier/prettier': 'error',
      'sonarjs/constructor-for-side-effects': 'off'
    }
  },
  eslintConfigPrettier
];
