import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

const handler =
  siteMetadata.newsletter?.provider &&
  NewsletterAPI({
    provider: siteMetadata.newsletter.provider,
  })

export { handler as GET, handler as POST }
