// keep track of our rgb colors
let r = 255;
let g = 255;
let b = 255;

function setup() {
    // create a canvas and grab a reference to it
    let cnv = createCanvas(500, 500);

    // reparent the canvas to the 'canvas_container' div
    cnv.parent('#canvas_container');

    // set a background
    background(200);

    // set up event listeners for all UI elements
    document.querySelector('#r').oninput = changeRed;
    document.querySelector('#g').oninput = changeGreen;
    document.querySelector('#b').oninput = changeBlue;
}

function draw() {
    background(128);
    fill(r, g, b);
    ellipse(width / 2, height / 2, 200, 200);
}

// these functions get called every time the range inputs change in the HTML document
// they all get called with a reference back to the event that triggered.
// event.currentTarget will reference back to the slider that was changed
function changeRed(event) {
    // update the variable with the current value of this slider
    r = int(event.currentTarget.value);
}
function changeGreen(event) {
    // update the variable with the current value of this slider
    g = int(event.currentTarget.value);
}
function changeBlue(event) {
    // update the variable with the current value of this slider
    b = int(event.currentTarget.value);
}
