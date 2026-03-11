'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { ColorSchemeProvider } from '@/components/ColorSchemeContext'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem={false}>
      <ColorSchemeProvider>{children}</ColorSchemeProvider>
    </ThemeProvider>
  )
}
