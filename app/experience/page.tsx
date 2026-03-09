import { genPageMetadata } from 'app/seo'
import { workExperience, education, leadership } from '@/data/experienceData'
import type { Experience } from '@/data/experienceData'

export const metadata = genPageMetadata({ title: 'Experience' })

function TimelineItem({ item }: { item: Experience }) {
  return (
    <div className="group relative pb-10 pl-8 last:pb-0">
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

      <div className="space-y-1.5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {item.title}
            {item.upcoming && (
              <span className="ml-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                Upcoming
              </span>
            )}
          </h3>
          <span className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
            {item.period}
          </span>
        </div>

        <p className="text-base font-medium text-gray-600 dark:text-gray-300">
          {item.company}
          <span className="mx-2 text-gray-400 dark:text-gray-600">·</span>
          <span className="font-normal text-gray-500 dark:text-gray-400">{item.location}</span>
        </p>

        <ul className="mt-2 space-y-1.5">
          {item.description.map((bullet, i) => (
            <li key={i} className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Section({ title, items }: { title: string; items: Experience[] }) {
  return (
    <div className="space-y-1">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <div>
        {items.map((item) => (
          <TimelineItem key={`${item.company}-${item.title}`} item={item} />
        ))}
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
          My professional journey, education, and leadership roles.
        </p>
      </div>

      <div className="space-y-12 pt-10">
        <Section title="Work" items={workExperience} />
        <Section title="Education" items={education} />
        <Section title="Leadership & Activities" items={leadership} />
      </div>
    </div>
  )
}
