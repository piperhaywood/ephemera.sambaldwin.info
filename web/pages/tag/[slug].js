import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Tag = ({tag, items}) => {
  return (
    <div>
      <h1>Ephemera</h1>
      {tag && (
        <p>Tag: {tag.title}</p>
      )}
      {items.length > 0 && items.map(
        ({ _id, title = '', slug = '', mainImage = '' }) =>
          (slug && mainImage) && (
            <div key={_id}>
              <Link href="/item/[slug]" as={`/item/${slug}`}>
                <a>
                  <figure key={mainImage._key}>
                    <img
                      src={urlFor(mainImage.asset)
                        .width(900)
                        .url()}
                      alt={title}
                    />
                  </figure>
                </a>
              </Link>
            </div>
          )
      )}
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "tag" && defined(slug.current)][].slug.current`)
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params

  const itemsQuery = groq`*[_type == "item" && publishedAt < now() && $_id in tags[]->_id]{
    _id,
    title,
    "mainImage": images[0]{_key, asset},
    "slug": slug.current
  } | order(publishedAt desc)`
  const tagQuery = groq`*[_type == "tag" && slug.current == $slug][0]{title, _id}`

  const tag = await client.fetch(tagQuery, { slug })
  const _id = tag._id;
  const items = await client.fetch(itemsQuery, { _id });

  const data = {
    props: {
      tag,
      items
    }
  }

  return data
}

export default Tag