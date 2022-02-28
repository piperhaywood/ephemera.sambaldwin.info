import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Designer = ({designer, items}) => {
  const designerName = designer.firstName ? `${designer.firstName} ${designer.lastName}` : designer.lastName
  return (
    <div>
      <h1>Ephemera</h1>
      {designer && (
        <p>Designed by {designerName}</p>
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
  const paths = await client.fetch(groq`*[_type == "designer" && defined(slug.current)][].slug.current`)
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params

  const itemsQuery = groq`*[_type == "item" && publishedAt < now() && $_id == designer._ref]{
    _id,
    title,
    "mainImage": images[0]{_key, asset},
    "slug": slug.current
  } | order(publishedAt desc)`
  const designerQuery = groq`*[_type == "designer" && slug.current == $slug][0]{firstName, lastName, _id}`

  const designer = await client.fetch(designerQuery, { slug })
  const _id = designer._id;
  const items = await client.fetch(itemsQuery, { _id });

  const data = {
    props: {
      designer,
      items
    }
  }

  return data
}

export default Designer