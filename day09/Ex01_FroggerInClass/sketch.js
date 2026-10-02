// artwork for the game
let artFrogLeft, artFrogRight, artFrogUp, artFrogDown;
let artBackground;
let artCar1, artCar2, artCar3;

async function setup() {
    createCanvas(500, 500);

    // load in all of our graphics
    artBackground = await loadImage("../images/froggerImages/background.png");
    artFrogUp = await loadImage("../images/froggerImages/frog_up.png");
    artFrogDown = await loadImage("../images/froggerImages/frog_down.png");
    artFrogLeft = await loadImage("../images/froggerImages/frog_left.png");
    artFrogRight = await loadImage("../images/froggerImages/frog_right.png");
    artCar1 = await loadImage("../images/froggerImages/car_1.png");
    artCar2 = await loadImage("../images/froggerImages/car_2.png");
    artCar3 = await loadImage("../images/froggerImages/car_3.png");
}

function draw() {
    // draw the background of our world
    image(artBackground, 0, 0);
}
