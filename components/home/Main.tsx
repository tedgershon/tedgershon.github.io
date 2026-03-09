import Link from '@/components/ui/Link'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/ui/Card'

const FEATURED_COUNT = 2

export default function Home() {
  const featured = projectsData.slice(0, FEATURED_COUNT)

  return (
    <>
      <div id="home" className="absolute top-0" />
      {/* Hero */}
      <div className="space-y-8 pt-8 pb-10 md:space-y-10 md:pt-12 md:pb-16">
        <div className="space-y-4">
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
            Ted Gershon
          </h1>
          <p className="text-xl leading-8 text-gray-600 md:text-2xl dark:text-gray-300">
            Developer. Engineer. Data Enthusiast.
          </p>
          <p className="max-w-2xl text-lg leading-7 text-gray-500 dark:text-gray-400">LALAL</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="bg-primary-500 hover:bg-primary-600 rounded-md px-6 py-3 text-sm font-medium text-white shadow-sm transition"
          >
            View Projects
          </Link>
          <Link
            href="/experience"
            className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            View Experience
          </Link>
          <Link
            href={siteMetadata.github}
            className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            GitHub
          </Link>
        </div>
      </div>

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
          <Link
            href="/projects"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            All Projects &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
