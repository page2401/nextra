import path from 'node:path'
import { fileURLToPath } from 'node:url'
import nextra from 'nextra'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rawBasePath = process.env.BASE_PATH ?? '/nextra'
const basePath = rawBasePath === '/' ? '' : rawBasePath.replace(/\/+$/, '')

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  search: {
    codeblocks: false
  }
})

export default withNextra({
  output: 'export',
  outputFileTracingRoot: __dirname,
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
})
