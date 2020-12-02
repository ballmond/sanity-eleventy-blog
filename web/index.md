---
layout: layouts/main.njk
---

# Welcome to {{ metadata.title }}

## Celebrating 45 Years in Blue Bell!

Because of the uptick in COVID cases in Montgomery County and the state, we are returning to virtual worship services only (no in-person). Contact us for information about how to join via Zoom. Just because we can’t meet at our church building regularly like we did before, doesn’t mean our church, and our faith, and our God isn’t alive and thriving. We are meeting regularly via Zoom for worship, praise, small groups, bible study, and fellowship. Please join us in praying for all affected by COVID-19 and racial discrimination, and those who are suffering economically during this time. If you would like to participate in any of our worship and praise activities please contact us at staff@gbcbb.org or gbcprayerwarriors@gmail.com.

## Join Us

**9:30 AM** Sunday School. (At this time only Wired Word, Youth and Young Adult classes are meeting. Contact Brady Rennix or Joan Frizzell for Zoom info or staff@gbcbb.org)

**10:45 AM** Worship Service

Graceland 2nd Hour for children (K-3rd grade) during the worship service. Pre-school childcare provided.

## Find Us

437 Skippack Pike
P.O. Box 122
Blue Bell, PA 19422
215-628-2077

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.7681931536595!2d-75.25916498397085!3d40.14744697939734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6bc9a2818dc7d%3A0xd504d1564cd27c54!2sGrace%20Baptist%20Church-Blue%20Bell!5e0!3m2!1sen!2sus!4v1606764395635!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

## Latest [News]({{ '/news/' | url }})

{%- set news = collections.news | reverse | pop(3) %}
{%- if news %}
{% for item in news %}

### [{{ item.data.post.title }}]({{ item.url }})

<h5>{{ item.data.post.excerpt }}</h5>

Posted {{ item.data.post.publishedAt | publishedAt }}
{% endfor %}
{%- endif %}

## Latest [Sermons]({{ '/sermons/' | url }})

{%- set sermons = collections.sermons | reverse | pop(3) %}
{%- if sermons %}
{% for sermon in sermons %}

### [{{ sermon.data.sermon.title }}]({{ sermon.url }})

<h5>{{ sermon.data.sermon.excerpt }}</h5>

{% if sermon.data.sermon.audioUrl %}<a href="{{ sermon.data.sermon.audioUrl | url }}" target="_blank">Listen</a>{% endif %} {% if sermon.data.sermon.videoUrl %}<a href="{{ sermon.data.sermon.videoUrl | url }}" target="_blank">Watch</a>{% endif %}

Posted {{ sermon.data.sermon.publishedAt | publishedAt }}
{% endfor %}
{%- endif %}
