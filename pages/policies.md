---
layout: page
title: Policies
permalink: /policies
section: home
sectionid: policies
---

{{ $cols := split .row "||" }}

{{ range $cols }}
   <div class="col-6 text-center">
    <h4>Policies</h4>
    <a class="button button-lightbox button-block" href="/assets/docs/Web Discipline Policy August 2015.pdf">Discipline</a>
    <a class="button button-lightbox button-block" href="/assets/docs/2012 extracurricularcontract.pdf">Extracurricular Activities Contract</a>
   </div>
   <div class="col-6 text-center">
    <h4>Rules & Regulations</h4>
    <a class="button button-lightbox button-block" href="/assets/docs/CERTIFICATION MELS VS ST PATS STANDARDS2016-2017.pdf">Graduation Standards</a>
    <a class="button button-lightbox button-block" href="/assets/docs/DRESS CODE 2018-2019.pdf">Dress Code</a>
   </div>
{{ end }}