// image assets
let user_left, user_right;
let enemy_left, enemy_right;
let floor_background;
let key_graphic;

// preload assets
function preload() {
    user_left = loadImage('../images/zeldaImages/user_left.png');
    user_right = loadImage('../images/zeldaImages/user_right.png');
    enemy_left = loadImage('../images/zeldaImages/enemy_left.png');
    enemy_right = loadImage('../images/zeldaImages/enemy_right.png');
    floor_background = loadImage('../images/zeldaImages/floor_background.jpg');
    key_graphic = loadImage('../images/zeldaImages/key_graphic.png');
}

function setup() {
    createCanvas(500, 500);

    // all images should be drawn from their center points
    imageMode(CENTER);
}

function draw() {
    // note - we are drawing all images from their center points in this sketch,
    // not their top left points
    image(floor_background, 250, 250);
}