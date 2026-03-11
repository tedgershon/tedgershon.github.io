export type ExperienceStatus = 'upcoming' | 'current' | 'previous'

export interface Experience {
  title: string
  company: string
  companyUrl: string
  location: string
  period: string
  description: string[]
  status: ExperienceStatus
}

export const experiences: Experience[] = [
  {
    title: 'Software Engineer Intern',
    company: 'Microsoft',
    companyUrl: 'https://www.microsoft.com/',
    location: 'Redmond, WA',
    period: 'May 2026 — Aug 2026',
    description: [
      'Incoming summer intern on the Power Query Online team within Azure Data (Cloud & AI).',
    ],
    status: 'upcoming',
  },
  {
    title: 'Lead Developer',
    company: 'Donut Dash',
    companyUrl: 'https://pghdonutdash.com/',
    location: 'Pittsburgh, PA',
    period: 'Jan 2025 — Present',
    description: [
      'Directing technical development and operations for 501(c)(3) initiative that has raised $263,000+ since 2018, managing full-stack platform (React, Node.js/Express, MongoDB, Stripe) supporting 12k+ users.',
      'Re-architected Stripe integration for campaign-based payment workflows, migrated email automations from deprecated domain, and managed Cloudflare deployment and DNS configuration.',
      'Currently leading sprint-based migration to Next.js architecture, implementing bug fixes and feature improvements.',
    ],
    status: 'current',
  },
  {
    title: 'Data Engineer Intern',
    company: 'PennyBacker',
    companyUrl: 'https://www.pennybackercap.com/',
    location: 'Austin, TX',
    period: 'May 2025 — Aug 2025',
    description: [
      'Delivered 5,300+ lines of production code powering investment dashboards used daily by 54 users across 4 teams managing $5.1B AUM, integrating internal and external data sources via CI/CD workflows with 143 test scripts.',
      'Refactored 14 Spark SQL models in Databricks using dbt with dynamic Jinja templating, cutting compile time by 57–85% and enabling property-level analysis for real estate and executive teams.',
      'Refactored GBDT training pipeline in Python (sklearn, MLflow) to centralize feature engineering across 3 asset classes and automate logging for 36 configurations.',
    ],
    status: 'previous',
  },
  {
    title: 'Technical Solutions Intern',
    company: 'ERIN',
    companyUrl: 'https://erinapp.com/platform/employee-referrals/',
    location: 'Pittsburgh, PA',
    period: 'June 2024 — Aug 2024',
    description: [
      'Authored 33 technical guides on SSO authentication, ATS/HRIS integrations, and AI-powered job matching features to support platform adoption for 1.1M+ enterprise users.',
      'Restructured HubSpot knowledge base taxonomy and routing, reducing content navigation from 6–7 clicks to 3.',
    ],
    status: 'previous',
  },
]

export const leadership: Experience[] = [
  {
    title: 'Chairman',
    company: 'Donut Dash',
    companyUrl: 'https://pghdonutdash.com/',
    location: 'Pittsburgh, PA',
    period: 'Jan 2025 — Present',
    description: [
      'Renovating website and leading operations, logistics, outreach, communication, and social media initiatives for the 501(c)(3) non-profit.',
    ],
    status: 'current',
  },
  {
    title: 'Information Systems Teaching Assistant',
    company: 'Carnegie Mellon University',
    companyUrl: 'https://www.heinz.cmu.edu/',
    location: 'Pittsburgh, PA',
    period: 'Jan 2025 — May 2025',
    description: [
      'Supported 120+ students through lab debugging and grading, focusing on relational database modeling (ERDs), SQL querying, and front-end web development (HTML/CSS/JS) with deployment via GitHub Pages.',
    ],
    status: 'previous',
  },
  {
    title: 'Head of Logistics',
    company: 'ScottyLabs',
    companyUrl: 'https://www.scottylabs.org/',
    location: 'Pittsburgh, PA',
    period: 'May 2024 — May 2025',
    description: [
      "Coordinated Pittsburgh's largest hackathon, TartanHacks, with 750+ participants from over 18 countries.",
      "Led the first iteration of NOVA, CMU's first GenAI hackathon with 130+ participants and 29 submitted projects.",
    ],
    status: 'previous',
  },
]

export const skills = {
  languages: ['Python', 'SQL', 'TypeScript/JavaScript', 'C', 'Java', 'Ruby'],
  platforms: ['Databricks', 'Spark', 'dbt', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis'],
  frameworks: ['Git', 'CI/CD', 'Next.js', 'Node.js', 'React', 'MLflow', 'Django', 'Rails'],
}
