// SPECIAL NOTE: This program uses a number of external JavaScript files to organize some of
// the objects that we need to fully implement a tile-based game.  These JavaScript files
// are referenced in the HTML document.  References to these documents are also included
// as comments within this file.

// our world object - this object handles our tiles, drawing the world and converting screen
// coordinates into game coordinates - see SideViewWorld.js for more information
let theWorld;

// our user controlled character object - see Player.js for more information
let thePlayer;

// create an object to hold our "world parameters" - we will send this object into our
// OverheadWorld to tell it how our world is organized
let worldParameters = {
  tileSize: 32,
  tileMap: [
    [266, 267, 267, 267, 267, 267, 267, 267, 267, 266],
    [267, 490, 490, 490, 490, 490, 490, 490, 490, 267],
    [267, 490, 490, 490, 490, 490, 490, 490, 490, 267],
    [267, 490, 490, 490, 490, 490, 490, 490, 490, 267],
    [267, 490, 490, 490, 490, 490, 490, 490, 490, 267],
    [267, 490, 490, 490, 490, 490, 490, 490, 490, 267],
    [267, 490, 490, 490, 490, 490, 267, 490, 490, 267],
    [267, 267, 267, 490, 490, 267, 490, 490, 267, 267],
    [267, 490, 490, 490, 267, 490, 490, 267, 267, 267],
    [266, 267, 267, 267, 267, 267, 267, 267, 267, 266]
  ],
  solidTiles: { 266: true, 267: true },
  gravity: 0.1,
  gravityMax: 5
};

// tileset graphic
let tileSet;

// player graphics
let artworkLeft, artworkRight, artworkUp, artworkDown;

async function setup() {
  createCanvas(320, 320);

  // handle the tile loading and creating our player object in preload before the game can start
  // load our tileset
  tileSet = await loadImage('../../../images/ProjectUtumno_full.png');

  // load our player graphics
  artworkLeft = await loadImage('../../../images/link_left.png');
  artworkRight = await loadImage('../../../images/link_right.png');
  artworkUp = await loadImage('../../../images/link_up.png');
  artworkDown = await loadImage('../../../images/link_down.png');


  // set up our world parameters to include a reference to our tileset
  worldParameters.tileSet = tileSet;

  // create our world
  theWorld = new SideViewWorld(worldParameters);

  // create our player
  thePlayer = new Player(100, 100, 32, artworkLeft, artworkRight, artworkUp, artworkDown, theWorld);
}

function draw() {
  theWorld.displayWorld()
  thePlayer.move();
  thePlayer.display();
}
