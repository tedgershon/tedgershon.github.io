import '@/styles/tailwind.css'

import Analytics from '@/components/Analytics'
import Header from '@/components/layout/Header'
import SectionContainer from '@/components/layout/SectionContainer'
import Footer from '@/components/layout/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from '@/components/ThemeProviders'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html lang={siteMetadata.language} className={`scroll-smooth`} suppressHydrationWarning>
      <link rel="icon" href={`${basePath}/static/favicon/favicon.ico`} sizes="48x48" />
      <link rel="icon" href={`${basePath}/static/favicon/favicon.svg`} type="image/svg+xml" />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`${basePath}/static/favicon/favicon-96x96.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${basePath}/static/favicon/apple-touch-icon.png`}
      />
      <link rel="manifest" href={`${basePath}/static/favicon/site.webmanifest`} />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <body className="bg-gray-50 pl-[calc(100vw-100%)] text-gray-950 antialiased dark:bg-gray-950 dark:text-gray-50">
        <ThemeProviders>
          <Analytics umamiWebsiteId={siteMetadata.analytics?.umamiAnalytics?.umamiWebsiteId} />
          <SectionContainer>
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
