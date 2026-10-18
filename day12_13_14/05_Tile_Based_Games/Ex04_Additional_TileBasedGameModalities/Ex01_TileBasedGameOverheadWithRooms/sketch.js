// SPECIAL NOTE: This program uses a number of external JavaScript files to organize some of
// the objects that we need to fully implement a tile-based game.  These JavaScript files
// are referenced in the HTML document.  References to these documents are also included
// as comments within this file.

// our world object - this object handles our tiles, drawing the world and converting screen
// coordinates into game coordinates - see OverheadWorld.js for more information
let theWorld;

// our user controlled character object - see Player.js for more information
let thePlayer;

// tileset graphic
let tileSet;

// player graphics
let artworkLeft, artworkRight, artworkUp, artworkDown;

// create an object to hold our "world parameters" - we will send this object into our
// OverheadWorld to tell it how our world is organized
let worldParameters = {
  tileSize: 32,
  solidTiles: {
    266: true,
    267: true
  }
};

// room data - loaded in from an external file (see 'data/rooms.json')
let roomData;


async function setup() {
  createCanvas(320, 320);

  // handle the tile loading and creating our player object in preload before the game can start
  // load in room data
  roomData = loadJSON("data/rooms.json");

  // load our tileset
  tileSet = loadImage('../../../images/ProjectUtumno_full.png');

  // load our player graphics
  artworkLeft = loadImage('../../../images/link_left.png');
  artworkRight = loadImage('../../../images/link_right.png');
  artworkUp = loadImage('../../../images/link_up.png');
  artworkDown = loadImage('../../../images/link_down.png');

  // set up our world parameters to include a reference to our tileset
  worldParameters.tileSet = tileSet;

  // create our world
  theWorld = new OverheadWorld(worldParameters);

  // create our player
  thePlayer = new Player(100, 100, 32, artworkLeft, artworkRight, artworkUp, artworkDown, theWorld);

  // now that everything is fully loaded send over the room data to our world object
  // also let the world know which room we should start with
  theWorld.setupRooms(roomData, "start");
}

function draw() {
  theWorld.displayWorld()
  thePlayer.move();
  thePlayer.display();
}
