// artwork
let mario, mario_blue;

// location of mario
let marioX, marioY;

async function setup() {
  createCanvas(500, 500);
  noCursor();

  // load artwork
  mario = await loadImage("../images/mario.png");
  mario_blue = await loadImage("../images/mario_blue.png");

  // define mario's position
  marioX = 250 - 0.5 * mario.width;
  marioY = 250 - 0.5 * mario.height;

  // set global fill color
  fill(255);
}

function draw() {
  background(0);

  // compute the four sides of each character
  let marioRight = marioX + mario.width;
  let marioLeft = marioX;
  let blueRight = mouseX + mario_blue.width;
  let blueLeft = mouseX;
  let marioTop = marioY;
  let marioBottom = marioY + mario.height;
  let blueTop = mouseY;
  let blueBottom = mouseY + mario_blue.height;

  // deterine if a collision has occurred
  noStroke();
  if (marioRight < blueLeft || marioLeft > blueRight || marioBottom < blueTop || marioTop > blueBottom) {
    text("NO COLLISION", 20, 20);
  }
  else {
    text("COLLISION", 20, 20);
    background(255, 0, 0);
  }

  // draw our characters (mario has a defined position, blue mario is mouse controlled)
  image(mario, marioX, marioY);
  image(mario_blue, mouseX, mouseY);

  // visual debugging
  stroke(0, 255, 0);
  if (marioRight < blueLeft) {
    line(marioRight, marioTop, marioRight, marioBottom);
  }
  if (marioLeft > blueRight) {
    line(marioLeft, marioTop, marioLeft, marioBottom);
  }
  if (marioBottom < blueTop) {
    line(marioLeft, marioBottom, marioRight, marioBottom);
  }
  if (marioTop > blueBottom) {
    line(marioLeft, marioTop, marioRight, marioTop);
  }


}
