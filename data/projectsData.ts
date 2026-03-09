export type ProjectScope = 'production' | 'nonprofit' | 'hackathon' | 'open-source' | 'academic'

export interface Project {
  title: string
  description: string
  techStack: string[]
  scope: ProjectScope
  impact?: string
  href?: string
  github?: string
  imgSrc?: string
  videoSrc?: string
}

export const scopeLabels: Record<ProjectScope, string> = {
  production: 'Production',
  nonprofit: 'Nonprofit',
  hackathon: 'Hackathon',
  'open-source': 'Open Source',
  academic: 'Academic',
}

export const scopeColors: Record<ProjectScope, string> = {
  production: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
  nonprofit: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  hackathon: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  'open-source': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  academic: 'bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-300',
}

const projectsData: Project[] = [
  {
    title: 'Odyssey',
    description: `Placed 2/278 teams for Creative Arts Track. Built a MCP-powered Literary Map with four subagents to track and index a story along its geographical and historical context.`,
    techStack: ['Python', 'Django', 'TypeScript', 'Dedalus MCP', 'Google Maps API'],
    scope: 'hackathon',
    impact: 'February 2026, [TartanHacks](https://www.tartanhacks.com/) @ Carnegie Mellon',
    github: 'https://github.com/thejonathangu/Odyssey',
  },
  {
    title: 'Donut Dash Website',
    description:
      'Full-stack platform for a 501(c)(3) initiative that has raised $263,000+ since 2018, serving 12,000+ users. Currently leading sprint-based migration to Next.js architecture.',
    techStack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Cloudflare'],
    scope: 'nonprofit',
    impact: 'January 2025 — Present',
  },
  {
    title: 'SafePlate',
    description: `Placed 1/84 teams for "Best Use of Airia". Built a full-stack Django app to ensure recipe safety through automated validation and retry logic for allergy and ingredient constraints.`,
    techStack: ['Python', 'Django', 'Airia (Agentic AI)', 'OpenAI', 'Claude'],
    scope: 'hackathon',
    impact: 'November 2025, [NOVA AI Hackathon](https://nova.scottylabs.org/) @ Carnegie Mellon',
    github: 'https://github.com/tedgershon/SafePlate',
  },
  {
    title: 'NodeBB Open-Source Contributions',
    description:
      'Contributed to the NodeBB open-source forum platform across 3 merged pull requests, adding user profile fields and a complete comment pinning system via API endpoints.',
    techStack: ['TypeScript', 'Node.js', 'Redis', 'Express'],
    scope: 'open-source',
    impact: 'Septemper — December 2025',
    github: 'https://github.com/tedgershon/NodeBB',
  },
  {
    title: 'KAYAK Database Model',
    description:
      'Designed and implemented a database modeled after KAYAK.com. Created user stories, designed conceptual, relational, and physical models, and implemented operations with Python, PostgreSQL, sample CSV data, and a command-line interface.',
    techStack: ['Python', 'PostgreSQL', 'Database Design', 'SQL'],
    scope: 'academic',
    github: 'https://github.com/tedgershon/KAYAK-DB',
  },
  {
    title: 'Roi du Pain (67-272)',
    description:
      "Full-stack web application for a start-up bakery venture built as the capstone project for CMU's Application Design & Development course. Implemented with Ruby on Rails following MVC architecture, test-driven development, and RESTful API design.",
    techStack: ['Ruby', 'Rails', 'HTML', 'CSS', 'Testing'],
    scope: 'academic',
    github: 'https://github.com/tedgershon/272',
  },
  {
    title: 'Scotty Surfers',
    description:
      'A CMU-themed take on Subway Surfers, built for the Hack112 hackathon using the CMU Graphics library. Features procedurally generated obstacles, sprite animation, and real-time collision detection.',
    techStack: ['Python', 'CMU Graphics'],
    scope: 'academic',
    github: 'https://github.com/tedgershon/ScottySurfers',
  },
]

export default projectsData
