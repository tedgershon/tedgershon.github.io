export interface Experience {
  title: string
  company: string
  location: string
  period: string
  type: 'work' | 'education' | 'leadership'
  description: string[]
  upcoming?: boolean
}

export const workExperience: Experience[] = [
  {
    title: 'Software Engineer Intern, Azure Data (Cloud & AI)',
    company: 'Microsoft',
    location: 'Redmond, WA',
    period: 'May 2026 — Aug 2026',
    type: 'work',
    description: [
      'Incoming intern on the Power Query Online team, working with Microsoft Fabric for ELT and data processing.',
    ],
    upcoming: true,
  },
  {
    title: 'Data Engineer Intern',
    company: 'Pennybacker',
    location: 'Austin, TX',
    period: 'May 2025 — Aug 2025',
    type: 'work',
    description: [
      'Delivered 5,300+ lines of production code powering investment dashboards used daily by 54 users across 4 teams managing $5.1B AUM, integrating internal and external data sources via CI/CD workflows with 143 test scripts.',
      'Refactored 14 Spark SQL models in Databricks using dbt with dynamic Jinja templating, cutting compile time by 57–85% and enabling property-level analysis for real estate and executive teams.',
      'Refactored GBDT training pipeline in Python (sklearn, MLflow) to centralize feature engineering across 3 asset classes and automate logging for 36 configurations.',
    ],
  },
  {
    title: 'Technical Solutions Intern',
    company: 'ERIN',
    location: 'Pittsburgh, PA',
    period: 'June 2024 — Aug 2024',
    type: 'work',
    description: [
      'Authored 33 technical guides on SSO authentication, ATS/HRIS integrations, and AI-powered job matching features to support platform adoption for 1.1M+ enterprise users.',
      'Restructured HubSpot knowledge base taxonomy and routing, reducing content navigation from 6–7 clicks to 3.',
    ],
  },
]

export const education: Experience[] = [
  {
    title: 'B.S. in Information Systems',
    company: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    period: 'Aug 2023 — May 2027',
    type: 'education',
    description: [
      'Minors in Software Engineering and Artificial Intelligence.',
      'Relevant Coursework: Data Structures & Algorithms, Computer Systems, Foundations of Software Engineering, Principles of Software Construction, Web App Development, Database Design, Machine Learning.',
    ],
  },
]

export const leadership: Experience[] = [
  {
    title: 'Head of Logistics',
    company: 'ScottyLabs',
    location: 'Pittsburgh, PA',
    period: 'May 2024 — May 2025',
    type: 'leadership',
    description: [
      "Coordinated Pittsburgh's largest hackathon, TartanHacks, with 750+ participants from over 18 countries.",
      "Led the first iteration of NOVA, CMU's first GenAI hackathon with 130+ participants and 29 submitted projects.",
    ],
  },
  {
    title: 'Teaching Assistant, Information Systems Milieux',
    company: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    period: 'Jan 2025 — May 2025',
    type: 'leadership',
    description: [
      'Supported 120+ students through lab debugging and grading, focusing on relational database modeling (ERDs), SQL querying, and front-end web development with deployment via GitHub Pages.',
    ],
  },
  {
    title: 'Varsity Tennis',
    company: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    period: 'Aug 2023 — Present',
    type: 'leadership',
    description: [
      'Member of #2 NCAA DIII Tennis Recruiting Class. Started at #2 doubles (2025) and #3 doubles (2024, 2023).',
    ],
  },
]

export const skills = {
  languages: ['Python', 'SQL', 'TypeScript/JavaScript', 'C', 'Java', 'Ruby'],
  platforms: ['Databricks', 'Spark', 'dbt', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis'],
  frameworks: ['Git', 'CI/CD', 'Next.js', 'Node.js', 'React', 'MLflow', 'Django', 'Rails'],
}
