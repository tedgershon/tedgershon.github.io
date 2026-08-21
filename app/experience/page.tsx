'use client'

import { useState, useMemo } from 'react'
import { experiences, leadership, experienceSlug } from '@/data/experienceData'
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
    <div id={experienceSlug(item)} className="relative flex scroll-mt-36">
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
        <div className="flex w-full items-start gap-2 sm:h-6 sm:items-center">
          <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-lg font-semibold">
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 underline underline-offset-2 transition-colors"
              >
                {item.company}
              </a>
            </h3>

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
        </div>

        {/* Role title — always visible */}
        <p className="mt-0.5 text-sm font-medium text-gray-600 dark:text-gray-300">{item.title}</p>

        {/* Summary + expandable bullets */}
        <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {item.summary}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-label={`Show details for ${item.company}`}
              className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 cursor-pointer transition-colors"
            >
              <span className="text-gray-500 dark:text-gray-400">...</span> more
            </button>
          )}
        </p>
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
          <button
            onClick={() => setIsOpen(false)}
            aria-expanded={isOpen}
            aria-label={`Hide details for ${item.company}`}
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 mt-1.5 cursor-pointer text-sm transition-colors"
          >
            less
          </button>
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
