---
layout: "/layouts/customPage.njk"
---

{% set style = "margin: 0 1rem; height: 300px; width: 240px;" %}

<h1>Our Staff</h1>

<div class="content" style="display: flex; flex-direction: column;">
{% for person in people %}

<div>
<h2>{{ person.name }}</h2>

{% set image %}
{% imageUrlFor person.image.asset %}
{% endset %}

<img align="left" src="{{image}}" style="{{style}}"/>

<p>{{ person.bio }}</p>
</div>
{% endfor %}
</div>
