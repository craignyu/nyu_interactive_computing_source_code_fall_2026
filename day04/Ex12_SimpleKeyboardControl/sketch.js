// character position
let xPos, yPos;

function setup() {
  createCanvas(500, 500);

  // default the character to the middle of the screen
  xPos = 250;
  yPos = 250;

  fill(255);
  noStroke();

  textAlign(CENTER);
  textSize(50);
}

function draw() {
  background(0, 30);

  // draw the character
  ellipse(xPos, yPos, 25, 25);
}

function keyPressed() {
  // move left?
  if (key == 'A' || key == 'a') {
    xPos -= 15;
    text('A', width/2, 50);
  }
  // move right?
  if (key == 'D' || key == 'd') {
    xPos += 15;
    text('D', width/2, 50);
  }
  // move up?
  if (key == 'W' || key == 'w') {
    yPos -= 15;
    text('W', width/2, 50);
  }
  if (key == 'S' || key == 's') {
    yPos += 15;
    text('S', width/2, 50);
  }

  // same logic, but for the arrow keys
  if (keyCode == LEFT_ARROW) {
    xPos -= 15;
    text('LEFT_ARROW', width/2, 50);
  }
  if (keyCode == RIGHT_ARROW) {
    xPos += 15;
    text('RIGHT_ARROW', width/2, 50);
  }
  if (keyCode == UP_ARROW) {
    yPos -= 15;
    text('UP_ARROW', width/2, 50);
  }
  if (keyCode == DOWN_ARROW) {
    yPos += 15;
    text('DOWN_ARROW', width/2, 50);
  }
}
