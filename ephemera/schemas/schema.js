// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import designer from './designer'
import record from './record'
import singleImage from './singleImage'
import tag from './tag'
import typeface from './typeface'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    designer,
    record,
    tag,
    typeface,
    blockContent,
    singleImage,
  ]),
})
