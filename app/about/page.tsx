import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from '@/lib/seo'
import authorData from '@/data/authorData'
import Link from '@/components/ui/Link'

export const metadata = genPageMetadata({ title: 'About Me' })

export default function Page() {
  return (
    <AuthorLayout content={authorData}>
      <p>
        Hi! I&apos;m Ted, and I grew up in Austin, Texas where I attended the{' '}
        <Link href="https://lasa.austinschools.org/">Liberal Arts and Science Academy</Link>.
        Currently, I&apos;m a student at{' '}
        <Link href="https://www.cmu.edu/">Carnegie Mellon University</Link> studying Information
        Systems with minors in Software Engineering and Artificial Intelligence. I&apos;ve worked on
        production data pipelines, built full-stack web applications, and integrated external
        systems through APIs for authentication, payments, and cloud infrastructure. Outside of
        tech, I play tennis for{' '}
        <Link href="https://www.instagram.com/tartantennis/">CMU&apos;s varsity team</Link>.
      </p>
      <p>
        I&apos;m fascinated by how data and AI are reshaping our most fundamental institutions, from
        healthcare to transportation to public policy. I&apos;m particularly interested in the
        intersection of system integration, data, and customer-facing software.
      </p>
    </AuthorLayout>
  )
}
