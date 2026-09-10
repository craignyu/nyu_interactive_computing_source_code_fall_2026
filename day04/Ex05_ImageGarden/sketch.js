// a holder variable for our graphics
let flower1, flower2, flower3, scene;

async function setup() {
  createCanvas(640, 480);

  // load our images
  flower1 = await loadImage("../images/flower-1.png");
  flower2 = await loadImage("../images/flower-2.png");
  flower3 = await loadImage("../images/flower-3.png");
  scene = await loadImage("../images/scene.png");  

  // draw our scene
  image(scene, 0, 0, width, height);
}

function draw() {
}

function mousePressed() {
  // see which flower needs to be "planted"
  let chance = random(0, 100);

  imageMode(CENTER);
  if (chance < 33) {
    image(flower1, mouseX, mouseY);
  }
  else if (chance < 66) {
    image(flower2, mouseX, mouseY);
  }
  else {
    image(flower3, mouseX, mouseY);
  }
}

function keyPressed() {
  // save the scene
  if (key == 'S') {
    save('masterpiece.png');
  }

  // clear the scene
  else if (key == 'C') {
    imageMode(CORNER);
    image(scene, 0, 0);
  }
}
