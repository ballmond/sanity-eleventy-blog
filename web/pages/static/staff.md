---
layout: "/layouts/customPage.njk"
---

{% set style = "margin: 0 1rem; height: 300px; width: 240px;" %}

{% set post = staffPage | first %}

<h1>{{ post.title }}</h1>

<div class="content" style="display: flex; flex-direction: column;">
{% for person in post.people %}
  <div>
    <h2>{{ person.name }}</h2>
    <h3>{{ person.title }}</h3>
  {% set image %}
    {% imageUrlFor person.image.asset %}
  {% endset %}
  <img align="left" src="{{image}}" style="{{style}}"/>
  <p>{{ person.bio }}</p>
  </div>
{% endfor %}
</div>
