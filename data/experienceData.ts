export interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  upcoming?: boolean
}

export const experiences: Experience[] = [
  {
    title: 'Software Engineer Intern, Azure Data (Cloud & AI)',
    company: 'Microsoft',
    location: 'Redmond, WA',
    period: 'May 2026 — Aug 2026',
    description: [
      'Incoming intern on the Power Query Online team, working with Microsoft Fabric for ELT and data processing.',
    ],
    upcoming: true,
  },
  {
    title: 'Data Engineer Intern',
    company: 'PennyBacker',
    location: 'Austin, TX',
    period: 'May 2025 — Aug 2025',
    description: [
      'Delivered 5,300+ lines of production code powering investment dashboards used daily by 54 users across 4 teams managing $5.1B AUM, integrating internal and external data sources via CI/CD workflows with 143 test scripts.',
      'Refactored 14 Spark SQL models in Databricks using dbt with dynamic Jinja templating, cutting compile time by 57–85% and enabling property-level analysis for real estate and executive teams.',
      'Refactored GBDT training pipeline in Python (sklearn, MLflow) to centralize feature engineering across 3 asset classes and automate logging for 36 configurations.',
    ],
  },
  {
    title: 'Lead Developer',
    company: 'Donut Dash',
    location: 'Pittsburgh, PA',
    period: 'Jan 2025 — Present',
    description: [
      'Full-stack platform for a 501(c)(3) initiative that has raised $263,000+ since 2018, serving 12,000+ users.',
      'Re-architected Stripe integration for campaign-based payment workflows, migrated email automations, and managed Cloudflare deployment.',
      'Currently leading sprint-based migration to Next.js architecture.',
    ],
  },
  {
    title: 'Technical Solutions Intern',
    company: 'ERIN',
    location: 'Pittsburgh, PA',
    period: 'June 2024 — Aug 2024',
    description: [
      'Authored 33 technical guides on SSO authentication, ATS/HRIS integrations, and AI-powered job matching features to support platform adoption for 1.1M+ enterprise users.',
      'Restructured HubSpot knowledge base taxonomy and routing, reducing content navigation from 6–7 clicks to 3.',
    ],
  },
  {
    title: 'Head of Logistics',
    company: 'ScottyLabs',
    location: 'Pittsburgh, PA',
    period: 'May 2024 — May 2025',
    description: [
      "Coordinated Pittsburgh's largest hackathon, TartanHacks, with 750+ participants from over 18 countries.",
      "Led the first iteration of NOVA, CMU's first GenAI hackathon with 130+ participants and 29 submitted projects.",
    ],
  },
]

export const skills = {
  languages: ['Python', 'SQL', 'TypeScript/JavaScript', 'C', 'Java', 'Ruby'],
  platforms: ['Databricks', 'Spark', 'dbt', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis'],
  frameworks: ['Git', 'CI/CD', 'Next.js', 'Node.js', 'React', 'MLflow', 'Django', 'Rails'],
}
