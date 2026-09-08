// setup function - used for commands that need to run only once
function setup() {
  // only put code here that you want to happen one time,
  // at the start of your program

  // create a canvas element on the page
  createCanvas(500, 500);

  // set a fill color
  fill(0, 128, 255);

  // write some text
  text("Hello, world!", 140, 150);

  // set a larger text size
  textSize(30);
  text("Hello, world!", 140, 200);
}

// draw function - used for commands that need to be repeated
function draw() {
}
