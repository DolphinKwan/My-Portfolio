
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

function playSection1() {
  animation1.playSegments([0,150], true);
  // animation.play();
  
  // animation.goToAndStop(0, true);
  // animation.playSegments([[0,150],[300,450]], true);
    
}
function playSection2() {
    
  animation1.playSegments([150,300], true);

}


  

