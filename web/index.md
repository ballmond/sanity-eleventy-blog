---
layout: layouts/main.njk
eleventyNavigation:
  key: Home
---

<h1>{{ frontPage.title }}</h1>

<h2>{{ frontPage.subtitle }}</h2>

{{ frontPage.intro }}

{{ frontPage.schedule }}

{{ frontPage.location }}

{% if frontPage.mapUrl %}

<iframe src="{{ frontPage.mapUrl }}" width="600" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

{% endif %}

<h2>Latest <a href="{{ '/news/' | url }}">News</a></h2>
{% set style = "display: grid;grid-gap: 0.5em;grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));" %}
<div id="jess-news" style="{{style}}">
{%- set news = collections.news | reverse | pop(3) %}
{%- if news %}
{% for item in news %}
{% include "post-preview.njk" %}
{% endfor %}
{%- endif %}
</div>
<h5><a href="/news/">More news &rarr;</a></h5>

<h2>Latest <a href="{{ '/sermons/' | url}}">Sermons</a></h2>
{% set style = "display: grid;grid-gap: 0.5em;grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));" %}
<div id="jess-news" style="{{style}}">
{%- set sermons = collections.sermons | reverse | pop(3) %}
{%- if sermons %}

{% for sermon in sermons %}

{% include "sermon-preview.njk" %}

{% endfor %}
{%- endif %}

</div>

<h5><a href="/sermons/">More sermons &rarr;</a></h5>
