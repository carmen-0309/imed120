var canW = 370 //canvas width
var canH = 240 // canvas height
 
function setup() {
  createCanvas(canW, canH);
  background(200, 16, 46)
}
canW/5
function draw() {
  var L2XPos= canW*14/37
  strokeWeight(canW*4/37)
  stroke(255, 255, 255)
  line(0, canH/2, canW, canH/2)
  line(L2XPos, 0, L2XPos, canH)
}