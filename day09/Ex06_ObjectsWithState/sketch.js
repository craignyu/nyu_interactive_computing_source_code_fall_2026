// two edge hugger objects
let hugger1, hugger2, hugger3, hugger4;

function setup() {
    createCanvas(500, 500);

    // construct our two hugger objects
    hugger1 = new EdgeHugger(400, 100);
    hugger2 = new EdgeHugger(300, 200);
    hugger3 = new EdgeHugger(200, 300);
    hugger4 = new EdgeHugger(100, 400);
}

function draw() {
    background(128);

    // ask each hugger to move
    hugger1.move();
    hugger2.move();
    hugger3.move();
    hugger4.move();

    // ask each hugger to display
    hugger1.display();
    hugger2.display();
    hugger3.display();
    hugger4.display();
}

class EdgeHugger {

    constructor(x, y) {
        // all EdgeHugger objects should keep track of their own position
        this.xPos = x;
        this.yPos = y;

        // all EdgeHugger objects have four states:
        // 0 = move right
        // 1 = move up
        // 2 = move left
        // 3 = move down
        // we can keep track of this information using a property
        this.state = 0;

        // keep track of our own color too (randomized)
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }

    // display function
    display() {
        // draw our circle
        fill(this.r, this.g, this.b);
        ellipse(this.xPos, this.yPos, 50, 50);

        // draw our state value - for debugging purposes
        fill(255);
        ellipse(this.xPos, this.yPos, 30, 30);
        fill(0);
        text(this.state, this.xPos, this.yPos);
    }

    // move function
    move() {
        // we need to move based on our "state" variable

        // this is the move right state
        if (this.state == 0) {
            this.xPos += 1;

            // check to see if we need to move out of this state
            if (this.xPos >= width - 25) {
                // time to move to state 1!
                this.xPos = width - 25;
                this.state = 1;
            }
        }

        // this is the move up state
        else if (this.state == 1) {
            this.yPos -= 1;

            // check to see if we need to move out of this state
            if (this.yPos <= 25) {
                // time to move to state 2!
                this.yPos = 25;
                this.state = 2;
            }
        }

        // this is the move left state
        else if (this.state == 2) {
            this.xPos -= 1;

            // check to see if we need to move out of this state
            if (this.xPos <= 25) {
                // time to move to state 3!
                this.xPos = 25;
                this.state = 3;
            }
        }

        // this is the move down state
        else if (this.state == 3) {
            this.yPos += 1;

            // check to see if we need to move out of this state
            if (this.yPos >= height - 25) {
                // time to move BACK to state 0!
                this.yPos = height - 25;
                this.state = 0;
            }
        }
    }
}
