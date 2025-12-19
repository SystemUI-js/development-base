# Changelog

本项目的所有重要变更都将记录在此文件中。

## [0.0.10] - 2025-12-19
### 新增
- eslint 优化 sonarjs 规则

## [0.0.9] - 2025-12-19
### 新增
- eslint 新增 sonarjs。

## [0.0.8] - 2025-12-19
### 已修复
- 修正 `.eslintrc.cjs` 中使用 `ignorePatterns` 替代 `ignores`，避免 ESLint 配置报错。

## [0.0.7] - 2025-12-19
### 已更改
- 修改 tsconfig.json，增加 exclude，排除 vite.config.ts

## [0.0.6] - 2025-12-19
### 已更改
- 升级 `package.json` 到 0.0.6 版本，以便在发布 0.0.5 版本后开始下一轮开发迭代。

## [0.0.5] - 2025-12-19
### 新增
- 初始化更新日志文件以跟踪发布版本。
- Agent 检查清单（[AGEMTS.md](AGEMTS.md)）记录版本升级和更新日志工作流程。
- eslintrc 增加忽略文件：setupTests.ts 和 vite.config.ts
