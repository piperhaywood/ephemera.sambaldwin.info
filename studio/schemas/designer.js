import { MdPersonOutline } from 'react-icons/md'

export default {
  name: 'designer',
  title: 'Designer',
  type: 'document',
  icon: MdPersonOutline,
  fieldsets: [
    {
      name: 'name',
      title: 'Name',
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    {
      name: 'lastName',
      title: 'Last name / Collective name',
      type: 'string',
      validation: Rule => Rule.required(),
      fieldset: 'name',
    },
    {
      name: 'firstName',
      title: 'First name',
      type: 'string',
      fieldset: 'name',
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
      name: 'name',
      firstName: 'firstName'
    },
    prepare(selection) {
      const {name, firstName} = selection
      return {
        title: firstName ? `${firstName} ${name}` : `${name}`,
      }
    }
  },
}
