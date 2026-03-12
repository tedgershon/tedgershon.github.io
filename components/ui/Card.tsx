import Image from './Image'
import Link from './Link'
import type { Project } from '@/data/projectsData'
import { scopeLabels, scopeColors, categoryLabels, categoryColors } from '@/data/projectsData'

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (match) {
          return (
            <Link key={i} href={match[2]} className="hover-link">
              {match[1]}
            </Link>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

interface CardProps {
  project: Project
}

const Card = ({ project }: CardProps) => {
  const {
    title,
    description,
    imgSrc,
    href,
    github,
    techStack,
    scope,
    category,
    impact,
    videoSrc,
    website,
  } = project
  const primaryLink = href || github

  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div className="h-full overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60">
        {imgSrc &&
          (primaryLink ? (
            <Link href={primaryLink} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}

        {/* Video placeholder for future video demos */}
        {videoSrc && (
          <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-800">
            <video
              src={videoSrc}
              className="h-full w-full object-cover"
              controls
              preload="metadata"
            >
              <track kind="captions" />
            </video>
          </div>
        )}

        <div className="p-6">
          {/* Scope badge, category label, and impact */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${scopeColors[scope]}`}
            >
              {scopeLabels[scope]}
            </span>
            <span
              className={`inline-block rounded-md border px-2 py-0.5 text-xs font-semibold tracking-wide ${categoryColors[category]}`}
            >
              {categoryLabels[category]}
            </span>
            {impact && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                <RichText text={impact} />
              </span>
            )}
          </div>

          <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
            {website ? (
              <Link
                href={website}
                aria-label={`Link to ${title}`}
                className="hover-link !text-gray-900 after:!bg-gray-900 dark:!text-gray-100 dark:after:!bg-gray-100"
              >
                {title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline h-4 w-4 align-baseline"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ) : (
              title
            )}
          </h2>

          <p className="prose mb-4 max-w-none text-gray-500 dark:text-gray-400">{description}</p>

          {/* Tech stack tags */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {github && (
              <Link
                href={github}
                className="hover-link text-base leading-6 font-medium"
                aria-label={`GitHub repo for ${title}`}
              >
                GitHub &rarr;
              </Link>
            )}
            {href && (
              <Link
                href={href}
                className="hover-link text-base leading-6 font-medium"
                aria-label={`Live demo of ${title}`}
              >
                Live Demo &rarr;
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
