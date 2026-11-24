import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { Callout } from 'nextra/components'

const themeComponents = getThemeComponents({
  Callout
})

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components
  }
}
