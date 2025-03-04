canWidth = 800
canHeight = 500
function setup() {
  createCanvas(canWidth, canHeight);
}

function draw() {
  background(1, 75, 100);
  //   properties
  noStroke()
  fill(237, 34, 93)
  var diameter = 50
  //   circle
  //   for Loop
  for (var i = 0; i < canWidth / diameter; i ++) {
    for (var j = 0; j < canHeight / diameter; j ++) { 
    ellipse((i * diameter)+(diameter / 2), (j * diameter)+(diameter / 2), diameter, diameter)
    }
  }
}