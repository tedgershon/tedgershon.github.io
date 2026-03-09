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
  hackathon: 'Hackathon Winner',
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
    title: 'Pennybacker Investment Dashboards',
    description:
      'Built production data pipelines and investment dashboards used daily by 54 users across 4 teams managing $5.1B AUM. Refactored 14 Spark SQL models with dbt and dynamic Jinja templating, cutting compile time by 57–85%. Rebuilt GBDT training pipeline to centralize feature engineering across 3 asset classes.',
    techStack: ['Python', 'Databricks', 'Spark SQL', 'dbt', 'MLflow', 'sklearn', 'CI/CD'],
    scope: 'production',
    impact: '5,300+ lines of production code · 54 daily users · $5.1B AUM',
  },
  {
    title: 'PGH Donut Dash',
    description:
      'Full-stack platform for a 501(c)(3) initiative that has raised $263,000+ since 2018, serving 12,000+ users. Re-architected Stripe integration for campaign-based payment workflows, migrated email automations, and managed Cloudflare deployment. Currently leading sprint-based migration to Next.js architecture.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Next.js', 'Cloudflare'],
    scope: 'nonprofit',
    impact: '$263K+ raised · 12K+ users · 501(c)(3)',
  },
  {
    title: 'SafePlate',
    description:
      "Won 1st place out of 84 teams at CMU's NOVA Generative AI Hackathon. Engineered multi-agent orchestration system using GPT-4.1 and Claude Sonnet 4 with automated validation and retry logic for allergen-free recipe generation. Built full-stack Django app with 37-unit integration test suite covering LLM outputs and agent failure modes.",
    techStack: ['Python', 'Django', 'Airia', 'OpenAI', 'Claude', 'Agentic AI'],
    scope: 'hackathon',
    impact: '1st place / 84 teams · NOVA GenAI Hackathon',
    github: 'https://github.com/tedgershon/SafePlate',
  },
  {
    title: 'NodeBB Open-Source Contributions',
    description:
      'Contributed to the NodeBB open-source forum platform across 3 merged pull requests. Added user profile fields (university, location) and built a complete comment pinning system with PUT/DELETE API endpoints, route and controller validation, client UI logic, and persistent hash-based storage with integration tests.',
    techStack: ['TypeScript', 'Node.js', 'Redis', 'Express'],
    scope: 'open-source',
    impact: '3 merged PRs · Profile fields & comment pinning',
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
