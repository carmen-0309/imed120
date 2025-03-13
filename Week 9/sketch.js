let keys = ['1', '2', '3', '4', '5', '6', '7'];
let sounds = [];

function preload() {
    soundFormats('mp3');
    sounds[0] = loadSound('/notes/note1.mp3');
    sounds[1] = loadSound('/notes/note2.mp3');
    sounds[2] = loadSound('/notes/note3.mp3');
    sounds[3] = loadSound('/notes/note4.mp3');
    sounds[4] = loadSound('/notes/note5.mp3');
    sounds[5] = loadSound('/notes/note6.mp3');
    sounds[6] = loadSound('/notes/note7.mp3');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(255);
  for (let i = 0; i < keys.length; i++) {
    drawKey(i * 100, 100, 100, 200, keys[i]);
  }
}

function keyPressed() {
  for (let i = 0; i < keys.length; i++) {
    if (key === keys[i]) {
      sounds[i].play();
    }
  }
}

function drawKey(x, y, w, h, key) {
  fill(200);
  rect(x, y, w, h);
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(key, x + w / 2, y + h / 2);
}