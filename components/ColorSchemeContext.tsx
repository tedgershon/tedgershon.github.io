'use client'

import { createContext, useContext, useCallback, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { getSchemeById, getRandomScheme, ColorScheme, COLOR_SCHEMES } from '@/data/colorSchemes'

// ---------------------------------------------------------------------------
// CSS variable keys managed by the color scheme provider
// ---------------------------------------------------------------------------

const CSS_VAR_KEYS = [
  '--color-primary-50',
  '--color-primary-100',
  '--color-primary-200',
  '--color-primary-300',
  '--color-primary-400',
  '--color-primary-500',
  '--color-primary-600',
  '--color-primary-700',
  '--color-primary-800',
  '--color-primary-900',
  '--color-primary-950',
  '--color-gray-50',
  '--color-gray-100',
  '--color-gray-200',
  '--color-gray-300',
  '--color-gray-400',
  '--color-gray-500',
  '--color-gray-600',
  '--color-gray-700',
  '--color-gray-800',
  '--color-gray-900',
  '--color-gray-950',
] as const

// ---------------------------------------------------------------------------
// Context shape
// ---------------------------------------------------------------------------

interface ColorSchemeContextValue {
  schemeId: string
  setSchemeId: (id: string) => void
  applyRandomScheme: () => void
}

const ColorSchemeContext = createContext<ColorSchemeContextValue | undefined>(undefined)

// ---------------------------------------------------------------------------
// Helper – apply / clear CSS variables
// ---------------------------------------------------------------------------

function applyCssVariables(scheme: ColorScheme) {
  const style = document.documentElement.style

  if (Object.keys(scheme.cssVariables).length === 0) {
    // Built-in light/dark – remove all overrides
    for (const key of CSS_VAR_KEYS) {
      style.removeProperty(key)
    }
  } else {
    for (const [key, value] of Object.entries(scheme.cssVariables)) {
      style.setProperty(key, value)
    }
  }
}

function clearCssVariables() {
  const style = document.documentElement.style
  for (const key of CSS_VAR_KEYS) {
    style.removeProperty(key)
  }
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function ColorSchemeProvider({ children }: { children: React.ReactNode }) {
  const [schemeId, setSchemeIdState] = useState<string>('light')
  const { setTheme } = useTheme()

  // Restore from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('colorScheme')
    if (stored) {
      const scheme = getSchemeById(stored)
      if (scheme) {
        setSchemeIdState(stored)
        applyCssVariables(scheme)
        if (Object.keys(scheme.cssVariables).length > 0) {
          setTheme(scheme.isDark ? 'dark' : 'light')
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setSchemeId = useCallback(
    (id: string) => {
      const scheme = getSchemeById(id)
      if (!scheme) return

      setSchemeIdState(id)
      localStorage.setItem('colorScheme', id)

      if (id === 'light' || id === 'dark') {
        clearCssVariables()
        setTheme(id)
      } else {
        applyCssVariables(scheme)
        setTheme(scheme.isDark ? 'dark' : 'light')
      }
    },
    [setTheme]
  )

  const applyRandomScheme = useCallback(() => {
    const scheme = getRandomScheme()
    setSchemeId(scheme.id)
  }, [setSchemeId])

  return (
    <ColorSchemeContext.Provider value={{ schemeId, setSchemeId, applyRandomScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useColorScheme(): ColorSchemeContextValue {
  const ctx = useContext(ColorSchemeContext)
  if (ctx === undefined) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider')
  }
  return ctx
}
