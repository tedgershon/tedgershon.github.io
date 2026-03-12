'use client'

import Script from 'next/script'

interface UmamiAnalyticsProps {
  umamiWebsiteId?: string
}

export default function Analytics({ umamiWebsiteId }: UmamiAnalyticsProps) {
  if (!umamiWebsiteId) return null

  return (
    <Script async src="https://analytics.umami.is/script.js" data-website-id={umamiWebsiteId} />
  )
}
