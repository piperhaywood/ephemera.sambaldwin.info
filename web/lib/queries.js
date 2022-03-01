import groq from 'groq'

const itemFields = `
  _id,
  title,
  "mainImage": images[0]{_key, asset},
  "slug": slug.current
`

export const getCurrentQuery = (type) =>
  groq`*[_type == "${type}" && defined(slug.current)][].slug.current`

export const indexQuery = groq`
*[_type == "item" && publishedAt < now()]{
  ...,
  "mainImage": images[0]{_key, asset},
  "slug": slug.current
} | order(publishedAt desc)
`

export const itemQuery = groq`
*[_type == "item" && slug.current == $slug][0]{
  ...,
  "designer": designer->{firstName, lastName, "slug": slug.current},
  "images": images[]{
    ...,
    "palette": asset->metadata.palette,
    "exif": asset->metadata.exif,
    "width": asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height
  },
  "mainImage": images[0]{_key, asset},
  "slug": slug.current,
  "tags": tags[]->{"type": "tag", title, _id, "slug": slug.current},
  "typefaces": typefaces[]->{"type": "typeface", title, _id, "slug": slug.current},
  "prev": *[_type == "item" && publishedAt < ^.publishedAt][0]{title, "slug": slug.current},
  "next": *[_type == "item" && publishedAt > ^.publishedAt] | order(publishedAt asc)[0]{title, "slug": slug.current}
}
`

export const designerItemsQuery = groq`
*[_type == "item" && publishedAt < now() && $_id == designer._ref]{
  ${itemFields}
} | order(publishedAt desc)
`

export const designerQuery = groq`
*[_type == "designer" && slug.current == $slug][0]{
  firstName,
  lastName,
  _id,
  "slug": slug.current
}
`

export const tagItemsQuery = groq`
*[_type == "item" && publishedAt < now() && $_id in tags[]->_id]{
  ${itemFields}
} | order(publishedAt desc)
`

export const tagQuery = groq`
*[_type == "tag" && slug.current == $slug][0]{title, _id, "slug": slug.current}
`

export const typefaceItemsQuery = groq`
*[_type == "item" && publishedAt < now() && $_id in typefaces[]->_id]{
  ${itemFields}
} | order(publishedAt desc)
`

export const typefaceQuery = groq`
*[_type == "typeface" && slug.current == $slug][0]{title, _id, "slug": slug.current}
`
