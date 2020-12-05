---
layout: layouts/main.njk
eleventyNavigation:
  key: Home
---

<h1>Welcome to {{ metadata.title }}</h1>

<h2>Celebrating 45 Years in Blue Bell!</h2>

Because of the uptick in COVID cases in Montgomery County and the state, we are returning to virtual worship services only (no in-person). Contact us for information about how to join via Zoom. Just because we can’t meet at our church building regularly like we did before, doesn’t mean our church, and our faith, and our God isn’t alive and thriving. We are meeting regularly via Zoom for worship, praise, small groups, bible study, and fellowship. Please join us in praying for all affected by COVID-19 and racial discrimination, and those who are suffering economically during this time. If you would like to participate in any of our worship and praise activities please contact us at staff@gbcbb.org or gbcprayerwarriors@gmail.com.

<h2>Join Us</h2>
<p><strong>9:30 AM</strong> Sunday School. (At this time only Wired Word, Youth and Young Adult classes are meeting. Contact Brady Rennix or Joan Frizzell for Zoom info or staff@gbcbb.org)</p>

<p><strong>10:45 AM</strong> Worship Service
Graceland 2nd Hour for children (K-3rd grade) during the worship service. Pre-school childcare provided.</p>

<h2>Find Us</h2>
<p>
437 Skippack Pike<br>
P.O. Box 122<br>
Blue Bell, PA 19422<br>
215-628-2077<br>
<p>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.7681931536595!2d-75.25916498397085!3d40.14744697939734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6bc9a2818dc7d%3A0xd504d1564cd27c54!2sGrace%20Baptist%20Church-Blue%20Bell!5e0!3m2!1sen!2sus!4v1606764395635!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

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
