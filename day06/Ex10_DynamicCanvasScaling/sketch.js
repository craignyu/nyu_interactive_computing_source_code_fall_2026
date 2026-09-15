function setup() {
    // create a canvas with the current size of the browser window
    let cnv = createCanvas(windowWidth, windowHeight);
    
    // apply an inline style to the canvas
    // note that we have to do this as an inline style
    // because p5 sets an inline style on the canvas
    // element by default.  setting an embedded
    // style at the top of the page won't be specific
    // enough, so in order to override p5's style
    // the new rule must be inline as well
    //
    // also note that cnv.elt references the actual DOM element of the canvas
    // just like performing a call to document.querySelector('canvas')
    // to isolate the canvas
    cnv.elt.style.width = '100%';
    cnv.elt.style.height = '100%';
}

function draw() {
    fill(random(255), random(255), random(255));
    ellipse(random(50,width-50), random(50, height-50), 50, 50);
}
