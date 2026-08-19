'use client'

import { useState, useMemo } from 'react'
import { experiences, leadership } from '@/data/experienceData'
import type { Experience, ExperienceStatus } from '@/data/experienceData'

/* ── Dot styling per status ───────────────────────────────── */

const dotClasses: Record<ExperienceStatus, string> = {
  upcoming: 'border-violet-400 bg-violet-50 dark:border-violet-400 dark:bg-violet-900/30',
  current:
    'border-emerald-500 bg-gray-50 ring-[3px] ring-emerald-400/50 dark:bg-gray-950 dark:ring-emerald-400/40',
  previous: 'border-pink-400 bg-gray-50 dark:border-pink-400 dark:bg-gray-950',
}

/* ── Flat timeline entry (pre-computed for rendering) ─────── */

type TimelineEntry = {
  item: Experience
  lineBelow: 'solid' | 'dashed' | 'none'
}

function buildTimeline(items: Experience[]): TimelineEntry[] {
  return items.map((item, idx) => ({
    item,
    lineBelow: idx === items.length - 1 ? 'none' : 'solid',
  }))
}

/* ── Single timeline row ──────────────────────────────────── */

function TimelineRow({ entry }: { entry: TimelineEntry }) {
  const [isOpen, setIsOpen] = useState(false)
  const { item, lineBelow } = entry

  return (
    <div className="relative flex">
      {/* ── Left column: timeline dot + line ── */}
      <div className="relative flex w-20 shrink-0 flex-col items-center">
        <div className="flex h-6 items-center">
          <div
            className={`z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2 ${dotClasses[item.status]}`}
          />
        </div>
        {lineBelow !== 'none' && (
          <div
            className={`w-px flex-1 ${
              lineBelow === 'dashed'
                ? 'border-l border-dashed border-gray-300 dark:border-gray-600'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          />
        )}
      </div>

      {/* ── Right column: content ── */}
      <div className="min-w-0 flex-1 pb-8">
        {/* Company row */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full cursor-pointer items-start gap-2 text-left sm:h-6 sm:items-center"
          aria-expanded={isOpen}
        >
          <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.company}
              </h3>

              {/* External link icon */}
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-400 transition-colors dark:text-gray-500"
                aria-label={`Visit ${item.company} website`}
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6H21m0 0v7.5m0-7.5l-9 9"
                  />
                </svg>
              </a>

              {/* Chevron */}
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

            {/* Date + location stacked */}
            <div className="text-right">
              <span className="block text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                {item.period}
              </span>
              <span className="block text-xs text-gray-400 dark:text-gray-500">
                {item.location}
              </span>
            </div>
          </div>
        </button>

        {/* Role title — always visible */}
        <p className="mt-0.5 text-sm font-medium text-gray-600 dark:text-gray-300">{item.title}</p>

        {/* Collapsible description */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'mt-2 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="space-y-1.5">
            {item.description.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300 dark:bg-gray-600" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ── Timeline section (reused for both Experience & Leadership) */

function TimelineSection({ items, keyPrefix }: { items: Experience[]; keyPrefix: string }) {
  const timeline = useMemo(() => buildTimeline(items), [items])

  return (
    <div>
      {timeline.map((entry, idx) => (
        <TimelineRow key={`${keyPrefix}-${entry.item.company}-${entry.item.title}`} entry={entry} />
      ))}
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────── */

export default function ExperiencePage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Experience
        </h1>
      </div>

      <div className="pt-10">
        <TimelineSection items={experiences} keyPrefix="exp" />
      </div>

      <div className="pt-10">
        <h2 className="mb-6 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-9 dark:text-gray-100">
          Leadership &amp; Community
        </h2>
        <TimelineSection items={leadership} keyPrefix="lead" />
      </div>
    </div>
  )
}
