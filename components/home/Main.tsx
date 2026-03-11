import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { experiences } from '@/data/experienceData'
import type { ExperienceStatus } from '@/data/experienceData'
import Card from '@/components/ui/Card'
import { Mail, Github, Linkedin, Resume } from '@/components/social-icons/icons'
import profilePhoto from '../../public/static/images/profile2.jpg'

const FEATURED_COUNT = 2
const EXPERIENCE_COUNT = 4

const homeDotClasses: Record<ExperienceStatus, string> = {
  upcoming: 'border-violet-400 bg-violet-50 dark:border-violet-400 dark:bg-violet-900/30',
  current:
    'border-emerald-500 bg-white ring-[3px] ring-emerald-400/50 dark:bg-gray-950 dark:ring-emerald-400/40',
  past: 'border-pink-400 bg-white dark:border-pink-400 dark:bg-gray-950',
}

const socialLinks = [
  {
    name: 'Email',
    href: `mailto:${siteMetadata.email}`,
    icon: Mail,
  },
  {
    name: 'Resume',
    href: '/static/Ted Gershon Resume.pdf',
    icon: Resume,
  },
  {
    name: 'GitHub',
    href: siteMetadata.github,
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: siteMetadata.linkedin,
    icon: Linkedin,
  },
]

function HoverLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      className="hover-link"
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

function HeroSection() {
  return (
    <div className="flex flex-col items-center pt-8 pb-10 md:flex-row md:pt-12 md:pb-16">
      <div className="border-primary-500 overflow-hidden rounded-full border-[4px] p-1.5">
        <Image
          src={profilePhoto}
          alt="Ted Gershon"
          width={512}
          height={512}
          className="h-[175px] w-[175px] rounded-full object-cover"
          placeholder="blur"
          priority
        />
      </div>
      <div className="mt-6 text-center md:mt-0 md:ml-12 md:text-left">
        <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          Ted Gershon
        </h1>
        <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
          Developer. Engineer. Data Enthusiast.
        </p>
        <div className="mt-5 flex items-center justify-center gap-5 md:justify-start">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="hover:border-primary-500 hover:bg-primary-500/10 dark:hover:border-primary-400 dark:hover:bg-primary-400/10 rounded-full border-2 border-gray-300 p-3 transition dark:border-gray-600"
            >
              <Icon className="h-5 w-5 fill-current text-gray-700 dark:text-gray-200" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <div
      id="about"
      className="scroll-mt-28 border-t border-gray-200 pt-10 pb-10 dark:border-gray-700"
    >
      <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
        About Me
      </h2>
      <div className="mt-6 max-w-3xl space-y-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
        <p>
          Hi! I&apos;m Ted, and I grew up in Austin, Texas where I attended the{' '}
          <HoverLink href="https://lasa.austinschools.org/">Liberal Arts and Science</HoverLink>{' '}
          <HoverLink href="https://lasa.austinschools.org/">Academy</HoverLink>. Currently, I&apos;m
          a student at <HoverLink href="https://www.cmu.edu/">Carnegie Mellon University</HoverLink>{' '}
          studying Information Systems with minors in Software Engineering and Artificial
          Intelligence. Outside of tech, I play tennis for{' '}
          <HoverLink href="https://www.instagram.com/tartantennis/">
            CMU&apos;s varsity team
          </HoverLink>
          .
        </p>
        <p>
          I&apos;m fascinated by the future of big data and its endless applications—from deriving
          healthcare insights to enabling smarter decision-making to optimizing tech,
          transportation, public policy initiatives, and more. I believe future innovation hinges on
          our ability to effectively manage data and derive meaningful insights to inform how we run
          our most fundamental institutions. I&apos;m particularly interested in data infrastructure
          as the backbone for large-scale frontier AI systems.
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  const featured = projectsData.slice(0, FEATURED_COUNT)

  // Newest first, capped at 4
  const featured_experiences = experiences.slice(0, EXPERIENCE_COUNT)

  return (
    <>
      <div id="home" className="absolute top-0" />

      <HeroSection />

      <AboutSection />

      {/* Experience Timeline */}
      <div className="border-t border-gray-200 pt-10 pb-10 dark:border-gray-700">
        <div className="space-y-2 pb-8 md:space-y-5">
          <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Experience
          </h2>
        </div>
        <div className="flex items-center gap-0 overflow-x-auto py-3">
          {featured_experiences.map((exp, idx) => (
            <div key={`${exp.company}-${exp.title}`} className="flex items-center">
              {/* Card with colored dot */}
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:border-primary-500 dark:hover:border-primary-400 flex min-w-[170px] flex-col items-center rounded-xl border border-gray-200 px-5 py-4 transition hover:shadow-sm dark:border-gray-700"
              >
                <div
                  className={`mb-2.5 h-4 w-4 rounded-full border-2 ${homeDotClasses[exp.status]}`}
                />
                <span className="group-hover:text-primary-500 dark:group-hover:text-primary-400 text-base font-semibold text-gray-900 dark:text-gray-100">
                  {exp.company}
                </span>
                <span className="mt-1 text-center text-sm text-gray-500 dark:text-gray-400">
                  {exp.title}
                </span>
              </a>

              {/* Connector */}
              {idx < featured_experiences.length - 1 && (
                <div className="mx-3 flex items-center text-gray-300 dark:text-gray-600">
                  <div className="h-px w-8 bg-gray-300 dark:bg-gray-600" />
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}

          {/* Continuation indicator */}
          <span className="ml-4 text-xl tracking-widest text-gray-300 dark:text-gray-600">···</span>
        </div>
        <div className="mt-8 flex justify-end text-base leading-6 font-medium">
          <HoverLink href="/experience">All Experiences &rarr;</HoverLink>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="border-t border-gray-200 pt-10 dark:border-gray-700">
        <div className="space-y-2 pb-8 md:space-y-5">
          <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Featured Work
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Highlights from production, hackathon, and course projects.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          {featured.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-8 flex justify-end text-base leading-6 font-medium">
          <HoverLink href="/projects">All Projects &rarr;</HoverLink>
        </div>
      </div>
    </>
  )
}
