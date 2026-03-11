'use client'

import { COLOR_SCHEMES, type ColorScheme } from '@/data/colorSchemes'
import { useColorScheme } from '@/components/ColorSchemeContext'
import Link from '@/components/ui/Link'

/**
 * Derive card-level inline styles from a scheme's CSS variables so each card
 * previews its own palette regardless of the currently-active site theme.
 */
function cardStyles(scheme: ColorScheme): React.CSSProperties {
  const v = scheme.cssVariables
  // For built-in light/dark that have no CSS variable overrides,
  // use sensible hard-coded values.
  if (Object.keys(v).length === 0) {
    if (scheme.isDark) {
      return { backgroundColor: '#030712', color: '#f9fafb', borderColor: '#374151' }
    }
    return { backgroundColor: '#f9fafb', color: '#111827', borderColor: '#e5e7eb' }
  }

  const bg = scheme.isDark ? (v['--color-gray-950'] ?? '#000') : (v['--color-gray-50'] ?? '#fff')
  const fg = scheme.isDark ? (v['--color-gray-50'] ?? '#fff') : (v['--color-gray-950'] ?? '#000')
  const border = scheme.isDark
    ? (v['--color-gray-700'] ?? '#444')
    : (v['--color-gray-200'] ?? '#ddd')

  return { backgroundColor: bg, color: fg, borderColor: border }
}

function hexLabelColor(scheme: ColorScheme): string {
  const v = scheme.cssVariables
  if (Object.keys(v).length === 0) {
    return scheme.isDark ? '#9ca3af' : '#6b7280'
  }
  return scheme.isDark ? (v['--color-gray-400'] ?? '#999') : (v['--color-gray-500'] ?? '#777')
}

function swatchOutlineColor(scheme: ColorScheme): string {
  const v = scheme.cssVariables
  if (Object.keys(v).length === 0) {
    return scheme.isDark ? '#374151' : '#d1d5db'
  }
  return scheme.isDark ? (v['--color-gray-600'] ?? '#555') : (v['--color-gray-300'] ?? '#ccc')
}

export default function ThemesPage() {
  const { schemeId, setSchemeId } = useColorScheme()

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        &larr; Back
      </Link>

      <h1 className="mt-6 mb-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Color Schemes
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COLOR_SCHEMES.map((scheme) => {
          const selected = scheme.id === schemeId
          const styles = cardStyles(scheme)
          const labelClr = hexLabelColor(scheme)

          return (
            <button
              key={scheme.id}
              type="button"
              onClick={() => setSchemeId(scheme.id)}
              className={`cursor-pointer rounded-xl p-5 text-left transition ${
                selected ? 'ring-2 ring-offset-2' : ''
              }`}
              style={{
                ...styles,
                borderWidth: selected ? 2 : 1,
                borderStyle: 'solid',
                ...(selected
                  ? {
                      borderColor: scheme.cssVariables['--color-primary-500'] ?? '#ec4899',
                      // ring-color via box-shadow handled by Tailwind ring utility;
                      // ring-offset-color matches card bg so it doesn't bleed
                      ['--tw-ring-color' as string]:
                        (scheme.cssVariables['--color-primary-500'] ?? '#ec4899') + '55',
                      ['--tw-ring-offset-color' as string]: styles.backgroundColor,
                    }
                  : {}),
              }}
            >
              <p className="text-lg font-bold" style={{ color: styles.color }}>
                {scheme.name}
              </p>

              {/* Preview swatches */}
              <div
                className="mt-3 flex overflow-hidden rounded-lg"
                style={{
                  border: `1px solid ${swatchOutlineColor(scheme)}`,
                }}
              >
                {scheme.previewColors.map((hex, i) => (
                  <div key={i} className="flex-1">
                    <div className="h-12 w-full" style={{ backgroundColor: hex }} />
                  </div>
                ))}
              </div>

              {/* Hex labels */}
              <div className="mt-1.5 flex gap-1">
                {scheme.previewColors.map((hex, i) => (
                  <span
                    key={i}
                    className="flex-1 text-center text-[10px] leading-tight"
                    style={{ color: labelClr }}
                  >
                    {hex}
                  </span>
                ))}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
