// variables to hold our artwork
let spaceshipArtwork;
let cowArtwork;
let backgroundArtwork;

// store the current position of our spaceship
let shipX = 250;
let shipY = 100;

// store the current position of our cow
let cowX = 250;
let cowY = 380;

// keep track of points
let points = 0;
let misses = 0;

async function setup() {
  createCanvas(500, 500);

  // load in all of our graphical assets
  backgroundArtwork = await loadImage("../images/background.jpg");
  spaceshipArtwork = await loadImage("../images/ufo.png");
  cowArtwork = await loadImage("../images/cow.png");
}

function draw() {
  // draw our background image
  imageMode(CORNER);
  image(backgroundArtwork, 0, 0);

  // report the # of points earned & missed cows
  text("Points: " + points, 50, 50);
  text("Lost cows: " + misses, 50, 75);

  // draw the spaceship & the cow
  imageMode(CENTER);
  image(cowArtwork, cowX, cowY);
  image(spaceshipArtwork, shipX, shipY);

  // move the cow away from the spaceship
  // here we are mapping the distance between the two actors to compute a speed variable
  // being close to the UFO causes the cow to move faster
  let cowDistance = dist(shipX, shipY, cowX, cowY);
  if (cowDistance <= 200) {
    let cowSpeed = map(cowDistance, 0, 200, 2, 0.5);

    if (cowX < shipX) {
      cowX -= cowSpeed;
    }
    else {
      cowX += cowSpeed;
    }
  }


  // did the cow get away?
  if (cowX > width || cowX < 0) {
    misses += 1;
    cowX = random(50, 450);
  }

  // see if we need to move the spaceship
  if (keyIsDown('a') || keyIsDown('A')) {
    shipX -= 3;
  }
  if (keyIsDown('d') || keyIsDown('D')) {
    shipX += 3;
  }
  if (keyIsDown('w') || keyIsDown('W')) {
    shipY -= 3;
  }
  if (keyIsDown('s') || keyIsDown('S')) {
    shipY += 3;
  }

  // see if the spaceship has touched the cow
  if (cowDistance < 25) {
    points += 1;
    cowX = random(50, 450);
  }
}
