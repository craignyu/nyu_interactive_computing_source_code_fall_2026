// declare a holder letiable for our sound
let song;

async function setup() {
  createCanvas(100, 100);

  // load our sound
  song = await loadSound("../sounds/pokemon_theme.mp3");

  background(0);
  fill(255);
  text("Click to play!", 20, 20);
}

function mousePressed() {
  // play our sound when the user clicks the mouse
  song.play();
}

function draw() {
}
