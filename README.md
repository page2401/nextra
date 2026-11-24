# page2401/nextra

独立静态站点对比子模块 —— **Nextra v4 (`4.6.1`)**。

- **线上预览地址**：`https://page.2401.xyz/nextra/`
- **对比总站地址**：`https://page.2401.xyz/`
- **分支模型**：
  - `main`：仅保存纯工程源码与适配版 `*.md` / `*.mdx` 基准文档（挂载为主仓库 `sites/nextra` 子模块）
  - `page`：由 GitHub Actions 自动构建并强制覆盖的纯静态产物孤儿分支（供 GitHub Pages 发布）

## 精确锁定依赖版本

- `nextra`: `4.6.1`
- `nextra-theme-docs`: `4.6.1`
- `next`: `15.5.29`
- `react` / `react-dom`: `19.3.1`
- `zod`: `4.1.12`（`overrides` 强制锁定，规避 `zod@4.6+` 与 `nextra-theme-docs@4.6.1` `LayoutPropsSchema` 的兼容回归）
- `katex`: `0.16.47`
- `mermaid`: `11.17.2`
- `pagefind`: `1.6.0`

## 本地开发与独立部署

```bash
npm install
npm run dev      # 本地开发预览
npm run build    # 静态导出至 out/ 并生成 out/_pagefind/ 全文索引 (默认 basePath: /nextra)

# 如需部署到独立根域名：
BASE_PATH=/ npm run build
```
