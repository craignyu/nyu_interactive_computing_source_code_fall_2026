// a holder variable for our two charater states
let chicken_left, chicken_right;

// a holder variable to keep track of which graphic to use
let chicken_current;

async function setup() {
  createCanvas(500, 500);

  // load our images
  chicken_left = await loadImage("../images/chicken_left.png");
  chicken_right = await loadImage("../images/chicken_right.png");  

  // draw all images from their center point
  imageMode(CENTER);

  // indicate that our current chicken is the left facing one
  chicken_current = chicken_left;
}

function draw() {
  background(0);

  fill(255);
  //text("Current mouse position: " + mouseX + ", " + mouseY, 20, 20);
  //text("Previous mouse position: " + pmouseX + ", " + pmouseY, 20, 40);

  // draw the character using the correct artwork
  if (pmouseX < mouseX) {
    chicken_current = chicken_right;
  }
  else if (pmouseX > mouseX) {
    chicken_current = chicken_left;
  }

  // draw our current chicken
  image(chicken_current, mouseX, mouseY);
}
