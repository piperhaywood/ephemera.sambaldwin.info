import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Index = ({items}) => {
  return (
    <div>
      <h1>Ephemera</h1>
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

const query = groq`*[_type == "item" && publishedAt < now()]{
  _id,
  title,
  "mainImage": images[0]{_key, asset},
  "slug": slug.current
} | order(publishedAt desc)`

export async function getStaticProps() {
  const items = await client.fetch(query)
  return {
    props: {
      items
    }
  }
}

export default Index