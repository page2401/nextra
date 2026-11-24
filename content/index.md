---
title: "00. Nextra v4 基准总览"
description: "锁定版本 nextra@4.6.1 + nextra-theme-docs@4.6.1 · Next.js 15 App Router + _meta.js + KaTeX + Mermaid 11 + Pagefind 实测"
---

# Nextra v4 静态网站生成基准实测

本站点由独立仓库 [`page2401/nextra`](https://github.com/page2401/nextra) 构建，基于主仓库 `page2401.github.io/docs/` 的标准 GFM 原始母版派生适配而来，用于量化 **Nextra v4 (`4.6.1`)** 在 Next.js App Router（RSC）架构、`<Callout>` 组件与 GFM Alerts 双轨渲染、内置 Mermaid 图表、内置 KaTeX 公式以及 `_meta.js` 编程式导航上的真实工程表现。

## 五大基准测试章节导航

| 章节路径 | 测试维度 | Nextra v4 (`4.6.1`) 核心实测特征 |
| :--- | :--- | :--- |
| [`01. 专属标注与元数据`](/01-annotations/) | 专属标注与 MDX 3 边界 | 内置 `<Callout>` JSX 组件；`withGitHubAlert` 要求 `> [!NOTE]` 后必须跟空引用行 `>` 才转换，母版紧邻写法会退化为普通引用；`format: 'detect'` 按后缀区分 `.md` 与 `.mdx` |
| [`02. 流程图与时序图`](/02-diagrams/) | 流程图与时序图 | 内置 `@theguild/remark-mermaid@0.3.0`（锁在 `mermaid@11.17.2`），零插件自动接管代码块并随明暗主题重绘 |
| [`03. 数学公式排版`](/03-math/) | 数学公式排版 | `nextra({ latex: true })` 一键启用 `remark-math@6` + `rehype-katex@7`，配合本地打包 `katex@0.16.47` 样式与字体（零外部 CDN 请求） |
| [`04. 目录结构与路由取舍`](/04-directory/) | 目录结构与 `_meta.js` | `content/` 内容目录 + `app/[[...mdxPath]]/page.jsx` 路由解耦；废弃旧版 `_meta.json`，全面改用 Zod 强校验 `_meta.js` 编排中文分组与 `asIndexPage` |

## 子模块精确锁定版本档案

| 依赖模块 | 精确锁定版本 | 在本子站中的职责 |
| :--- | :--- | :--- |
| `nextra` | `4.6.1` | Next.js MDX 编译管线、PageMap 生成器与内置 Remark/Rehype 插件集 |
| `nextra-theme-docs` | `4.6.1` | Nextra v4 官方文档主题（基于 App Router RSC 与 Tailwind v4 预编译样式） |
| `next` | `15.5.29` | Next.js App Router 核心框架（`output: 'export'` 纯静态导出模式） |
| `react` / `react-dom` | `19.3.1` | React 19 服务端组件（RSC）与客户端交互运行时 |
| `zod` | `4.1.12` | 通过 `overrides` 锁定（规避 `zod@4.6+` 收紧 `z.custom` 缺省键校验导致 `LayoutPropsSchema` 报错） |
| `katex` | `0.16.47` | 本地打包数学公式 CSS 与 Webfont 字体资源（匹配 `nextra` 内部 `^0.16.21` 依赖区间） |
| `mermaid` | `11.17.2` | 流程图、时序图与状态机渲染引擎（受内置 `@theguild/remark-mermaid@0.3.0` 约束锁定 v11） |
| `pagefind` | `1.6.0` | 构建后扫描 `out/**/*.html` 生成静态全文检索索引 `out/_pagefind/` |
