import Link from 'next/link'

export default function DesignerInfo({ designer }) {
  const name = [designer.firstName, designer.lastName].filter(Boolean).join(' ')
  const slug = designer.slug
  return (
    <>
      <p>Designed by{' '}
        {slug ? (
          <Link href="/designer/[slug]" as={`/designer/${slug}`}>
            <a>{name}</a>
          </Link>
        ) : (
          <span>{name}</span>
        )}
      </p>
    </>
  )
}
