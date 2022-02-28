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
        source: doc => doc.firstName ? `${doc.firstName}-${doc.lastName}` : `${doc.lastName}`,
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      lastName: 'lastName',
      firstName: 'firstName'
    },
    prepare(selection) {
      const {lastName, firstName} = selection
      return {
        title: firstName ? `${firstName} ${lastName}` : `${lastName}`,
      }
    }
  },
}
