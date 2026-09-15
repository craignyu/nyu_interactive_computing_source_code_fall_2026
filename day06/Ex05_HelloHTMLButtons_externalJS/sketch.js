function setup() {
    // create a canvas and grab a reference to it
    let cnv = createCanvas(500, 500);

    // reparent the canvas to the 'canvas_container' div
    cnv.parent('#canvas_container');

    // set a background
    background(128);

    // set up event listeners for our buttons
    // note the lack of the () after createCircle and createRectangle!
    // we are saying "the function we want to call when this element is clicked
    // should be this function" - if we used () here we would immediately call
    // the function one time, and we would set the 'onclick' event listener to
    // be the return value of these functions (which is nothing)
    document.querySelector('#circle_button').onclick = createCircle;
    document.querySelector('#rectangle_button').onclick = createRectangle;
}

function draw() {
}

function createCircle() {
    // pick a random position & size
    let x = random(20, width - 20);
    let y = random(20, height - 20);
    let size = random(20, 100);

    // draw a circle here
    fill(random(255), random(255), random(255));
    ellipse(x, y, size, size);
}

function createRectangle() {
    // pick a random position & size
    let x = random(50, width - 50);
    let y = random(50, height - 50);
    let size1 = random(20, 100);
    let size2 = random(20, 100);

    // draw a circle here
    fill(random(255), random(255), random(255));
    rectMode(CENTER);
    rect(x, y, size1, size2);
}
