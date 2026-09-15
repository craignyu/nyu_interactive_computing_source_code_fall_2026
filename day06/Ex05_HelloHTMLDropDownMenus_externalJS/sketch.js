// what color should we start with?
let colorToUse = '#ff0000';

function setup() {
    // create a canvas and grab a reference to it
    let cnv = createCanvas(500, 500);

    // reparent the canvas to the 'canvas_container' div
    cnv.parent('#canvas_container');

    // set a background
    background(128);

    // set up event listeners on our UI elements
    document.querySelector('#clear_button').onclick = clearCanvas;
    document.querySelector('#color_dropdown').onchange = changeColor;
}

function draw() {
    // if the mouse is down let the user draw with the selected color
    if (mouseIsPressed) {
        fill(colorToUse);
        noStroke();
        ellipse(mouseX, mouseY, 30, 30);
    }
}

function changeColor(event) {
    // event is the browser's snapshot of the conditions that caused this event
    // to trigger.  event.currentTarget is a reference back to the element attached
    // to this listener.
    colorToUse = event.currentTarget.value;
}

function clearCanvas(event) {
    background(128);
}
