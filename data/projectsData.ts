export type ProjectScope = 'production' | 'nonprofit' | 'hackathon' | 'open-source' | 'academic'

export type ProjectCategory =
  | 'full-stack'
  | 'database'
  | 'mcp'
  | 'agent-orchestration'
  | 'data-structures'
  | 'class-design'
  | 'microservices'
  | 'systems'
  | 'game-dev'
  | 'open-source'

export interface Project {
  title: string
  description: string
  techStack: string[]
  scope: ProjectScope
  category: ProjectCategory
  impact?: string
  website?: string
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

export const categoryLabels: Record<ProjectCategory, string> = {
  'full-stack': 'Full Stack',
  database: 'Database',
  mcp: 'MCP',
  'agent-orchestration': 'Agent Orchestration',
  'data-structures': 'Data Structures',
  'class-design': 'Class Design',
  microservices: 'Microservices',
  systems: 'Systems',
  'game-dev': 'Game',
  'open-source': 'Open Source',
}

export const categoryColors: Record<ProjectCategory, string> = {
  'full-stack': 'border-sky-400 text-sky-700 dark:border-sky-500 dark:text-sky-300',
  database: 'border-orange-400 text-orange-700 dark:border-orange-500 dark:text-orange-300',
  mcp: 'border-rose-400 text-rose-700 dark:border-rose-500 dark:text-rose-300',
  'agent-orchestration':
    'border-fuchsia-400 text-fuchsia-700 dark:border-fuchsia-500 dark:text-fuchsia-300',
  'data-structures': 'border-teal-400 text-teal-700 dark:border-teal-500 dark:text-teal-300',
  'class-design': 'border-indigo-400 text-indigo-700 dark:border-indigo-500 dark:text-indigo-300',
  microservices: 'border-lime-400 text-lime-700 dark:border-lime-500 dark:text-lime-300',
  systems: 'border-slate-400 text-slate-700 dark:border-slate-500 dark:text-slate-300',
  'game-dev': 'border-pink-400 text-pink-700 dark:border-pink-500 dark:text-pink-300',
  'open-source': 'border-violet-400 text-violet-700 dark:border-violet-500 dark:text-violet-300',
}

const projectsData: Project[] = [
  {
    title: 'Donut Dash Website',
    website: 'https://pghdonutdash.com/',
    description:
      'Full-stack platform for a 501(c)(3) initiative that has raised $263,000+ since 2018, serving 12,000+ users. Currently leading sprint-based migration to Next.js architecture.',
    techStack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Cloudflare'],
    scope: 'nonprofit',
    category: 'full-stack',
    impact: 'January 2025 — Present',
  },
  {
    title: 'Odyssey',
    website: 'https://odyssey-wp6e.onrender.com/',
    description: `Placed 2/278 teams for the Creative Arts Track. Built a MCP-powered Literary Map with four subagents to track and index a story along its geographical and historical context.`,
    techStack: ['Python', 'Django', 'TypeScript', 'Dedalus MCP', 'Google Maps API'],
    scope: 'hackathon',
    category: 'mcp',
    impact: 'February 2026, [TartanHacks](https://www.tartanhacks.com/) @ Carnegie Mellon',
    github: 'https://github.com/thejonathangu/Odyssey',
  },
  {
    title: 'SafePlate',
    website: 'https://safeplate-6nfw.onrender.com/',
    description: `Placed 1/84 teams for "Best Use of Airia". Built a full-stack Django app to ensure recipe safety through automated validation and retry logic for allergy and ingredient constraints.`,
    techStack: ['Python', 'Django', 'Airia (Agentic AI)', 'OpenAI', 'Claude'],
    scope: 'hackathon',
    category: 'agent-orchestration',
    impact: 'November 2025, [NOVA AI Hackathon](https://nova.scottylabs.org/) @ Carnegie Mellon',
    github: 'https://github.com/tedgershon/SafePlate',
  },
  {
    title: 'NodeBB Open-Source Contributions',
    website: 'https://nodebb.org/',
    description:
      'Contributed to the NodeBB open-source forum platform across 3 merged pull requests, adding user profile fields and a complete comment pinning system via API endpoints.',
    techStack: ['TypeScript', 'Node.js', 'Redis', 'Express'],
    scope: 'open-source',
    category: 'microservices',
    impact: 'Septemper — December 2025',
    github: 'https://github.com/CMU-313/nodebb-fall-2025-foundations',
  },
  {
    title: 'KAYAK DB',
    description:
      "Modeled, designed, and implemented a 13-table PostgreSQL database replicating Kayak.com's schema, supporting user operations via Python CLI on CSV-sourced sample data.",
    techStack: ['SQL', 'Python', 'PostgreSQL', 'Database Design'],
    scope: 'academic',
    category: 'database',
    impact: 'November — December 2024',
    github: 'https://github.com/tedgershon/KAYAK-DB',
  },
  {
    title: 'Roi du Pain Bakery Website',
    description:
      'Engineered 4-role authorization system (CanCan) with granular permissions for customers, employees, and admins.  Built RESTful JSON APIs with Active Record serializers and validation for inventory, duplicates, and payment rules.',
    techStack: ['Ruby', 'Rails', 'HTML', 'CSS', 'Testing'],
    scope: 'academic',
    category: 'full-stack',
    impact: 'February — April 2025',
    github: 'https://github.com/tedgershon/Roi-du-Pain',
  },
  {
    title: 'Scotty Surfers',
    description:
      'A CMU-themed take on Subway Surfers, built using the CMU Graphics library. Features procedurally generated obstacles, sprite animation, and real-time collision detection.',
    techStack: ['Python', 'CMU Graphics'],
    scope: 'hackathon',
    category: 'game-dev',
    impact: 'November 2023, [Hack112](https://www.cs.cmu.edu/~112/) @ Carnegie Mellon',
    github: 'https://github.com/tedgershon/ScottySurfers',
  },
  {
    title: 'C0VM',
    description:
      'Wrote a program in C to interpret C0 / C1 bytecode and run instructions in real time (similar to JVM), and extended C0VM by adding support for function pointers and void* pointers.',
    techStack: ['C'],
    scope: 'academic',
    category: 'systems',
    impact: 'April 2024',
  },
  {
    title: 'Lights Out Solver',
    description:
      'Implemented backtracking, DFS, and DP to solve an arbitrary board for the game Lights Out, and a hashmap with a custom hashing function to solve by storing pre-checked paths.',
    techStack: ['C'],
    scope: 'academic',
    category: 'data-structures',
    impact: 'March 2024',
  },
  {
    title: 'Complex Static Library',
    description:
      'Developed a static library which manages complex numbers, functions, and contains a makefile and driver program.',
    techStack: ['C++', 'Git', 'Kanban', 'Scrum'],
    scope: 'academic',
    category: 'class-design',
    impact: 'January 2023',
    github: 'https://github.com/vsangs10/Komplex-Kanaban-Project',
  },
  {
    title: 'LASAlle',
    description:
      'Created an airport navigation tool which uses linked lists to route flights to and from Austin Bergstrom airport, optimizing connections, proximity to neighboring airports, and time data.',
    techStack: ['C++'],
    scope: 'academic',
    category: 'data-structures',
    impact: 'October 2022',
    github: 'https://github.com/tedgershon/LASAlle',
  },
]

export default projectsData
