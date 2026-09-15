// NOTE: this demo showcases how a p5 sketch can be used in conjunction with an
// HTML document.  Please open up the 'index.html' file and refer to it as necessary

function setup() {
    // create our canvas & store a reference
    let canvas = createCanvas(500, 500);

    // erase the background
    background(128);
}

function draw() {
    // just draw some random ellipses
    fill(random(255));
    ellipse(random(25, width - 25), random(25, height - 25), 25, 25);
}
