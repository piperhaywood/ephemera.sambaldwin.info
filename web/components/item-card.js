import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

export default function ItemCard({
  title,
  mainImage,
  slug,
}) {
  return (
    (slug && mainImage) && (
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
    )
  )
}
