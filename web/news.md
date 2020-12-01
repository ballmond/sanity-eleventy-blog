---
layout: post.njk
---

{%- set news = collections.news | reverse %}
{%- if news %}
{% for item in news %}

### [{{ item.data.post.title }}]({{ item.url }})

{{ item.data.post.excerpt }}
Posted {{ item.data.post.publishedAt | publishedAt }}
{% endfor %}
{%- endif %}
