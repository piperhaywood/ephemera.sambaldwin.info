import Link from 'next/link'

export default function ItemPagination({next, prev}) {
  return (
    <>
      {(next || prev) && (
        <nav>
          <ul>
            {(next) && (
              <li>
                <Link href="/item[slug]" as={`/item/${next.slug}`}>
                  <a aria-label={`Next item: ${next.title}`}>Next</a>
                </Link>
              </li>
            )}
            {(prev) && (
              <li>
                <Link href="/item[slug]" as={`/item/${prev.slug}`}>
                  <a aria-label={`Previous item: ${prev.title}`}>Previous</a>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  )
}
