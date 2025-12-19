module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true }
  },
  plugins: [
    "@typescript-eslint",
    "jsx-a11y",
    "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and displays Prettier issues as ESLint errors
  ],
  rules: {
    // Prefer TS-aware unused vars rule
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
    ],
    // Let Prettier handle formatting
    "prettier/prettier": "error"
  },
  overrides: [
    {
      files: ["*.config.*", "*.cjs"],
      env: { node: true }
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        // Keep fast rules; type-aware rules can be enabled later if needed
      }
    }
  ],
  "ignorePatterns": ["**/*.cjs", "vite.config.ts", "setupTests.ts"]
};
