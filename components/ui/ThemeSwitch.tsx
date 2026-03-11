'use client'

import { Fragment, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { useColorScheme } from '@/components/ColorSchemeContext'
import Link from 'next/link'

const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="group:hover:text-gray-100 h-6 w-6"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
)

const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="group:hover:text-gray-100 h-6 w-6"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
)

const Dice = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0.5"
    className="group:hover:text-gray-100 h-6 w-6"
  >
    {/* Back die (slightly behind and offset) */}
    <rect
      x="8"
      y="2"
      width="14"
      height="14"
      rx="2"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
    />
    <circle cx="12" cy="6" r="1" className="fill-white dark:fill-gray-900" />
    <circle cx="18" cy="6" r="1" className="fill-white dark:fill-gray-900" />
    <circle cx="12" cy="12" r="1" className="fill-white dark:fill-gray-900" />
    <circle cx="18" cy="12" r="1" className="fill-white dark:fill-gray-900" />
    {/* Front die (overlapping) */}
    <rect
      x="2"
      y="8"
      width="14"
      height="14"
      rx="2"
      fill="currentColor"
      className="stroke-white dark:stroke-gray-900"
      strokeWidth="0.6"
    />
    <circle cx="6" cy="12" r="1" className="fill-white dark:fill-gray-900" />
    <circle cx="12" cy="12" r="1" className="fill-white dark:fill-gray-900" />
    <circle cx="9" cy="15" r="1" className="fill-white dark:fill-gray-900" />
    <circle cx="6" cy="18" r="1" className="fill-white dark:fill-gray-900" />
    <circle cx="12" cy="18" r="1" className="fill-white dark:fill-gray-900" />
  </svg>
)

// No icon needed for "more" link

const Blank = () => <svg className="h-6 w-6" />

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const { schemeId, setSchemeId, applyRandomScheme } = useColorScheme()

  useEffect(() => setMounted(true), [])

  const currentIcon = () => {
    if (!mounted) return <Blank />
    if (schemeId === 'light') return <Sun />
    if (schemeId === 'dark') return <Moon />
    // For custom schemes, show based on resolved (light/dark) appearance
    return resolvedTheme === 'dark' ? <Moon /> : <Sun />
  }

  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center justify-center">
          <MenuButton aria-label="Theme switcher">{currentIcon()}</MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="ring-opacity-5 absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-50 shadow-lg ring-1 ring-black focus:outline-hidden dark:bg-gray-800">
            <div className="p-1">
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={() => setSchemeId('light')}
                    className={`${focus ? 'bg-primary-600 text-white' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <div className="mr-2">
                      <Sun />
                    </div>
                    Light
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={() => setSchemeId('dark')}
                    className={`${focus ? 'bg-primary-600 text-white' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <div className="mr-2">
                      <Moon />
                    </div>
                    Dark
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={() => applyRandomScheme()}
                    className={`${focus ? 'bg-primary-600 text-white' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <div className="mr-2">
                      <Dice />
                    </div>
                    Random
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href="/themes"
                    className={`${focus ? 'text-primary-500' : 'text-gray-500 dark:text-gray-400'} mt-1 block w-full border-t border-gray-200 pt-2 pb-1 text-center text-sm font-medium tracking-widest no-underline transition dark:border-gray-700`}
                  >
                    · · ·
                  </Link>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

export default ThemeSwitch
