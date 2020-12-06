import { MdLink } from 'react-icons/md'

export default {
  name: 'navbar',
  type: 'document',
  title: 'Navigation Menu',
  icon: MdLink,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'navGroup',
      title: 'Menu Groups',
      type: 'array',
      of: [
        {
          type: 'navGroup'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
