// a holder variable for our artwork
let artwork;

async function setup() {
  createCanvas(500, 500);

  // load in our artwork, telling JavaScript to pause and wait until the image fully loads before continuing
  artwork = await loadImage("../images/chicken.png");

  // draw our artwork in the middle of the screen
  // note that images are drawn from their top-left corner
  // you can change this behavior by calling the imageMode(CENTER) function
  imageMode(CENTER);
  image(artwork, 250, 250);
}

function draw() {

}
