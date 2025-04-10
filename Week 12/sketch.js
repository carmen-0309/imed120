var pressed = false
var colors = [
  [3, 161, 252] , 
  [144, 3, 252], 
  [252, 3, 231],
  [138, 255, 245], 
  [138, 255, 175],
  [200, 255, 138], 
  [252, 214, 116],
  [252, 141, 116]
];

var osc;
var key_c1;
var key_csharp1;
var key_d1;
var key_dsharp1;
var key_e1;
var key_f1;
var key_fsharp1;
var key_g1;
var key_gsharp1;
var key_a1;
var key_asharp1;
var key_b1;
var key_c2;
 
 

function setup() {
  createCanvas(1000, 400);
  osc = new p5.Oscillator();
  osc.setType('sine');
  var colors = [
    [3, 161, 252] , 
    [144, 3, 252], 
    [252, 3, 231],
    [138, 255, 245], 
    [138, 255, 175],
    [200, 255, 138], 
    [252, 214, 116],
    [252, 141, 116]
  ];
 
  //sounds
  key_c1 = new Key();
  key_csharp1 = new Key();
  key_d1 = new Key();
  key_dsharp1 = new Key();
  key_e1 = new Key();
  key_f1 = new Key();
  key_fsharp1 = new Key();
  key_g1 = new Key();
  key_gsharp1 = new Key();
  key_a1 = new Key();
  key_asharp1 = new Key();
  key_b1 = new Key();
  key_c2 = new Key();
}

function draw() {
  background(220);
  //diagnostic -- delete later
  text("X="+mouseX, 25, 25)
  text("Y="+mouseY, 25, 50)

  var whiteW = width/19
    // keys half as long as screen
  var whiteH = height/2
    // standard ratio of piano key widths 
  var blackW = whiteW*7/12
    // standard ratio of piano key lengths
  var blackH = whiteH*2/3
    // corner rounding
  var round = 9
  //white keys
    //make fourteen keys
  for (var i = 0; i < 14; i = i + 1) {
    fill(255, 255, 255)
    /* rect parameters in order: topcorner X, topcorner Y, width, height, topL round, topR round,   bottomL round, bottomR round */
    rect((width/10+i*whiteW), height/4, whiteW, whiteH, 0, 0, round, round)
  }
  
  //black keys two sets of 2
  for (var j = 0; j < 2; j = j + 1){
    fill(0, 0, 0)
    rect(whiteW*2.5+j*whiteW, height/4, blackW, blackH, 0, 0, round, round)
    rect(whiteW*9.5+j*whiteW, height/4, blackW, blackH, 0, 0, round, round) 
  }
  
  //black keys set of 3
  for (var k = 0; k < 3; k = k + 1){
  fill(0, 0, 0)
  rect(whiteW*5.5+k*whiteW, height/4, blackW, blackH, 0, 0, round, round)
  rect(whiteW*12.5+k*whiteW, height/4, blackW, blackH, 0, 0, round, round)
  }
 
  if (pressed === true) {
    var randomIndex = parseInt(random(colors.length))
    fill(colors[randomIndex])
  }
  pressed = false
  //make sounds
  key_c1.press()
  key_csharp1.press()
  key_csharp1.x = 152
  key_csharp1.y = 200
  key_csharp1.butt = 50
  key_csharp1.freq = 277.1826
  key_d1.press()
  key_d1.x = 182
  key_d1.y = 275
  key_d1.butt = 87
  key_d1.freq = 293.6648
  key_dsharp1.press()
  key_dsharp1.x = 202
  key_dsharp1.y = 200
  key_dsharp1.butt = 51
  key_dsharp1.freq = 311.1270
  key_e1.press()
  key_e1.x = 224
  key_e1.y = 275
  key_e1.butt = 69
  key_e1.freq = 329.6276
  key_f1.press()
  key_f1.x = 285
  key_f1.y = 275
  key_f1.butt = 82
  key_f1.freq = 349.2282
  key_fsharp1.press()
  key_fsharp1.x = 301
  key_fsharp1.y = 200
  key_fsharp1.butt = 52
  key_fsharp1.freq = 369.9944
  key_g1.press()
  key_g1.x = 335
  key_g1.y = 275
  key_g1.butt = 84
  key_g1.freq = 391.9954
  key_gsharp1.press()
  key_gsharp1.x = 360
  key_gsharp1.y = 200
  key_gsharp1.butt = 53
  key_gsharp1.freq = 415.3047
  key_a1.press()
  key_a1.x = 386
  key_a1.y = 275
  key_a1.butt = 89
  key_a1.freq = 440.0000
  key_asharp1.press()
  key_asharp1.x = 407
  key_asharp1.y = 200
  key_asharp1.butt = 54
  key_asharp1.freq = 466.1638
  key_b1.press()
  key_b1.x = 444
  key_b1.y = 275
  key_b1.butt = 85
  key_b1.freq = 493.8833
  key_c2.press()
  key_c2.x = 494
  key_c2.y = 275
  key_c2.butt = 73
  key_c2.freq = 523.2511
}

function keyReleased() {
  osc.amp(0, 0.05);
}
 
 
function Key() {
  var randomIndex = parseInt(random(colors.length), 10)
  this.butt = 81
  this.freq = 261.6256
  this.x = 125
  this.y = 275
  this.press = function() {
    if (keyIsDown(this.butt)) {
      osc.start();
      osc.freq(this.freq);
      osc.amp(1000, 0.05);
      fill(colors[randomIndex])
      ellipse(this.x, this.y, 25, 25)
    }
  }
}