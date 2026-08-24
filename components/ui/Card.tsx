import Image from './Image'
import Link from './Link'
import DemoVideoModal from './DemoVideoModal'
import { Github, ExternalLink, Diagram } from '@/components/social-icons/icons'
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
    demoVideo,
    designDiagram,
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
                className="h-auto w-full object-cover object-center"
                width={1411}
                height={859}
                unoptimized
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="h-auto w-full object-cover object-center"
              width={1411}
              height={859}
              unoptimized
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

          <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">{title}</h2>

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

          {/* Link favicons: GitHub, demo video, external site, design diagram */}
          {(github || demoVideo || website || designDiagram) && (
            <div className="flex items-center gap-3">
              {github && (
                <Link href={github} aria-label={`GitHub repository for ${title}`}>
                  <Github className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 fill-current text-black dark:text-white" />
                </Link>
              )}
              {demoVideo && <DemoVideoModal src={demoVideo} title={title} />}
              {website && (
                <Link href={website} aria-label={`External site for ${title}`}>
                  <ExternalLink className="hover:text-primary-500 dark:hover:text-primary-400 h-5 w-5 fill-current text-black dark:text-white" />
                </Link>
              )}
              {designDiagram && (
                <Link href={designDiagram} aria-label={`Design diagram for ${title}`}>
                  <Diagram className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 fill-current text-black dark:text-white" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
