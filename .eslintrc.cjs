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
    "sonarjs",
    "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    // sonarjs 3.x 面向 ESLint 9 的推荐规则集会带有不被 eslintrc 识别的字段（如 name），在 ESLint 8 需使用 legacy 版本
    "plugin:sonarjs/recommended-legacy",
    "plugin:prettier/recommended" // 启用 eslint-plugin-prettier，并将 Prettier 问题作为 ESLint 错误
  ],
  rules: {
    // Prefer TS-aware unused vars rule
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
    ],
    // Let Prettier handle formatting
    "prettier/prettier": "error",
    // 禁用仅为副作用而定义构造函数的 Sonar 规则，避免在装饰器/依赖注入场景误报
    "sonarjs/constructor-for-side-effects": "off"
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
  ignorePatterns: ["**/*.cjs", "vite.config.ts", "setupTests.ts"]
};
