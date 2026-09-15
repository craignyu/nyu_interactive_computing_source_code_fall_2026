// define the desired aspect ratio for our canvas
let aspectRatio = 800 / 600;

// get a reference to the canvas element
let cnv;

function setup() {
    // create our canvas with the desired base size
    // we will scale this up or down as needed when the window is resized
    cnv = createCanvas(800, 600);

    // reparent the canvas to the '#canvas-container' div
    cnv.parent('canvas-container');

    // call our custom canvas adjustment function once to initially position the canvas
    adjustCanvasSize();
}

function draw() {
    fill(random(255), random(255), random(255));
    ellipse(random(50, width - 50), random(50, height - 50), 50, 50);
}

function windowResized() {
    // whenever the window is resized, call the adjustCanvasSize function
    adjustCanvasSize();
}

function adjustCanvasSize() {
    // compute the current aspect ratio of the window
    let windowAspectRatio = window.innerWidth / window.innerHeight;

    // if the window aspect ratio is wider than the canvas aspect ratio,
    // we should maximize the height
    if (windowAspectRatio > aspectRatio) {
        cnv.elt.style.height = '100vh';
        cnv.elt.style.width = 'auto';
    }
    // otherwise maximze the width
    else {
        cnv.elt.style.width = '100vw';
        cnv.elt.style.height = 'auto';
    }
}