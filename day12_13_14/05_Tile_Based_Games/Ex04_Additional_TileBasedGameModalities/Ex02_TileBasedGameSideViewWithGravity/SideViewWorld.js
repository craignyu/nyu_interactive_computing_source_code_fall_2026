class SideViewWorld {
  constructor(params) {
    // store our desired tile size
    this.tileSize = params.tileSize;

    // store our tileset
    this.tileSet = params.tileSet;

    // store an object that defines which tiles are solid
    this.solidTiles = params.solidTiles;

    // store our array that describes the level
    this.levelArray = params.tileMap;

    // store gravity information
    this.gravity = params.gravity;
    this.gravityMax = params.gravityMax;
  }

  // displayTile: draw tile with an ID of id and position x,y
  displayTile(id, x, y) {
    // step 1: figure out how many tiles are on each row of our image
    let tilesPerRow = int( this.tileSet.width / this.tileSize );
  
    // step 2: give the tile ID, figure out where that tile exists
    // in the source image.
    let imageX = int( id % tilesPerRow ) * this.tileSize;
    let imageY = int( id / tilesPerRow ) * this.tileSize;
  
    // step 3: draw the desired tile
    image(this.tileSet, x, y, this.tileSize, this.tileSize,
          imageX, imageY, this.tileSize, this.tileSize);
  }

  // displayWorld: displays the current world
  displayWorld() {
    for (var row = 0; row < this.levelArray.length; row += 1) {
      for (var col = 0; col < this.levelArray[row].length; col += 1) {
        this.displayTile(this.levelArray[row][col], col*this.tileSize, row*this.tileSize);
      }
    }
  }

  // get a tile based on a screen x,y position
  getTile(x, y) {
    // convert the x & y position into a grid position
    var col = Math.floor(x/this.tileSize);
    var row = Math.floor(y/this.tileSize);

    // if the computed position is not in the array we can send back a -1 value
    if (row < 0 || row >= this.levelArray.length || col < 0 || col >= this.levelArray[row].length) {
      return -1;
    }

    // get the tile from our map
    return this.levelArray[row][col];
  }

  // see if this tile is solid
  isTileSolid(id) {
    if (id in this.solidTiles || id == -1) {
      return true;
    }

    // otherwise return false
    return false;
  }
}
