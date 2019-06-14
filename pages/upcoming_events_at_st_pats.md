---
layout: page_about
title: Upcoming events at St. Pat's
permalink: /upcoming_events_at_st_pats
section: home
sectionid: upcomingevents
---

{{ $cols := split .row "||" }}

{{ range $cols }}
   {% include event_slider.html %}
{{ end }}