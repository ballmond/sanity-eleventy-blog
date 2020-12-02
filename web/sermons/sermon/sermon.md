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

{% if sermon.audioUrl %}<a href="{{ sermon.audioUrl | url }}" target="_blank">Listen</a>{% endif %} {% if sermon.videoUrl %}<a href="{{ sermon.videoUrl | url }}" target="_blank">Watch</a>{% endif %}

{{ sermon.body | safe }}

{% if sermon.videoUrl %}
{% set youtubeId = sermon.videoUrl | youtubeId %}

{% if youtubeId %}

  <iframe width="560" height="315" src="https://www.youtube.com/embed/{{ youtubeId }}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  {% endif %}
{% endif %}
