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
        Systems with minors in Software Engineering and Artificial Intelligence. Outside of tech, I
        play tennis for{' '}
        <Link href="https://www.instagram.com/tartantennis/">CMU&apos;s varsity team</Link>.
      </p>
      <p>
        I&apos;m fascinated by the future of big data and its endless applications—from deriving
        healthcare insights to enabling smarter decision-making to optimizing tech, transportation,
        public policy initiatives, and more. I believe future innovation hinges on our ability to
        effectively manage data and derive meaningful insights to inform how we run our most
        fundamental institutions. I&apos;m particularly interested in data infrastructure as the
        backbone for large-scale frontier AI systems.
      </p>
    </AuthorLayout>
  )
}
