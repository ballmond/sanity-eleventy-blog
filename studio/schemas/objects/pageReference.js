export default {
  name: 'pageReference',
  type: 'object',
  title: 'Page reference',
  fields: [
    {
      name: 'page',
      type: 'reference',
      to: [
        {
          type: 'page'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'page.title'
    }
  }
}
