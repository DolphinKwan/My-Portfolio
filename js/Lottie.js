
var animation1_1 = bodymovin.loadAnimation({
    container: document.getElementById('bm1_1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data1_1.json'
  })

  var animation1_2 = bodymovin.loadAnimation({
    container: document.getElementById('bm1_2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data1_2.json'
  })
  
  var animation1_3 = bodymovin.loadAnimation({
    container: document.getElementById('bm1_3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data1_3.json'
  })

  var animation2_1 = bodymovin.loadAnimation({
    container: document.getElementById('bm2_1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data2_1.json'
  })
  var animation2_2 = bodymovin.loadAnimation({
    container: document.getElementById('bm2_2'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'data2_2.json'
  })

function firstQuarter() {
  $(function(){
    "use strict";
    animation2_2.playSegments([0,60], true);

    $("#moonphase").html("First Quarter");
  })
  
}
function fullMoon() {

  $(function(){
    "use strict";

    animation2_2.playSegments([60,120], true);

    $("#moonphase").html("Full Moon");

  })
  

}

function thirdQuarter() {
  $(function(){
    "use strict";

    animation2_2.playSegments([120,180], true);

    $("#moonphase").html("Third Quarter");

  })
  

}
  
function newMoon() {
  $(function(){
    "use strict";

    animation2_2.playSegments([0,240], true);

    $("#moonphase").html("New Moon");

  })
  

}
