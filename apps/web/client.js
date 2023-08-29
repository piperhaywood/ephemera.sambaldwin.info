// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '2g3wminh',
  dataset: 'production',
  useCdn: false
})