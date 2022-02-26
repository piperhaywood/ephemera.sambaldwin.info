export default {
  name: 'record',
  title: 'Record',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      accept: 'image/*',
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string'
        }
      ],
    },
    {
      name: 'images',
      type: 'gallery'
    },
    {
      name: 'tags',
      type: 'reference',
      to: {type: 'tag'},
    },
    {
      name: 'typefaces',
      type: 'reference',
      to: {type: 'typeface'},
    },
    {
      name: 'width',
      type: 'number',
      description: 'Width in millimetres'
    },
    {
      name: 'height',
      type: 'number',
      description: 'Height in millimetres'
    },
    {
      name: 'originDate',
      title: 'Origin date',
      type: 'datetime',
    },
    {
      name: 'color',
      title: 'Predominant color',
      type: 'color'
    },
    {
      name: 'credit',
      type: 'blockContent',
    },
    {
      name: 'notes',
      type: 'blockContent',
    },
  ],

  // TODO Adjust preview
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
