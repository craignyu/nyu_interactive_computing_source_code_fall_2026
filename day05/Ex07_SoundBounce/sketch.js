// our sound effect
let boing;

// position of our character
let xPos, yPos;

// direction for our character
let xDir, yDir;

async function setup() {
  createCanvas(500, 500);

  // load our sound
  boing = await loadSound("../sounds/boing.mp3");

  // set the character to start in the middle of the screen
  xPos = 250;
  yPos = 250;

  // give the character an initial starting direction
  xDir = -2;
  yDir = -1;
}

function draw() {
  background(0);

  // move the character
  xPos += xDir;
  yPos += yDir;

  // bounce, if necessary
  if (xPos > width - 25 || xPos < 0) {
    xDir *= -1;
    // trigger our sound
    boing.play();
  }
  if (yPos > height - 25 || yPos < 0) {
    yDir *= -1;
    // trigger our sound
    boing.play();
  }

  // draw our character
  fill(255);
  rect(xPos, yPos, 25, 25);
}