---
layout: page_about
title: Our School Crest
permalink: /our_school_crest
section: home
sectionid: ourschoolcrest
---

{{ $cols := split .row "|" }}

{{ range $cols }}
   <div class="col-12 text-center">
      <img src="/assets/img/logo_armor.png">
   </div>
   <div class="col-12">
      <p>The main part of the design features the white owl, emblem of wisdom, perched on the book of education and tightly clutching the Lily of Purity. The "shamrock" is emblematic of the land of our ancestors. The whole design is ensconced on a shield surrounded by a garland of maple leaves professing our loyalty to Canada.</p>
      <p>The "escutcheon proper" is surmounted by a lamp of knowledge with two flames on each end, fed with the oil of wisdom burning on either side and the pinnacle is formed by a Celtic Cross, which is there to remind us of the ardent faith of our ancestors.</p>
   </div>
{{ end }}