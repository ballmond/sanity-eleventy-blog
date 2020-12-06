export default {
  name: 'navGroup',
  type: 'object',
  title: 'Navigation Group',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Group Name'
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [
        {
          type: 'pageReference'
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
