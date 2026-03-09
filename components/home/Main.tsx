import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/ui/Card'
import { Mail, Github, Linkedin, Resume } from '@/components/social-icons/icons'
import profilePhoto from '../../public/static/images/profile2.jpg'

const FEATURED_COUNT = 2

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

  return (
    <>
      <div id="home" className="absolute top-0" />

      <HeroSection />

      <AboutSection />

      {/* Featured Projects */}
      <div className="border-t border-gray-200 pt-10 dark:border-gray-700">
        <div className="space-y-2 pb-8 md:space-y-5">
          <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Featured Work
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Highlights from production, nonprofit, and competitive projects.
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
