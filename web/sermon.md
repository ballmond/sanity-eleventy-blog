---
layout: post.njk
tags:
  - sermons
pagination:
  alias: sermon
  data: sermons
  size: 1
  addAllPagesToCollections: true
permalink: sermons/{{ sermon.slug.current | slug }}/index.html
---

# {{ sermon.title }}

Written by {% for author in sermon.authors %}{{author.name}}{% endfor %}
{{ sermon.body | safe }}
