---
layout: post.njk
eleventyNavigation:
  key: Sermons
  parent: Home
  order: 3
---

{%- set sermons = collections.sermons | reverse %}
{%- if sermons %}
{% for item in sermons %}

### [{{ item.data.sermon.title }}]({{ item.url }})

{{ item.data.sermon.excerpt }}
Posted {{ item.data.sermon.publishedAt | publishedAt }}
{% endfor %}
{%- endif %}
