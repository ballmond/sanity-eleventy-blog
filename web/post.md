---
layout: post.njk
tags:
  - news
pagination:
  alias: post
  data: posts
  size: 1
  addAllPagesToCollections: true
permalink: news/{{ post.slug.current | slug }}/index.html
---

# {{ post.title }}

Written by {% for author in post.authors %}{{author.name}}{% endfor %}
{{ post.body | safe }}
