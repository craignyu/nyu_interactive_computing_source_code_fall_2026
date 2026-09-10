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

  // Technique #1: Use 'lerp'
  // lerp is a p5 function that stands for "Linear Interpolation"
  // it allows you to interpolate a value between two end points
  // for example, lerp(0, 100, 0.1) means "find the value that is 10% of the way from 0 to 100"
  // we can use lerp to determine what 5% of the distance between our x & y positions would be
  // and then move the character to that position
  xPos = lerp(xPos, xDesired, 0.05);
  yPos = lerp(yPos, yDesired, 0.05);

  // Technique #2: Compute the values yourself
  // Another way to do this would be to determine the distance between the x & y values
  // and then multiply this by 5%. This would result in the amount we would need to move
  // we can then add this to our x & y positions
  /*
  // compute the distance between the character and the desired location
  let distX = xDesired - xPos;
  let distY = yDesired - yPos;

  // move 5% of the way toward the desired position
  xPos += 0.05 * distX;
  yPos += 0.05 * distY;
  */

  // draw the "desired" location
  fill(0, 255, 0);
  ellipse(xDesired, yDesired, 10, 10);

  // draw the "character" at its current position
  fill(255);
  ellipse(xPos, yPos, 25, 25);
}

function mousePressed() {
  // set a new desired position for the character
  xDesired = mouseX;
  yDesired = mouseY;
}
