import Link from "next/link";

export default function Tags({ tags }) {
  const allTags = [].concat
    .apply([], tags)
    .filter(Boolean)
    .filter((tag) => !tag._weak)
    .sort((a, b) => (a.title > b.title ? 1 : -1));

  return (
    <>
      {allTags.length > 0 && (
        <ul className="tag-list" aria-label="Tags">
          {allTags.map(
            (tag) =>
              tag.slug && (
                <li className="tag-item" key={tag._id}>
                  <Link
                    href={`/${tag.type}/[slug]`}
                    as={`/${tag.type}/${tag.slug}`}
                  >
                    {tag.title}
                  </Link>
                </li>
              )
          )}
        </ul>
      )}
      <style jsx>{`
        .tag-list {
          list-style: none;
          padding-left: 0;
        }
        .tag-list:before {
          content: attr(aria-label) ": ";
        }
        .tag-item {
          display: inline;
        }
        .tag-item:after {
          content: ", ";
        }
        .tag-item:last-child:after {
          content: none;
        }
      `}</style>
    </>
  );
}
