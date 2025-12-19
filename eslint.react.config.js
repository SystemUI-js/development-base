import baseConfig from './eslint.config.js';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const reactFlatRecommended =
  reactPlugin.configs.flat?.recommended ?? reactPlugin.configs.recommended;

const reactHooksFlat = {
  name: 'react-hooks/recommended',
  plugins: { 'react-hooks': reactHooks },
  rules: reactHooks.configs.recommended.rules
};

export default [
  ...baseConfig,
  {
    name: 'react/settings',
    settings: { react: { version: 'detect' } }
  },
  reactFlatRecommended,
  reactHooksFlat,
  {
    name: 'react/custom',
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }
  }
];
