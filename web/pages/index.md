---
layout: "/layouts/customPage.njk"
pagination:
  alias: post
  data: pages
  size: 1
permalink: "pages/{{ post.slug.current | slug }}/index.html"
---

{{ post.body }}
