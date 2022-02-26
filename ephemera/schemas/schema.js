// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import designer from './designer'
import item from './item'
import singleImage from './singleImage'
import tag from './tag'
import typeface from './typeface'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    designer,
    item,
    tag,
    typeface,
    blockContent,
    singleImage,
  ]),
})
