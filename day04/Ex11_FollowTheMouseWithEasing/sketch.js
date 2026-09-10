// the character's current position
let xPos, yPos;

// the character's desired position
let xDesired, yDesired;

function setup() {
  createCanvas(500, 500);

  // default the character to the middle of the screen
  xPos = 250;
  yPos = 250;

  // default the character to want to move to the middle of the screen
  xDesired = 250;
  yDesired = 250;

  noStroke();
}

function draw() {
  // erase the background
  background(0, 10);

  // the mouse position is always the desired position
  xDesired = mouseX;
  yDesired = mouseY;

  // move 5% of the way toward the desired position using lerp
  xPos = lerp(xPos, xDesired, 0.05);
  yPos = lerp(yPos, yDesired, 0.05);

  // draw the "character" at its current position
  fill(255);
  ellipse(xPos, yPos, 25, 25);
}
