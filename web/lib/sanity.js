import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

export const urlFor = (source) =>
  imageUrlBuilder(client).image(source)
