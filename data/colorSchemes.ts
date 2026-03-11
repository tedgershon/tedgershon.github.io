// ---------------------------------------------------------------------------
// Color Scheme definitions & CSS variable mappings
// Self-contained – no external imports required.
// ---------------------------------------------------------------------------

export interface ColorScheme {
  /** Unique identifier used in URLs / localStorage */
  id: string
  /** Human-readable display name */
  name: string
  /** Short description shown in the scheme picker */
  description: string
  /** Whether the scheme is intended for dark mode */
  isDark: boolean
  /** Raw color palettes – keyed by palette name → shade name → hex */
  colors: Record<string, Record<string, string>>
  /** CSS custom-property overrides (empty for built-in light/dark) */
  cssVariables: Record<string, string>
  /** 5 most prominent hex colors used for preview swatches */
  previewColors: [string, string, string, string, string]
}

// ---------------------------------------------------------------------------
// Scheme definitions
// ---------------------------------------------------------------------------

const light: ColorScheme = {
  id: 'light',
  name: 'Light',
  description: 'Default light theme.',
  isDark: false,
  colors: {
    primary: {
      '50': '#fdf2f8',
      '100': '#fce7f3',
      '200': '#fbcfe8',
      '300': '#f9a8d4',
      '400': '#f472b6',
      '500': '#ec4899',
      '600': '#db2777',
      '700': '#be185d',
      '800': '#9d174d',
      '900': '#831843',
      '950': '#500724',
    },
    gray: {
      '50': '#f9fafb',
      '100': '#f3f4f6',
      '200': '#e5e7eb',
      '300': '#d1d5db',
      '400': '#9ca3af',
      '500': '#6b7280',
      '600': '#4b5563',
      '700': '#374151',
      '800': '#1f2937',
      '900': '#111827',
      '950': '#030712',
    },
  },
  cssVariables: {},
  previewColors: ['#ec4899', '#f472b6', '#6b7280', '#f9fafb', '#1f2937'],
}

const dark: ColorScheme = {
  id: 'dark',
  name: 'Dark',
  description: 'Default dark theme.',
  isDark: true,
  colors: {
    primary: {
      '50': '#fdf2f8',
      '100': '#fce7f3',
      '200': '#fbcfe8',
      '300': '#f9a8d4',
      '400': '#f472b6',
      '500': '#ec4899',
      '600': '#db2777',
      '700': '#be185d',
      '800': '#9d174d',
      '900': '#831843',
      '950': '#500724',
    },
    gray: {
      '50': '#f9fafb',
      '100': '#f3f4f6',
      '200': '#e5e7eb',
      '300': '#d1d5db',
      '400': '#9ca3af',
      '500': '#6b7280',
      '600': '#4b5563',
      '700': '#374151',
      '800': '#1f2937',
      '900': '#111827',
      '950': '#030712',
    },
  },
  cssVariables: {},
  previewColors: ['#ec4899', '#f472b6', '#6b7280', '#f9fafb', '#1f2937'],
}

// ---------------------------------------------------------------------------
// Classic – molten lava / brick red / papaya whip / deep space / steel blue
// ---------------------------------------------------------------------------
const classic: ColorScheme = {
  id: 'classic',
  name: 'Classic',
  description: 'Classic deep blue with bold red accents.',
  isDark: false,
  colors: {
    molten_lava: { DEFAULT: '#780000' },
    brick_red: { DEFAULT: '#c1121f' },
    papaya_whip: { DEFAULT: '#fdf0d5' },
    deep_space_blue: { DEFAULT: '#003049' },
    steel_blue: { DEFAULT: '#669bbc' },
  },
  cssVariables: {
    // Primary – deep space blue → steel blue range
    '--color-primary-50': '#e8f1f7',
    '--color-primary-100': '#d1e3ef',
    '--color-primary-200': '#a3c7df',
    '--color-primary-300': '#84b3d2',
    '--color-primary-400': '#669bbc',
    '--color-primary-500': '#4a7fa0',
    '--color-primary-600': '#336685',
    '--color-primary-700': '#1f4f6d',
    '--color-primary-800': '#003049',
    '--color-primary-900': '#002438',
    '--color-primary-950': '#001824',

    // Gray – papaya whip lights → deep space blue darks
    '--color-gray-50': '#fdf8ec',
    '--color-gray-100': '#fdf0d5',
    '--color-gray-200': '#f5e2b8',
    '--color-gray-300': '#e6cfa0',
    '--color-gray-400': '#b8a47a',
    '--color-gray-500': '#8a7a5c',
    '--color-gray-600': '#5e5340',
    '--color-gray-700': '#3d3729',
    '--color-gray-800': '#1e1c16',
    '--color-gray-900': '#0f0e0a',
    '--color-gray-950': '#080705',
  },
  previewColors: ['#780000', '#c1121f', '#fdf0d5', '#003049', '#669bbc'],
}

