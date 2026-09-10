// a holder variable for our artwork
let artwork;

async function setup() {
  createCanvas(500, 500);

  // load our image, pausing the function until it completes
  artwork = await loadImage("../images/flower-1.png");

  // draw all images from their center point
  imageMode(CENTER);

  // turn off the standard mouse cursor
  noCursor();
}

function draw() {
  background(0);

  image(artwork, mouseX, mouseY);
}
