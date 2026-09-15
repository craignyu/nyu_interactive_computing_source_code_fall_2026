// variables to hold our artwork
let spaceshipArtwork;
let cowArtwork;
let backgroundArtwork;

async function setup() {
  createCanvas(500, 500);

  // load in all of our graphical assets
  backgroundArtwork = await loadImage("../images/background.jpg");
  spaceshipArtwork = await loadImage("../images/ufo.png");
  cowArtwork = await loadImage("../images/cow.png");
}

function draw() {

}
