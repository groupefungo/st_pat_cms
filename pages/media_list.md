---
layout: page_about
title: Documents List
permalink: /media_list
section: home
sectionid: history
---

{%- assign media_list = site.static_files | where: "extname", ".pdf" -%}

<div id="media-list">
    <div class="col-12 text-center flexCol">
        {% for media in media_list %}
        {% capture media_url %}{{site.url}}/assets/docs/{{ media.name }}{% endcapture %}
        <div class="col-12 media-item">
            <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text" onclick="copyToClipboard('input-{{forloop.index0}}', {{forloop.index0}})" onmouseout="outFunc({{forloop.index0}})">
                    <span class="tooltiptext" id="myTooltip-{{forloop.index0}}">Copy to clipboard</span>
                    <i class="fa fa-clipboard fa-2x"></i>
                  </div>
                </div>
                <input type="text" class="form-control" id="input-{{forloop.index0}}" value="{{media_url}}">
            </div>
        </div>
        {% endfor %}
    </div>
</div>

<script>
function copyToClipboard(inputID, index) {
  var copyText = document.getElementById(inputID);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltipID = "myTooltip-" + index;
  var tooltip = document.getElementById(tooltipID);
  tooltip.innerHTML = "Copied! ";
}

function outFunc(index) {
  var tooltipID = "myTooltip-" + index;
  var tooltip = document.getElementById(tooltipID);
  tooltip.innerHTML = "Copy to clipboard";
}
</script>