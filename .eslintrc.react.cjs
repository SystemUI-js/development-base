const baseConfig = require('./.eslintrc.cjs');

module.exports = {
  ...baseConfig,
  settings: {
    ...baseConfig.settings,
    react: { version: 'detect' }
  },
  plugins: [...baseConfig.plugins, 'react', 'react-hooks'],
  extends: [
    ...baseConfig.extends,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    ...baseConfig.rules,
    // React 17+ JSX transform
    'react/react-in-jsx-scope': 'off',
    // We use TypeScript for types
    'react/prop-types': 'off'
  }
}
