---
layout: page_about
title: This Month At St. Pat's
permalink: /this_month_at_st_pats
section: home
sectionid: thismonthatstpats
---

{{ $cols := split .row "||" }}

{{ range $cols }}
   <div class="col-12">
      <div class="monthSelector">
        October
      </div>
   </div>
   <div class="col-6">
      <div class="event">
        <div class="eventDate">3</div>
        <div class="eventPict">
            <img src="/assets/img/img_test.png">
        </div>
        <div class="eventDetails">
            <div class="eventTitle">Title of the event Max 50 car.</div>
            <div class="eventDesc">Description of the event max 150 car.</div>
        </div>
      </div>
   </div>
   <div class="col-6">
      <div class="event">
         <div class="eventDate">13</div>
         <div class="eventPict">
            <img src="/assets/img/img_test.png">
         </div>
         <div class="eventDetails">
            <div class="eventTitle">Title of the event Max 50 car.</div>
            <div class="eventDesc">Description of the event max 150 car.</div>
         </div>
      </div>
   </div>
   <div class="col-6">
      <div class="event">
        <div class="eventDate">26</div>
        <div class="eventPict">
            <img src="/assets/img/img_test.png">
        </div>
        <div class="eventDetails">
            <div class="eventTitle">Title of the event Max 50 car.</div>
            <div class="eventDesc">Description of the event max 150 car.</div>
        </div>
      </div>
   </div>
   <div class="col-6">
      <div class="event">
         <div class="eventDate">29</div>
         <div class="eventPict">
            <img src="/assets/img/img_test.png">
         </div>
         <div class="eventDetails">
            <div class="eventTitle">Title of the event Max 50 car.</div>
            <div class="eventDesc">Description of the event max 150 car.</div>
         </div>
      </div>
   </div>
{{ end }}