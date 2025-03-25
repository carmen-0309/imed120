let tipSelect
let calculateButton
let resultText

let amount = ""; // Store the amount as a string

function setup() {
    createCanvas(300, 400);
    textSize(16);
    drawCalculatorLayout();

    // Dropdown for tip percentage
    createP("Select Tip Percentage:").position(20, 300);
    tipSelect = createSelect();
    tipSelect.option("15%");
    tipSelect.option("20%");
    tipSelect.option("25%");
    tipSelect.position(20, 340);

    // Button to calculate tip
    calculateButton = createButton("Calculate Tip");
    calculateButton.position(20, 370);
    calculateButton.mousePressed(calculateTip);

    // Result text
    resultText = createP("");
    resultText.position(20, 400);
}

function draw() {
    drawCalculatorLayout();
    drawKeypad();
    drawAmount();
}

function drawCalculatorLayout() {
    background(200); 
    fill(150, 150, 150); 
    rect(10, 10, 280, 380, 10); 

    fill(255); 
    rect(20, 20, 260, 50, 5); 
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Tip Calculator", 150, 45); 
}

function drawKeypad() {
    let x = 50, y = 100, w = 60, h = 40;
    let keys = [
        "7", "8", "9",
        "4", "5", "6",
        "1", "2", "3",
        "0", ".", "C"
    ];

    for (let i = 0; i < keys.length; i++) {
        let col = i % 3;
        let row = Math.floor(i / 3);
        let keyX = x + col * (w + 10);
        let keyY = y + row * (h + 10);

        fill(255);
        rect(keyX, keyY, w, h, 5);
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(keys[i], keyX + w / 2, keyY + h / 2);
    }
}

function mousePressed() {
    let x = 50, y = 100, w = 60, h = 40;
    let keys = [
        "7", "8", "9",
        "4", "5", "6",
        "1", "2", "3",
        "0", ".", "C"
    ];

    for (let i = 0; i < keys.length; i++) {
        let col = i % 3;
        let row = Math.floor(i / 3);
        let keyX = x + col * (w + 10);
        let keyY = y + row * (h + 10);

        // Check for mouse press on the button
        if (mouseX > keyX && mouseX < keyX + w && mouseY > keyY && mouseY < keyY + h) {
            handleKeyPress(keys[i]);
        }
    }
}

function drawAmount() {
    fill(0);
    textSize(20);
    textAlign(LEFT, CENTER);
    text(`Amount: ${amount}`, 20, 85);
}

function handleKeyPress(key) {
    if (key === "C") {
        amount = ""; // Clear the input
    } else if (key === "." && !amount.includes(".")) {
        amount += key; // Add a decimal point if not already present
    } else if (!isNaN(key)) {
        amount += key; // Add numeric input
    }
}

function calculateTip() {
    let tipPercentage = parseInt(tipSelect.value());

    if (amount === "" || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
        resultText.html("Please enter a valid amount.");
        return;
    }

    let tip = (parseFloat(amount) * tipPercentage) / 100;
    resultText.html(`Tip Amount: $${tip.toFixed(2)}`);
}