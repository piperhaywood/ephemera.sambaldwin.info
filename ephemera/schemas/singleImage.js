export default {
  name: 'singleImage',
  title: 'Image',
  type: 'image',
  fields: [
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string'
    }
  ],
  options: {
    accept: 'image/*',
    metadata: [
      'dimensions',
      'hasAlpha',
      'isOpaque',
      'blurhash',
      'lqip',
      'palette',
      'exif',
    ],
  },
}