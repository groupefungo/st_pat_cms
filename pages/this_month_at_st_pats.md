---
layout: page_about
title: This Month At St. Pat's
permalink: /this_month_at_st_pats
section: home
sectionid: thismonthatstpats
---

{{ $cols := split .row "||" }}

{{ range $cols }}
   {% include event_slider.html %}
{{ end }}