class OverheadWorld {
  constructor(params) {
    // store our desired tile size
    this.tileSize = params.tileSize;

    // store our tileset
    this.tileSet = params.tileSet;

    // store an object that defines which tiles are solid
    this.solidTiles = params.solidTiles;
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

  // setup rooms
  setupRooms(data, startRoom) {
    // store room data (an object)
    this.roomData = data;

    // store our current room
    this.roomCurrent = startRoom;

    // extract the level definition for our starting room
    this.tileMap = this.roomData[this.roomCurrent].level;
  }

  // displayWorld: displays the current world
  displayWorld() {
    for (var row = 0; row < this.tileMap.length; row += 1) {
      for (var col = 0; col < this.tileMap[row].length; col += 1) {
        this.displayTile(this.tileMap[row][col], col*this.tileSize, row*this.tileSize);
      }
    }
  }

  // get a tile based on a screen x,y position
  getTile(x, y) {
    // convert the x & y position into a grid position
    var col = Math.floor(x/this.tileSize);
    var row = Math.floor(y/this.tileSize);

    // if the computed position is not in the array we should determine if this movement
    // requires a room change - if so we need to notifiy the player
    if (row < 0 && this.roomData[this.roomCurrent].up != "none") {
      return "roomChange";
    }
    else if (row >= this.tileMap.length && this.roomData[this.roomCurrent].down != "none") {
      return "roomChange";
    }
    else if (col < 0 && this.roomData[this.roomCurrent].left != "none") {
      return "roomChange";
    }
    else if (col >= this.tileMap[row].length && this.roomData[this.roomCurrent].right != "none") {
      return "roomChange";
    }

    // otherwise we hit and edge but there is no room to move into - assume the edge is solid
    else if (row < 0 || row >= this.tileMap.length || col < 0 || col >= this.tileMap[row].length) {
      return -1;
    }

    // get the tile from our map
    return this.tileMap[row][col];
  }

  // change rooms
  changeRoom(direction) {
    // store our current room
    this.roomCurrent = this.roomData[this.roomCurrent][direction];

    // extract the level definition for our starting room
    this.tileMap = this.roomData[this.roomCurrent].level;
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
