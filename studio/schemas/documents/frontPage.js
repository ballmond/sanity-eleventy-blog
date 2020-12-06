export default {
  name: 'frontPage',
  type: 'document',
  title: 'Front Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Page Main Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.'
    },
    {
      name: 'intro',
      type: 'bodyPortableText',
      title: 'Introduction Text'
    },
    {
      name: 'schedule',
      type: 'bodyPortableText',
      title: 'Schedule Text'
    },
    {
      name: 'location',
      type: 'bodyPortableText',
      title: 'Location Text'
    },
    {
      name: 'mapUrl',
      type: 'url',
      title: 'Google Maps URL'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
