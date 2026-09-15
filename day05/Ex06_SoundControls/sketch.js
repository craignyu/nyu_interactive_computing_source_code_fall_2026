// declare a holder variable fo our sound
let song;

async function setup() {
  createCanvas(200, 200);

  // preload our sound
  song = await loadSound("../sounds/pokemon_theme.mp3");

  // instructions  
  background(0);
  fill(255);
  text("Hit a key to play", 20, 20);
}

function draw() {
}

function keyPressed() {
  // if the sound is not playing we need to start it up
  if (song.isPlaying() == false) {
    song.play();

    // instructions
    background(0, 255, 0);
    fill(0);
    text("Hit a key to stop", 20, 20);
  }
  // otherwise we need to stop it
  else {
    song.stop();

    // instructions
    background(0);
    fill(255);
    text("Hit a key to play", 20, 20);
  }
}