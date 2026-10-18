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

    // offset values - we will use this to "slide" the world left and right
    // around the character
    this.offsetX = 0;
    this.offsetY = 0;
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
    push();
    translate(this.offsetX, this.offsetY);
    for (var row = 0; row < this.levelArray.length; row += 1) {
      for (var col = 0; col < this.levelArray[row].length; col += 1) {
        this.displayTile(this.levelArray[row][col], col*this.tileSize, row*this.tileSize);
      }
    }
    pop();
  }

  // requestSlide: slides the world around the player (for scrolling purposes)
  requestSlide(direction, playerX, playerY, speed) {

    if (direction == "left") {

      // no need to slide if the player is on the left side of the screen
      if (playerX < width/2) {
        return false;
      }

      // compute the x position of the right-most tile in our level
      let rightMostX = this.levelArray[0].length * this.tileSize + this.offsetX;

      // if that position is off the right edge of the screen then we need to slide
      if (rightMostX > width) {
        this.offsetX -= speed;
        return true;
      }

      // otherwise we have reached the end of the world - no more sliding
      return false;
    }

    if (direction == "right") {

      // no need to slide if the player is on the right side of the screen
      if (playerX > width/2) {
        return false;
      }

      // compute the x position of the left-most tile in our level
      let leftMostX = 0 + this.offsetX;

      // if that position is off the left edge of the screen then we need to slide
      if (leftMostX < 0) {
        this.offsetX += speed;
        return true;
      }

      // otherwise we have reached the end of the world - no more sliding
      return false;
    }

    return false;
  }

  // get a tile based on a screen x,y position
  getTile(x, y) {
    // convert the x & y position into a grid position
    let col = Math.floor( (x-this.offsetX) / this.tileSize);
    let row = Math.floor( (y-this.offsetY) / this.tileSize);

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
