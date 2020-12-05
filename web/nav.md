---
pagination:
  data: pages
  alias: post
  size: 1
---

{{ pagination.pages }}

<nav aria-labelledby="my-pagination">
  <h2 id="my-pagination">This is my Pagination lol</h2>
  <ol>
{%- for post in pagination.pages %}
      <li><a href="{{ pagination.hrefs[ loop.index0 ] }}"{% if page.url == pagination.hrefs[ loop.index0 ] %} aria-current="page"{% endif %}>Page {{ loop.index }}</a></li>
{%- endfor %}
  </ol>
</nav>

{% for pageEntry in pagination.pages %}
<a href="/pages/{{ pageEntry.slug.current }}/">{{ pageEntry.sidebarLabel }}</a>
{% endfor %}
