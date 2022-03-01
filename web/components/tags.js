import Link from 'next/link'

export default function Tags({ tags }) {
  const allTags = [].concat.apply([], tags).sort((a, b) => (a.title > b.title) ? 1 : -1)

  return (
    <>
      {allTags.length > 0 && (
        <ul aria-label="Tags">
          {allTags.map(tag => 
            tag.slug && (
              <li key={tag._id}>
                <Link href={`/${tag.type}/[slug]`} as={`/${tag.type}/${tag.slug}`}>
                  <a>{tag.title}</a>
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </>
  )
}