// ---------------------------------------------------------------------------
// Natural – dust grey / dry sage / fern / hunter green / pine teal
// ---------------------------------------------------------------------------
const natural: ColorScheme = {
  id: 'natural',
  name: 'Natural',
  description: 'Earthy greens with sage tones.',
  isDark: false,
  colors: {
    dust_grey: { DEFAULT: '#dad7cd' },
    dry_sage: { DEFAULT: '#a3b18a' },
    fern: { DEFAULT: '#588157' },
    hunter_green: { DEFAULT: '#3a5a40' },
    pine_teal: { DEFAULT: '#344e41' },
  },
  cssVariables: {
    // Primary – fern / hunter green
    '--color-primary-50': '#eef3ee',
    '--color-primary-100': '#d6e4d6',
    '--color-primary-200': '#b0ccb0',
    '--color-primary-300': '#8ab48b',
    '--color-primary-400': '#6d9a6e',
    '--color-primary-500': '#588157',
    '--color-primary-600': '#4a6e4a',
    '--color-primary-700': '#3a5a40',
    '--color-primary-800': '#2e4833',
    '--color-primary-900': '#243827',
    '--color-primary-950': '#172319',

    // Gray – dust grey / earthy neutrals
    '--color-gray-50': '#f2f1ed',
    '--color-gray-100': '#e8e6e0',
    '--color-gray-200': '#dad7cd',
    '--color-gray-300': '#c4c1b5',
    '--color-gray-400': '#a3a090',
    '--color-gray-500': '#7d7b6e',
    '--color-gray-600': '#5c5a50',
    '--color-gray-700': '#434238',
    '--color-gray-800': '#2c2b24',
    '--color-gray-900': '#1a1a15',
    '--color-gray-950': '#0d0d0a',
  },
  previewColors: ['#dad7cd', '#a3b18a', '#588157', '#3a5a40', '#344e41'],
}

// ---------------------------------------------------------------------------
// Oceanic – deep twilight through light cyan blues
// ---------------------------------------------------------------------------
const oceanic: ColorScheme = {
  id: 'oceanic',
  name: 'Oceanic',
  description: 'Deep ocean blues ranging from midnight twilight to cyan surf.',
  isDark: true,
  colors: {
    deep_twilight: { DEFAULT: '#03045e' },
    french_blue: { DEFAULT: '#023e8a' },
    bright_teal_blue: { DEFAULT: '#0077b6' },
    blue_green: { DEFAULT: '#0096c7' },
    turquoise_surf: { DEFAULT: '#00b4d8' },
    sky_aqua: { DEFAULT: '#48cae4' },
    frosted_blue: { DEFAULT: '#90e0ef' },
    light_cyan: { DEFAULT: '#caf0f8' },
  },
  cssVariables: {
    // Primary – bright teal blue range
    '--color-primary-50': '#e5f6fb',
    '--color-primary-100': '#caf0f8',
    '--color-primary-200': '#90e0ef',
    '--color-primary-300': '#48cae4',
    '--color-primary-400': '#00b4d8',
    '--color-primary-500': '#0096c7',
    '--color-primary-600': '#0077b6',
    '--color-primary-700': '#005f92',
    '--color-primary-800': '#023e8a',
    '--color-primary-900': '#032e6a',
    '--color-primary-950': '#03045e',

    // Gray – deep twilight / french blue darks → light cyan lights
    '--color-gray-50': '#e0f0f7',
    '--color-gray-100': '#c3dfe9',
    '--color-gray-200': '#8bbdd3',
    '--color-gray-300': '#5a9ab9',
    '--color-gray-400': '#37769a',
    '--color-gray-500': '#1e5a7e',
    '--color-gray-600': '#0f4466',
    '--color-gray-700': '#073554',
    '--color-gray-800': '#042a47',
    '--color-gray-900': '#031d36',
    '--color-gray-950': '#020e20',
  },
  previewColors: ['#03045e', '#0077b6', '#00b4d8', '#90e0ef', '#caf0f8'],
}

