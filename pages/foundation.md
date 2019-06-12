---
layout: page
title: The Foundation
permalink: /foundation
section: home
sectionid: foundation
---

{{ $cols := split .row "||" }}

{{ range $cols }}
   <div class="col-6 text-center flexCol">
      <img src="/assets/img/logo_armor.png">
   </div>
   <div class="col-6">
      <h3>Saint Patrick’s High School Foundation Mission</h3>
      <p>To provide funding for student activities such as pastoral, sports, outings, science fair and other projects specified in the school’s educational project.</p>
      <p>To provide financial assistance to students in need while at school and also award bursaries to encourage students in need to pursue post secondary studies.</p>
      <p>To provide financial assistance to purchase services, equipment and supplies to improve the academic performance of the students and all of their complementary activities.</p>
      <p>To provide financial assistance to students in need to help them pay for didactic materials or provide them with meals.</p>
   </div>
{{ end }}