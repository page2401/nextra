---
title: "嵌套子页 B：多级子目录与侧边栏同步机制"
---

# 嵌套子页 B：多级子目录与侧边栏同步机制

Nextra v4 通过 `getPageMap()` 自动扫描 `content/` 下的全部 `.md`/`.mdx` 文件，因此新建文档即使暂未写入 `_meta.js` 也会自动按字母序出现在侧边栏末尾（不会沦为无入口“孤岛页”）；而一旦需要自定义分组中文标题（如将 `nested` 显示为“嵌套子目录实测 (`_meta.js`)”）或固定排序，则需在对应目录补充 `_meta.js`（也可选择在 `app/_meta.global.js` 中单文件集中维护全站导航树，但 Nextra 明确禁止将 `_meta.global.js` 与局部 `_meta.js` 混用）。

- [返回上一篇：《嵌套子页 A：排序前缀与 URL 纯净度权衡》](/04-directory/nested/01-order-and-url/)
- [返回《04. 目录结构与路由取舍》](/04-directory/)
