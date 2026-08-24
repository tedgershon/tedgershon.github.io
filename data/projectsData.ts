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
  demoVideo?: string
  designDiagram?: string
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
    imgSrc: '/static/images/donut-dash-site.png',
    designDiagram: '/static/images/donut-dash-design-diagram.png',
    description:
      'Registration and donations platform for a charity race (700 racers, 12K+ annual site visits) which features a payment finalizer, admin dashboard for race-day check-in, and automated database backups to off-site storage',
    techStack: ['Next.js', 'Cloudflare Workers', 'GCP', 'MongoDB', 'Stripe'],
    scope: 'nonprofit',
    category: 'full-stack',
    impact: 'January 2025 - Present',
  },
  {
    title: 'PQ Connector Builder',
    demoVideo: '/static/videos/pq-agent-skill-oauth-demo.mp4',
    imgSrc: '/static/images/pq-connector-builder-demo.png',
    description:
      'Agent skill for building Power Query (M) connectors from REST API sources in Microsoft Fabric. Guides auth setup, prefills connector code from stored templates, validates via the PQ SDK, and audits for hardcoded secrets and antipatterns',
    techStack: ['Power Query SDK', 'M Language', 'TypeScript'],
    scope: 'open-source',
    category: 'agent-orchestration',
    impact: 'July 2026',
  },
  {
    title: 'BananaGains',
    imgSrc: '/static/images/bananagains-site.png',
    description:
      'Campus prediction market with a transactional betting engine, dual-track community resolution voting, and real-time WebSocket infrastructure backed by Redis pub/sub',
    techStack: ['PL/pgSQL', 'Redis', 'WebSockets', 'Node.js'],
    scope: 'production',
    category: 'full-stack',
    impact: 'April - May 2026',
    github: 'https://github.com/tedgershon/BananaGains',
  },
  {
    title: 'Odyssey',
    website: 'https://odyssey-wp6e.onrender.com/',
    imgSrc: '/static/images/odyssey-site.png',
    designDiagram: '/static/images/odyssey-design-diagram.png',
    description: `Placed Top 10 out of 278 teams and #2 for the Creative Arts Track. Built a MCP-powered Literary Map with four subagents to track a story along its geographical and historical context`,
    techStack: ['Django', 'React', 'MCP', 'OpenAI', 'Mapbox GL JS'],
    scope: 'hackathon',
    category: 'mcp',
    impact: 'February 2026, [TartanHacks](https://www.tartanhacks.com/) @ Carnegie Mellon',
    github: 'https://github.com/thejonathangu/Odyssey',
  },
  {
    title: 'MSFT Accessibility Hub',
    imgSrc: '/static/images/accessability-hub-site.png',
    description:
      'Unified suite of accessibility tools for people with disabilities. Connects Microsoft Scout to multimodal input sources and packages agentic OS extensions based on empirically-backed disability aids from CMU, UW, UMD, and GT labs',
    techStack: ['Electron', 'TypeScript', 'Python', 'OpenCV', 'MCP'],
    scope: 'hackathon',
    category: 'agent-orchestration',
    impact: 'June 2026, InternHacks @ Microsoft',
    github: 'https://github.com/tedgershon/MSFT-AccessAbility-Hub',
  },
  {
    title: 'SafePlate',
    website: 'https://safeplate-6nfw.onrender.com/',
    imgSrc: '/static/images/safeplate-agent-design.png',
    description: 'Placed 1/84 teams for "Best Use of Airia". Built a full-stack Django app to ensure recipe safety through automated validation and retry logic for allergy and ingredient constraints',
    techStack: ['Django', 'Airia (Agentic AI)', 'OpenAI', 'Claude'],
    scope: 'hackathon',
    category: 'agent-orchestration',
    impact: 'November 2025, [NOVA AI Hackathon](https://nova.scottylabs.org/) @ Carnegie Mellon',
    github: 'https://github.com/tedgershon/SafePlate',
  },
  {
    title: 'Roi du Pain Bakery Website',
    imgSrc: '/static/images/roi-du-pain-site.png',
    description:
      'Engineered 4-role authorization system (CanCan) with granular permissions for customers, employees, and admins. Built RESTful JSON APIs with Active Record serializers and validation for inventory, duplicates, and payment rules',
    techStack: ['Ruby on Rails', 'React'],
    scope: 'academic',
    category: 'full-stack',
    impact: 'February - April 2025',
    github: 'https://github.com/tedgershon/Roi-du-Pain',
  },
  // {
  //   title: 'NodeBB Contributions',
  //   website: 'https://nodebb.org/',
  //   description:
  //     'Contributed to a course-maintained fork of the NodeBB forum platform across 3 merged pull requests, adding user profile fields and a complete comment pinning system via API endpoints',
  //   techStack: ['TypeScript', 'Node.js', 'Redis', 'Express'],
  //   scope: 'open-source',
  //   category: 'microservices',
  //   impact: 'September - December 2025',
  //   github: 'https://github.com/CMU-313/nodebb-fall-2025-foundations',
  // },
  {
    title: 'KAYAK DB',
    imgSrc: '/static/images/kayak-db-schema.png',
    description:
      "Modeled, designed, and implemented a 13-table PostgreSQL database replicating Kayak.com's schema, supporting user operations via Python CLI on CSV-sourced sample data",
    techStack: ['PostgreSQL', 'Python'],
    scope: 'academic',
    category: 'database',
    impact: 'November - December 2024',
    github: 'https://github.com/tedgershon/KAYAK-DB',
  },
]

export default projectsData
