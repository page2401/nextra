import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import 'katex/dist/katex.min.css'

export const metadata = {
  title: {
    default: 'Nextra v4 基准实测',
    template: '%s – Nextra v4 基准站'
  },
  description:
    'SSG Benchmark Submodule — Nextra v4 (4.6.1 · Next.js App Router + _meta.js + KaTeX + Mermaid 11 + Pagefind)'
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700 }}>
        Nextra v4{' '}
        <span style={{ opacity: 0.65, fontWeight: 400 }}>4.6.1 Benchmark</span>
      </span>
    }
    projectLink="https://github.com/page2401/nextra"
  />
)

const footer = (
  <Footer>
    <span>
      Nextra v4 (4.6.1) Benchmark ·{' '}
      <a href="https://page.2401.xyz/" target="_blank" rel="noreferrer">
        返回对比总站 page.2401.xyz
      </a>
    </span>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="▲" />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/page2401/nextra/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 3, toggleButton: true }}
          toc={{ title: '本页目录', backToTop: '返回顶部' }}
          editLink="在 GitHub 上查看此页"
          feedback={{ content: null }}
          search={<Search placeholder="搜索基准文档…" />}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
