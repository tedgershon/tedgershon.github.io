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
    period: 'May 2026 - Aug 2026',
    description: [
      'Developed a custom Power Query connector to enable unattended refreshes of Excel Online (153M users) workbooks via Dataflows, executing operations through a live, server-side session via authenticated Graph calls.',
      'Engineered OAuth2 delegated token lifecycle from interactive consent to Fabric-managed (DMTS) credential replay for headless runs, with a TestConnection gate detecting expired tokens before refresh.',
      'Collaborated with connector, dataflow, Excel, DMTS, and OAuth SMEs to design cloud-aware authentication, delegated Graph scopes, and schema metadata modeled after first-party Microsoft connectors.',
    ],
    status: 'previous',
  },
  {
    title: 'Data Engineer Intern',
    company: 'PennyBacker',
    companyUrl: 'https://www.pennybackercap.com/',
    location: 'Austin, TX',
    period: 'May 2025 - Aug 2025',
    description: [
      'Built 3 data models powering client-facing Power BI dashboards for suite managing $5.1B AUM across 4 teams.',
      'Translated real estate and executive dashboard requirements into dbt models, refactoring 14 with Jinja templating to run on Databricks Spark SQL, cutting compile time by up to 85% and enabling property-level analysis.',
      'Refactored GBDT training pipeline in Python (sklearn, MLflow) to centralize feature engineering across 3 asset classes and automate logging for 36 configurations, improving consistency and eliminating manual output tracking.',
    ],
    status: 'previous',
  },
  {
    title: 'Chairman & Lead Developer',
    company: 'Donut Dash',
    companyUrl: 'https://pghdonutdash.com/',
    location: 'Pittsburgh, PA',
    period: 'Jan 2025 - Present',
    description: [
      'Directed development and operations for 501(c)(3) event that has raised $265,000+ since 2018 (12k+ annual site visits), leading site migration to a Next.js/MongoDB monorepo and authoring the full issue backlog.',
      'Integrated Stripe Checkout powering all race registrations and donations, finalizing paid registrations and automating thank-you and confirmation emails from Stripe webhooks via the Gmail REST API (OAuth2).',
      'Hardened admin console by resolving production bugs and authoring 130+ unit, integration, and end-to-end tests.',
    ],
    status: 'current',
  },
  {
    title: 'Technical Enablement Intern',
    company: 'ERIN',
    companyUrl: 'https://erinapp.com/platform/employee-referrals/',
    location: 'Pittsburgh, PA',
    period: 'June 2024 - Aug 2024',
    description: [
      "Authored 33 technical guides on SSO authentication, ATS/HRIS integrations, and AI-powered job matching features to support platform adoption for 1.1M+ enterprise users across ERIN's customer portfolio.",
      'Restructured HubSpot knowledge base taxonomy and routing, reducing content navigation from 6-7 clicks to 3.',
    ],
    status: 'previous',
  },
]

export const leadership: Experience[] = [
  {
    title: 'Teaching Assistant, IS Milieux (67-250)',
    company: 'Carnegie Mellon University',
    companyUrl: 'https://www.heinz.cmu.edu/',
    location: 'Pittsburgh, PA',
    period: 'Jan 2025 - May 2025',
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
    period: 'May 2024 - May 2025',
    description: [
      "Coordinated Pittsburgh's largest hackathon, TartanHacks, with 750+ participants from over 18 countries.",
      "Led the first iteration of NOVA, CMU's first GenAI hackathon with 130+ participants and 29 submitted projects.",
    ],
    status: 'previous',
  },
]

export const skills = {
  languages: ['TypeScript/JavaScript', 'Python', 'SQL', 'C', 'Java', 'Ruby'],
  platforms: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Databricks', 'Spark', 'dbt'],
  frameworks: ['Next.js', 'React', 'Node.js', 'Git', 'CI/CD', 'Django', 'Rails', 'MLflow'],
}
