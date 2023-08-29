import Link from 'next/link'

export default function ItemPagination({next, prev}) {
  return (
    <>
      {(next || prev) && (
        <nav className="item-nav">
          <ul className="item-nav-list">
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
      <style jsx>{`
        .item-nav-list {
          list-style: none;
          padding-left: 0;
        }
      `}</style>
    </>
  )
}
