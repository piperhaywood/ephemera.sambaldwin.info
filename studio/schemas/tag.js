import { MdTag } from 'react-icons/md'

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: MdTag,
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
