import Link from 'next/link'

export default function DesignerInfo({ firstName, lastName, slug }) {
  const designerName = firstName ? `${firstName} ${lastName}` : lastName
  return (
    <>
      <p>Designed by{' '}
        {slug ? (
          <Link href="/designer/[slug]" as={`/designer/${slug}`}>
            <a>{designerName}</a>
          </Link>
        ) : ({designerName})}
      </p>
    </>
  )
}
