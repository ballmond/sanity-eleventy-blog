export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc452d9f63c2edf469e5d58',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-kddviiq5',
                  apiId: '15848f30-62dd-4505-8dc9-b94962beb481'
                },
                {
                  buildHookId: '5fc452dafd725947dc75dbfb',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-gaxm9e6u',
                  apiId: 'f35d91e8-2800-451c-b0f7-587f898b4240'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ballmond/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-gaxm9e6u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
