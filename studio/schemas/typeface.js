import { MdTextFields } from 'react-icons/md'

export default {
  name: 'typeface',
  title: 'Typeface',
  type: 'document',
  icon: MdTextFields,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
