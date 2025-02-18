let img;

// Load the image.
function preload() {
  img = loadImage('/dessert2.jpg');
  font = loadFont('/AtemicaSans_PERSONAL_USE_ONLY.otf')
}

function setup() {
  createCanvas(350, 450);

  background(50);

  // Draw the image.
  image(img, 0, 0, 350, 450);

  // label
  fill(255, 54, 103)
  textFont(font)
  textSize(25)
  text("Yummy Dessert", 60, 160)
  describe('An image of some sort of pastry/dessert');
  
}