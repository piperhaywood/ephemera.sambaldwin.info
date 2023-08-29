import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

export const urlFor = (source) =>
  imageUrlBuilder(client).image(source)

export const preventWidow = (str, maxUltimate = 0, maxPenultimate = 0) => {
  let words = str.split(' ')
  if (words.length <= 1) return str
  const lastWord = words.pop()
  const penultimateWord = words.pop()
  if (lastWord.length <= maxUltimate && penultimateWord.length <= maxPenultimate) {
    words.push(penultimateWord)
    const newStr = `${words.join(' ')}\u00A0${lastWord}`
    return newStr
  } else {
    return str
  }
}