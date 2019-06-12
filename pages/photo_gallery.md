---
layout: page_about
title: Photo Gallery
permalink: /photo_gallery
section: home
sectionid: photogallery
---

{{ $cols := split .row "||" }}

{{ range $cols }}
   {% include photo_slider.html %}
{{ end }}