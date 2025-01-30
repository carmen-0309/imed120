var canW = 300; //canvas width
var canH = 200; // canvas height

function setup() {
    createCanvas(canW, canH);
    background(251, 222, 74);
}

function draw() {
    noStroke();
    var greentop = canW*(2/3);
    fill(0, 149, 67);
    triangle(0, 0, greentop, 0, 0, canH);
    var redbot = canW*(1/3);
    fill(220, 36, 21);
    triangle(canW, 0, canW, canH, redbot, canH)
    
}