// ---------------------------------------------------------------------------
// Dune – warm sandy neutrals
// ---------------------------------------------------------------------------
const dune: ColorScheme = {
  id: 'dune',
  name: 'Dune',
  description: 'Warm sand and linen tones evoking sun-bleached dunes.',
  isDark: false,
  colors: {
    parchment: { DEFAULT: '#edede9' },
    dust_grey: { DEFAULT: '#d6ccc2' },
    linen: { DEFAULT: '#f5ebe0' },
    powder_petal: { DEFAULT: '#e3d5ca' },
    almond_silk: { DEFAULT: '#d5bdaf' },
  },
  cssVariables: {
    // Primary – almond silk / warm browns
    '--color-primary-50': '#f7f1ec',
    '--color-primary-100': '#efe3da',
    '--color-primary-200': '#e3d5ca',
    '--color-primary-300': '#d5bdaf',
    '--color-primary-400': '#c4a693',
    '--color-primary-500': '#b08e78',
    '--color-primary-600': '#96755e',
    '--color-primary-700': '#7a5d49',
    '--color-primary-800': '#5e4737',
    '--color-primary-900': '#443228',
    '--color-primary-950': '#2b1f19',

    // Gray – parchment / linen warm neutrals
    '--color-gray-50': '#f7f5f2',
    '--color-gray-100': '#f0ece6',
    '--color-gray-200': '#e5e0d8',
    '--color-gray-300': '#d6ccc2',
    '--color-gray-400': '#b8ada2',
    '--color-gray-500': '#918679',
    '--color-gray-600': '#6e6459',
    '--color-gray-700': '#524b42',
    '--color-gray-800': '#38332c',
    '--color-gray-900': '#221f1b',
    '--color-gray-950': '#11100e',
  },
  previewColors: ['#edede9', '#d6ccc2', '#f5ebe0', '#e3d5ca', '#d5bdaf'],
}

// ---------------------------------------------------------------------------
// Twilight – ink black / navy / gold
// ---------------------------------------------------------------------------
const twilight: ColorScheme = {
  id: 'twilight',
  name: 'Twilight',
  description: 'Deep ink-black navy with golden accents, like stars at dusk.',
  isDark: true,
  colors: {
    ink_black: { DEFAULT: '#000814' },
    prussian_blue: { DEFAULT: '#001d3d' },
    regal_navy: { DEFAULT: '#003566' },
    school_bus_yellow: { DEFAULT: '#ffc300' },
    gold: { DEFAULT: '#ffd60a' },
  },
  cssVariables: {
    // Primary – gold / yellow
    '--color-primary-50': '#fff9e0',
    '--color-primary-100': '#fff3b8',
    '--color-primary-200': '#ffea7a',
    '--color-primary-300': '#ffd60a',
    '--color-primary-400': '#ffc300',
    '--color-primary-500': '#e0ab00',
    '--color-primary-600': '#b88c00',
    '--color-primary-700': '#8a6900',
    '--color-primary-800': '#5e4800',
    '--color-primary-900': '#3a2d00',
    '--color-primary-950': '#1f1800',

    // Gray – ink black / prussian / navy darks
    '--color-gray-50': '#e0e6ed',
    '--color-gray-100': '#b8c5d4',
    '--color-gray-200': '#8a9fb5',
    '--color-gray-300': '#5e7a96',
    '--color-gray-400': '#3b5a7a',
    '--color-gray-500': '#1f3f5e',
    '--color-gray-600': '#0d2e4f',
    '--color-gray-700': '#003566',
    '--color-gray-800': '#001d3d',
    '--color-gray-900': '#000e20',
    '--color-gray-950': '#000814',
  },
  previewColors: ['#000814', '#001d3d', '#003566', '#ffc300', '#ffd60a'],
}

