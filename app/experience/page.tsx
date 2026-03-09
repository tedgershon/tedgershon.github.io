'use client'

import { useState } from 'react'
import { experiences } from '@/data/experienceData'
import type { Experience } from '@/data/experienceData'

function TimelineItem({ item }: { item: Experience }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group relative pb-8 pl-8 last:pb-0">
      {/* Vertical line */}
      <div className="absolute top-2 bottom-0 left-[7px] w-px bg-gray-200 group-last:hidden dark:bg-gray-700" />

      {/* Dot */}
      <div
        className={`absolute top-2 left-0 h-3.5 w-3.5 rounded-full border-2 ${
          item.upcoming
            ? 'border-amber-400 bg-amber-50 dark:border-amber-500 dark:bg-amber-900/30'
            : 'border-primary-500 bg-white dark:bg-gray-950'
        }`}
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center gap-2 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {item.company}
              {item.upcoming && (
                <span className="ml-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                  Upcoming
                </span>
              )}
            </h3>
            <svg
              className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 dark:text-gray-500 ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <span className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
            {item.period}
          </span>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'mt-3 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base font-medium text-gray-600 dark:text-gray-300">
          {item.title}
          <span className="mx-2 text-gray-400 dark:text-gray-600">·</span>
          <span className="font-normal text-gray-500 dark:text-gray-400">{item.location}</span>
        </p>

        <ul className="mt-2 space-y-1.5">
          {item.description.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300 dark:bg-gray-600" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Experience
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          My professional journey and key roles.
        </p>
      </div>

      <div className="pt-10">
        {experiences.map((item) => (
          <TimelineItem key={item.company} item={item} />
        ))}
      </div>
    </div>
  )
}
