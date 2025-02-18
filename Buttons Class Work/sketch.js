var bgColor = 220;
var sizeX = 30;
var sizeY = 30;

function setup() {
  createCanvas(500, 400);
  background(bgColor);
  
  // setup button 1
  let redButton = createButton('Red')
  redButton.size(100, 50)
  redButton.position(10, 10)
  redButton.style('background: red')
  redButton.mousePressed(changeRed)
  
  // setup button 2
  let blueButton = createButton('Blue')
  blueButton.size(100, 50)
  blueButton.position(10, 70)
  blueButton.style('background: blue')
  blueButton.mousePressed(changeBlue)
  
  // clear button
  let clearButton;
  clearButton = createButton('Erase')
  clearButton.size(100, 50)
  clearButton.position(10, 130)
  clearButton.style('background: white')
  clearButton.mousePressed(changeClear)
  
  // reset button
  let resetButton = createButton('Clear')
  resetButton.size(100, 50)
  resetButton.position(10, 190)
  resetButton.style('background: gray')
  resetButton.mousePressed(changeReset)
  
  // big button
  let bigButton = createButton('Big')
  bigButton.size(100, 50)
  bigButton.position(10, 250)
  bigButton.style('background: white')
  bigButton.mousePressed(sizeBig)
  
  // small button
  let smallButton = createButton('Small')
  smallButton.size(100, 50)
  smallButton.position(10, 310)
  smallButton.style('background: white')
  smallButton.mousePressed(sizeSmall)
}

function changeRed() {
  fill("red")
}

function changeBlue() {
  fill("blue")
}

function changeClear() {
  fill(bgColor)
}

function changeReset() {
  fill(bgColor)
  background(bgColor)
}

function sizeBig() {
  sizeX = 60
  sizeY = 60
}

function sizeSmall() {
  sizeX = 10
  sizeY = 10
}

function draw() {
  noStroke()
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, sizeX, sizeY);
  }
}
  