export default {
  name: 'record',
  title: 'Record',
  type: 'document',
  groups: [
    {
      name: 'data',
      title: 'Data'
    },
    {
      name: 'images',
      title: 'Images'
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'singleImage',
      group: 'images',
      validation: Rule => Rule.required(),
    },
    {
      name: 'images',
      type: 'gallery',
      group: 'images'
    },
    {
      name: 'designer',
      type: 'reference',
      to: {type: 'designer'},
      group: 'data',
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'tag'},
        },
      ],
      group: 'data',
    },
    {
      name: 'typefaces',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'typeface'},
        },
      ],
      group: 'data',
    },
    {
      name: 'width',
      type: 'number',
      description: 'Width in millimetres',
      group: 'data',
    },
    {
      name: 'height',
      type: 'number',
      description: 'Height in millimetres',
      group: 'data',
    },
    {
      name: 'artworkDate',
      title: 'Artwork date',
      type: 'datetime',
      group: 'data',
    },
    {
      name: 'color',
      title: 'Predominant color',
      type: 'color',
      group: 'data',
    },
    {
      name: 'notes',
      type: 'blockContent',
      group: 'data',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
