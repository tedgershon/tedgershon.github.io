import Image from 'next/image'
import { experiences, leadership, experienceSlug } from '@/data/experienceData'
import type { Experience } from '@/data/experienceData'

/* ── Single experience row ────────────────────────────────── */

function ExperienceRow({ item }: { item: Experience }) {
  const slug = experienceSlug(item)

  return (
    <div id={slug} className="relative flex scroll-mt-36">
      {/* ── Left column: company logo (links to company site) ── */}
      <div className="flex w-20 shrink-0 justify-center">
        <a
          href={item.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${item.company}`}
          className="hover:border-primary-500 dark:hover:border-primary-400 block h-11 w-11 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white transition dark:border-gray-700"
        >
          <Image
            src={item.logo}
            alt={`${item.company} logo`}
            width={44}
            height={44}
            className="h-full w-full object-contain"
          />
        </a>
      </div>

      {/* ── Right column: content ── */}
      <div className="min-w-0 flex-1 pb-8">
        {/* Company row */}
        <div className="flex w-full items-start gap-2 sm:h-6 sm:items-center">
          <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {item.company}
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
        <p className="mt-0.5 text-sm font-medium text-gray-700 dark:text-gray-300">{item.title}</p>

        {/* Summary (optional) + bullets — always fully expanded */}
        {item.summary && (
          <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {item.summary}
          </p>
        )}
        <ul className="mt-2 space-y-1.5">
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
  )
}

/* ── Experience section (reused for both Experience & Leadership) */

function TimelineSection({ items, keyPrefix }: { items: Experience[]; keyPrefix: string }) {
  return (
    <div>
      {items.map((item) => (
        <ExperienceRow key={`${keyPrefix}-${item.company}-${item.title}`} item={item} />
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
