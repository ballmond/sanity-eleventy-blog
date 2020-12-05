export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'sidebarLabel',
      type: 'string',
      title: 'Sidebar Label'
    },
    {
      name: 'sidebarParent',
      type: 'string',
      title: 'Sidebar Parent'
    },
    {
      name: 'sidebarSort',
      type: 'number',
      title: 'Sidebar Sort'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Page Main Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.'
    },
    {
      name: 'content',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
