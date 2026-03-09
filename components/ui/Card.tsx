import Image from './Image'
import Link from './Link'
import type { Project } from '@/data/projectsData'
import { scopeLabels, scopeColors } from '@/data/projectsData'

interface CardProps {
  project: Project
}

const Card = ({ project }: CardProps) => {
  const { title, description, imgSrc, href, github, techStack, scope, impact, videoSrc } = project
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
          {/* Scope badge and impact */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${scopeColors[scope]}`}
            >
              {scopeLabels[scope]}
            </span>
            {impact && <span className="text-xs text-gray-500 dark:text-gray-400">{impact}</span>}
          </div>

          <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
            {primaryLink ? (
              <Link href={primaryLink} aria-label={`Link to ${title}`}>
                {title}
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
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
                aria-label={`GitHub repo for ${title}`}
              >
                GitHub &rarr;
              </Link>
            )}
            {href && (
              <Link
                href={href}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
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
