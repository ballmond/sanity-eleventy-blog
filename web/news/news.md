---
layout: post.njk
eleventyNavigation:
  key: News
  parent: Home
  order: 2
---

{%- set news = collections.news | reverse %}
{%- if news %}
{% for item in news %}

### [{{ item.data.post.title }}]({{ item.url }})

{{ item.data.post.excerpt }}
Posted {{ item.data.post.publishedAt | publishedAt }}
{% endfor %}
{%- endif %}
