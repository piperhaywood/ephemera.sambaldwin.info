export default {
  name: 'designer',
  title: 'Designer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Last name',
      description: 'Last name or collective name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'firstName',
      title: 'First name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => doc.firstName ? `${doc.firstName}-${doc.name}` : `${doc.name}`,
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
