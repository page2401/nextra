---
title: "04. 目录结构与路由取舍"
description: "实测 Nextra v4 的 content/ + App Router Catch-All 解耦架构、asIndexPage 目录入口与 _meta.js 编程式导航优劣。"
asIndexPage: true
---

# 04. 目录结构与路由取舍（Nextra v4 `content/` + `_meta.js` 模式）

本章节基于母版 `docs/04-directory/` 多级嵌套子目录 `nested/`，实测 **Nextra v4 (`4.6.1`)** 从 Pages Router 演进至 Next.js App Router 后的目录隔离、`_meta.js` 编程式编排与静态导出路由取舍：

1. **`content/` 独立内容树 + `app/[[...mdxPath]]/page.jsx` 动态捕获**：Nextra v4 支持将所有 Markdown/MDX 文档收敛在根目录 `content/` 下，由单一可选全捕获路由 `importPage()` 统一渲染。这既避免了根 `README.md` 被误编译，又无需在每个文档子目录重复创建 `app/.../page.mdx`。
2. **`_meta.js` 编程式导航与 Zod 强校验（淘汰 `_meta.json`）**：Nextra v4 扫描器仅识别 `_meta.{js,jsx,ts,tsx}`（旧版 `_meta.json` 已彻底移除）。各层 `_meta.js` 可精确控制侧边栏排序、将英文目录 `nested` 映射为中文分组标题，但若 `_meta.js` 中残留不存在的页面键名，构建期 Zod / `normalizePageMap` 会立即抛出校验错误中断编译；配合当前页 Frontmatter 的 `asIndexPage: true`，可将目录节点本身直接绑定为章节导览页（注意开启 `asIndexPage: true` 后，同级 `_meta.js` 中不可再重复声明 `index` 键）。
3. **`trailingSlash: true` 静态导出下的内部链接路径取舍**：部署至 GitHub Pages 子路径时需开启 `output: 'export'` 与 `trailingSlash: true`。此时页面 URL 以 `/` 结尾（如 `/nextra/04-directory/nested/01-order-and-url/`），且内置 `remarkLinkRewrite` 仅剥离 `.mdx?` 后缀而不改写 `../index.md`，因此内部互链推荐使用以 `/` 开头的站点根相对路径（由 Nextra `<Link>` 自动拼接 `basePath`），而非离线 `.md` 相对路径。

## 嵌套子文档实测入口

- [进入子文档 A：排序前缀与 URL 纯净度权衡](/04-directory/nested/01-order-and-url/)
- [进入子文档 B：多级子目录与侧边栏同步机制](/04-directory/nested/02-sidebar-sync/)
