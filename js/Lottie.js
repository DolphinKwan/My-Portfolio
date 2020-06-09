
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
    loop: true,
    autoplay: true,
    path: 'data2_2.json'
  })

  var animation2_3 = bodymovin.loadAnimation({
    container: document.getElementById('bm2_3'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'data2_3.json'
  })

  var animation3_1 = bodymovin.loadAnimation({
    container: document.getElementById('bm3_1'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'data3_1.json'
  })

  var animation3_2 = bodymovin.loadAnimation({
    container: document.getElementById('bm3_2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data3_2.json'
  })

function firstQuarter() {
  $(function(){
    "use strict";
    animation2_2.playSegments([0,60], true);
    animation2_2.loop = false;

    $("#moonphase").html("First Quarter");
    $("#moonphasetext").html("As the Moon orbits from the New Moon position to the First Quarter Position, we can see more and more of the bright side of the Moon until it's half-bright. We call it the First Quarter because it's a quarter of the way through its orbit.  It might be confusing to call it that way, but it precisely describes the essence of it, and it helps you to understand the motion of the Moon. ");
  })
  
}
function fullMoon() {

  $(function(){
    "use strict";

    animation2_2.playSegments([60,120], true);
    animation2_2.loop = false;

    $("#moonphase").html("Full Moon");
    $("#moonphasetext").html("About two weeks from the New Moon, the Moon orbits to the other side of the Earth. The Earth is between the Sun and the Moon. In this position, the bright side of the Moon is facing the Earth so that we can see the Moon's full bright side. We call this position the Full Moon.  ");
  })
  

}

function thirdQuarter() {
  $(function(){
    "use strict";

    animation2_2.playSegments([120,180], true);
    animation2_2.loop = false;

    $("#moonphase").html("Third Quarter");
    $("#moonphasetext").html("One week after the Full Moon, the Moon will move to its next phase - the Third Quarter. You can easily fathom why we call it that way. It's because it arrives at third quarter of the Moon's orbit. The bright side of the Moon we can see will start shrinking during this process until it's back to half-bright. ");
  })
  

}
  
function newMoon() {


  $(function(){
    "use strict";
    animation2_2.playSegments([0,240], true);
    animation2_2.goToAndStop(0, true);
    

    $("#moonphase").html("New Moon");
    $("#moonphasetext").html("When the Moon orbit to the position between the Sun and the Earth, the side of the Moon facing the Earth is dark. The sunlight reflects off the Earth so we can still the Moon if we look closely. We call it a New Moon and it is the start of a moon phase cycle. ");
  })
  
}

function backToNewMoon() {


  $(function(){
    "use strict";
    
    animation2_2.playSegments([180,240], true);
    animation2_2.loop = false;

    $("#moonphase").html("Back to New Moon");
    $("#moonphasetext").html("Now, the Moon is back to its original position. The sunlit side of the Moon we can see keeps shrinking until it's fully dark, and a new circle will begin. ");
  })
  
}

function allMoonrise() {
  $(function(){
    "use strict";
    animation2_3.playSegments([0,2542], true);
  })
  
}

function firstQuarterMoonrise() {
  $(function(){
    "use strict";
    animation2_3.playSegments([576,850], true);

    $("#moonrise").html("First Quarter");
    $("#moonrisetext").html("7 days pass by, when it comes to the first quarter, it will rise at about noon and set at about midnight, due to the moon rise gets delayed day after day since the New Moon.  ");
  })
  
}
function fullMoonMoonrise() {

  $(function(){
    "use strict";

    animation2_3.playSegments([1231,1594], true);

    $("#moonrise").html("Full Moon");
    $("#moonrisetext").html("If we are currently on a full Moon, then the Moon rises right after the Sun is set. We will be able to see the moon rise in the dark after the sunset with the sunlit side fully facing us. This is the perfect timing for us to appreciate its beauty. ");
  })
  

}

function thirdQuarterMoonrise() {
  $(function(){
    "use strict";

    animation2_3.playSegments([1967,2201], true);

    $("#moonrise").html("Third Quarter");
    $("#moonrisetext").html("As the days keep passing by, the time of moon rise will be later day by day. On the third quarter, the Moon will rise at midnight and set at about noon.  ");
  })
  

}
  
function newMoonMoonrise() {
  $(function(){
    "use strict";

    animation2_3.playSegments([0,235], true);

    $("#moonrise").html("New Moon");
    $("#moonrisetext").html("If we are on a New Moon, it will rise at about the same time that the sun rises. The Sun and the Moon appear in the sky during the day simultaneously. You won’t see the Moon at night.  P.S. It's a common misunderstanding that the Moon only shows up at night. The truth is, the time we can see it in the daytime is as much as the time we can see it in the dark. But since it's the dark side of the Moon, we can barely see it. ");
  })
}

function cloudy() {
  $(function(){
    "use strict";
    animation3_1.setDirection(-1)
    animation3_1.play();


    // $("#moonphase").html("New Moon");

  })
}

function foggy() {
  $(function(){
    "use strict";
    animation3_1.setDirection(1)
    animation3_1.play();

    // $("#moonphase").html("New Moon");

  })
}