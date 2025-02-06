let myInput;
var canW = 300; //canvas width
var canH = 200; // canvas height

function setup() {
  createCanvas(canW, canH);
  myInput = createInput("TYPE HERE")
  myInput.position(0, (height - 25))
}

function draw() {
  background(220);
  let msg = myInput.value();
  
  if (msg === "Congo" || msg === "congo") {
      background(251, 222, 74);
      text(msg, 25, 55)
      noStroke();
      var greentop = canW*(2/3);
      fill(0, 149, 67);
      triangle(0, 0, greentop, 0, 0, canH);
      var redbot = canW*(1/3);
      fill(220, 36, 21);
      triangle(canW, 0, canW, canH, redbot, canH)
  } else if (msg === "Denmark" || msg === "denmark") {
      background(200, 16, 46)  
      var L2XPos= canW*14/37
      strokeWeight(canW*4/37)
      stroke(255, 255, 255)
      line(0, canH/2, canW, canH/2)
      line(L2XPos, 0, L2XPos, canH)
  }
}