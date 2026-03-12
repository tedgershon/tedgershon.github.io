'use client'

import { useState, useRef, useEffect } from 'react'

const SearchButton = () => {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setShow(false)
    }
    if (show) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [show])

  return (
    <div ref={ref} className="relative">
      <button aria-label="Mystery" onClick={() => setShow((s) => !s)} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 text-gray-900 dark:text-gray-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            // magnifying glass:
            // d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            // glass with puzzle:
            // d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z M7.5 7.5h2a1 1 0 0 0 2 0h2v2a1 1 0 0 0 0 2v2h-2a1 1 0 0 1-2 0h-2v-2a1 1 0 0 1 0-2v-2z"
            // glass with question mark:
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607zM9 8c0-1.5 3-1.5 3 0s-1.5 1.5-1.5 3m0 2.5h.01"
          />
        </svg>
      </button>
      {show && (
        <div className="absolute top-10 right-0 z-50 w-56 rounded-md border border-gray-200 bg-gray-50 p-4 text-center shadow-lg dark:border-gray-700 dark:bg-gray-900">
          <p className="font-mono text-sm tracking-wide text-gray-600 dark:text-gray-300">
            Coming soon...
          </p>
          <p className="mt-1 font-mono text-xs text-gray-400 dark:text-gray-500">
            A hunt awaits its 1st clue.
          </p>
        </div>
      )}
    </div>
  )
}

export default SearchButton
