const siteMetadata = {
  title: 'Ted Gershon',
  author: 'Ted Gershon',
  headerTitle: 'Ted Gershon',
  description:
    'Software engineer at Carnegie Mellon University. Building data platforms, full-stack applications, and AI-powered tools.',
  language: 'en-us',
  theme: 'light',
  siteUrl: 'https://tedgershon.com',
  siteRepo: 'https://github.com/tedgershon/portfolio-website',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  email: 'tgershon@cmu.edu',
  github: 'https://github.com/tedgershon',
  linkedin: 'https://www.linkedin.com/in/tedgershon',
  locale: 'en-US',
  stickyNav: true,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
}

module.exports = siteMetadata
