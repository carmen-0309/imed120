var osc;

function setup() {
    createCanvas(1000, 400);
    osc = new p5.Oscillator();
    osc.setType('sine');
}

function draw() {
    background(220);
    text("X=" + mouseX, 25, 25)
    text("Y=" + mouseY, 25, 50)

    var whiteW = width / 19
    // keys half as long as screen
    var whiteH = height / 2
    // standard ratio of piano key widths 
    var blackW = whiteW * 7 / 12
    // standard ratio of piano key lengths
    var blackH = whiteH * 2 / 3
    // corner rounding
    var round = 9
    //white keys
    //make fourteen keys
    for (var i = 0; i < 14; i = i + 1) {
        fill(255, 255, 255)
        /* rect parameters in order: topcorner X, topcorner Y, width, height, topL round, topR round, bottomL round, bottomR round */
        rect((width / 10 + i * whiteW), height / 4, whiteW, whiteH, 0, 0, round, round)
    }
    //black keys two sets of 2
    for (var j = 0; j < 2; j = j + 1) {
        fill(0, 0, 0)
        rect(whiteW * 2.5 + j * whiteW, height / 4, blackW, blackH, 0, 0, round, round)
        rect(whiteW * 9.5 + j * whiteW, height / 4, blackW, blackH, 0, 0, round, round)
    }
    //black keys set of 3
    for (var k = 0; k < 3; k = k + 1) {
        fill(0, 0, 0)
        rect(whiteW * 5.5 + k * whiteW, height / 4, blackW, blackH, 0, 0, round, round)
        rect(whiteW * 12.5 + k * whiteW, height / 4, blackW, blackH, 0, 0, round, round)

    }
    if (keyIsDown(65)) {
        osc.start();
        osc.freq(261.6256);
        osc.amp(1000, 0.05);
        ellipse(125, 275, 30, 30)
    }

}

function keyReleased() {
    osc.amp(0, 0.05);
}