// ---------------------------------------------------------------------------
// Serene – platinum / dusk blue / steel blue / icy blue / grey olive
// ---------------------------------------------------------------------------
const serene: ColorScheme = {
  id: 'serene',
  name: 'Serene',
  description: 'Cool platinum and steel blues with a calm, collected feel.',
  isDark: false,
  colors: {
    platinum: { DEFAULT: '#e7ecef' },
    dusk_blue: { DEFAULT: '#274c77' },
    steel_blue: { DEFAULT: '#6096ba' },
    icy_blue: { DEFAULT: '#a3cef1' },
    grey_olive: { DEFAULT: '#8b8c89' },
  },
  cssVariables: {
    // Primary – dusk blue / steel blue
    '--color-primary-50': '#edf3f9',
    '--color-primary-100': '#d4e4f3',
    '--color-primary-200': '#a3cef1',
    '--color-primary-300': '#7db5db',
    '--color-primary-400': '#6096ba',
    '--color-primary-500': '#4a7a9e',
    '--color-primary-600': '#376189',
    '--color-primary-700': '#274c77',
    '--color-primary-800': '#1e3b5c',
    '--color-primary-900': '#152c45',
    '--color-primary-950': '#0b1a2b',

    // Gray – platinum / grey olive
    '--color-gray-50': '#f3f5f6',
    '--color-gray-100': '#e7ecef',
    '--color-gray-200': '#d0d6db',
    '--color-gray-300': '#b4bbc0',
    '--color-gray-400': '#8b8c89',
    '--color-gray-500': '#6d6e6c',
    '--color-gray-600': '#535451',
    '--color-gray-700': '#3d3e3c',
    '--color-gray-800': '#292a28',
    '--color-gray-900': '#181918',
    '--color-gray-950': '#0c0d0c',
  },
  previewColors: ['#e7ecef', '#274c77', '#6096ba', '#a3cef1', '#8b8c89'],
}

// ---------------------------------------------------------------------------
// Historic – black / night bordeaux / white smoke / dusty taupe / stone brown
// ---------------------------------------------------------------------------
const historic: ColorScheme = {
  id: 'historic',
  name: 'Historic',
  description: 'Rich bordeaux reds and stone browns on deep black — old-world elegance.',
  isDark: true,
  colors: {
    black: { DEFAULT: '#0a0908' },
    night_bordeaux: { DEFAULT: '#49111c' },
    white_smoke: { DEFAULT: '#f2f4f3' },
    dusty_taupe: { DEFAULT: '#a9927d' },
    stone_brown: { DEFAULT: '#5e503f' },
  },
  cssVariables: {
    // Primary – night bordeaux (deep reds)
    '--color-primary-50': '#f9ecee',
    '--color-primary-100': '#f0d0d5',
    '--color-primary-200': '#d9959e',
    '--color-primary-300': '#b86070',
    '--color-primary-400': '#8f3148',
    '--color-primary-500': '#6b1f32',
    '--color-primary-600': '#49111c',
    '--color-primary-700': '#3a0d16',
    '--color-primary-800': '#2c0a11',
    '--color-primary-900': '#1e060b',
    '--color-primary-950': '#120407',

    // Gray – black / stone brown / white smoke
    '--color-gray-50': '#f2f4f3',
    '--color-gray-100': '#dfe0de',
    '--color-gray-200': '#c2bfb7',
    '--color-gray-300': '#a9927d',
    '--color-gray-400': '#8a7a65',
    '--color-gray-500': '#5e503f',
    '--color-gray-600': '#473c30',
    '--color-gray-700': '#332b22',
    '--color-gray-800': '#1e1a15',
    '--color-gray-900': '#0f0e0c',
    '--color-gray-950': '#0a0908',
  },
  previewColors: ['#0a0908', '#49111c', '#f2f4f3', '#a9927d', '#5e503f'],
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

/** All available color schemes (including built-in light & dark). */
export const COLOR_SCHEMES: ColorScheme[] = [
  light,
  dark,
  classic,
  natural,
  oceanic,
  dune,
  twilight,
  serene,
  historic,
]

/** Only the custom schemes (excludes built-in light & dark). */
export const CUSTOM_SCHEMES: ColorScheme[] = COLOR_SCHEMES.filter(
  (s) => s.id !== 'light' && s.id !== 'dark'
)

/** Look up a scheme by its `id`. Returns `undefined` when not found. */
export function getSchemeById(id: string): ColorScheme | undefined {
  return COLOR_SCHEMES.find((s) => s.id === id)
}

/** Return a random custom scheme (never light or dark). */
export function getRandomScheme(): ColorScheme {
  const idx = Math.floor(Math.random() * CUSTOM_SCHEMES.length)
  return CUSTOM_SCHEMES[idx]
}
