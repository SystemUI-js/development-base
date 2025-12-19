# Changelog

本项目的所有重要变更都将记录在此文件中。

## [0.1.1] - 2025-12-19
### 已更改
- eslint 配置新增项目忽略目录（dist、coverage、node_modules、playwright-report、test-results）。
- 为测试文件注入 jest 全局变量，避免测试环境报未定义。

## [0.1.0] - 2025-12-19
### 已更改
- 升级 ESLint 至 9.39.2 并迁移为 Flat Config，提供基础与 React 专用配置。
- 更新 typescript-eslint 8.50.0、Prettier 3.7.4 及相关插件，新增 globals 以补全内置全局变量。
- 扩展忽略列表（含 `.history` 目录），`yarn lint` 与 `yarn audit --level moderate` 均已通过。

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
