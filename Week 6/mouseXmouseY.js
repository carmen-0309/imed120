var toggle = true;

function setup () {
  createCanvas(600,300);
  background(1, 186, 240);
}

function draw () {
  var x = mouseX;
  var y = mouseY;
  var size = 25;

  fill(237, 34, 33);
  noStroke();
  ellipse(x, y, size, size);
}