// item.js
import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Item = (props) => {

  const {
    title = false,
    artworkDate = false,
    designer,
    height = false,
    images,
    notes = [],
    tags,
    typefaces,
    width = false,
  } = props.item

  const designerName = designer.firstName ? `${designer.firstName} ${designer.lastName}` : designer.lastName
  const allTags = tags.concat(typefaces).sort((a, b) => (a.title > b.title) ? 1 : -1) // Group tags and typefaces, sort alphabetically
  const year = artworkDate ? new Date(artworkDate).getFullYear() : false
  const dims = width && height ? `${width} × ${height} mm` : false
  const data = [year, dims].filter(Boolean).join(', ')

  return (
    <article>

      <section>
        <h1>{title}</h1>

        {(data) && (
          <p>{data}</p>
        )}

        {(designerName && designer.slug) && (
          <p>Designed by{' '}
            <Link href="/designer/[slug]" as={`/designer/${designer.slug}`}>
              <a>{designerName}</a>
            </Link>
          </p>
        )}

        <PortableText
          value={notes}
          components={ptComponents}
        />

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
      </section>

      <section>
        {images.length > 0 && (
          <>
          {images.map(image =>
            <figure key={image._key}>
              {console.log(image.palette)}
              <img
                src={urlFor(image.asset)
                  .width(900)
                  .url()}
                alt={image.alt || ' '} // TODO Why isn’t this working?
              />
            </figure>
          )}
          </>
        )}
      </section>

    </article>
  )

}

const query = groq`*[_type == "item" && slug.current == $slug][0]{
  title,
  artworkDate,
  height,
  notes,
  width,
  "designer": designer->{firstName, lastName, "slug": slug.current},
  "images": images[]{
    ...,
    "palette": asset->metadata.palette,
    "exif": asset->metadata.exif
  },
  "tags": tags[]->{"type": "tag", title, _id, "slug": slug.current},
  "typefaces": typefaces[]->{"type": "typeface", title, _id, "slug": slug.current},
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "item" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params
  const item = await client.fetch(query, { slug })
  console.log(item)
  return {
    props: {
      item
    }
  }
}

export default Item