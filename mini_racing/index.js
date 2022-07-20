const levels = [
  // OldLevel
  // prettier-ignore
  [
        4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,
        4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
        4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,
        1,0,0,0,1,1,1,4,4,4,4,1,1,1,1,1,1,0,0,1,
        1,0,0,1,1,0,0,1,4,4,1,1,0,0,0,0,1,0,0,1,
        1,0,0,1,0,0,0,0,1,4,1,0,0,0,0,0,1,0,0,1,
        1,0,0,1,0,0,0,0,0,1,1,0,0,5,0,0,1,0,0,1,
        1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,
        1,0,0,1,0,0,5,0,0,0,5,0,0,1,0,0,1,0,0,1,
        1,2,2,1,0,0,1,1,0,0,0,0,0,1,0,0,5,0,0,1,
        1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,
        0,3,0,0,0,0,1,4,1,0,0,0,1,1,0,0,0,0,0,1,
        0,3,0,0,0,0,1,4,4,1,1,1,1,1,1,0,0,0,1,1,
        1,1,1,1,1,1,1,4,4,4,4,4,4,4,1,1,1,1,1,4,
  ],
  // SlamZone
  // prettier-ignore
  [
        1,1,1,1,1,1,1,1,5,1,1,5,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,5,1,1,1,1,1,5,0,0,5,1,1,1,1,1,5,0,1,
        1,0,1,4,4,0,0,0,0,0,0,0,0,0,0,4,4,1,0,1,
        1,0,1,4,4,5,0,5,0,5,0,5,0,5,0,4,4,1,0,1,
        1,0,1,4,4,0,0,0,0,0,0,0,0,0,0,4,4,1,0,1,
        1,0,1,4,4,0,5,0,5,0,5,0,5,0,5,4,4,1,0,1,
        1,2,1,4,4,0,0,0,0,0,0,0,0,0,0,4,4,1,2,1,
        1,1,5,1,1,0,1,1,1,1,1,1,1,1,0,1,1,5,1,1,
        1,0,0,0,1,0,1,4,4,4,4,4,4,1,0,1,0,0,0,1,
        5,0,5,0,5,0,1,4,5,3,3,5,4,1,0,5,0,5,0,5,
        1,0,1,0,0,0,1,4,1,0,0,1,4,1,0,0,0,1,0,1,
        1,0,1,1,1,1,1,1,5,0,0,5,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,5,1,1,5,1,1,1,1,1,1,1,1,
],
  // TheArena
  // prettier-ignore
  [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,4,0,0,0,0,4,0,0,0,0,0,4,1,1,1,1,
        1,1,1,0,0,0,0,4,0,0,0,4,0,0,0,0,0,1,1,1,
        1,1,0,0,0,4,0,0,0,4,0,0,0,4,0,0,4,0,1,1,
        1,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,1,
        1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,
        1,5,2,2,5,1,0,0,0,5,0,0,0,0,5,5,5,0,0,1,
        1,1,1,1,1,1,0,1,0,0,0,5,0,0,0,0,5,0,5,1,
        1,5,3,3,5,1,0,0,5,1,1,0,0,5,0,0,0,0,0,1,
        1,0,0,0,0,1,1,0,0,0,1,5,0,5,0,0,5,0,5,1,
        1,0,0,0,0,1,1,0,5,0,1,0,0,5,0,0,0,0,0,1,
        1,1,0,0,5,5,5,0,1,0,5,0,0,5,0,5,5,0,1,1,
        1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,
        1,1,1,1,5,5,5,1,1,1,0,0,5,0,5,0,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
],
];

/**
  Constants
 */
const terrain = {
  road: 0,
  wall: 1,
  startLine: 2,
  finishLine: 3,
  tree: 4,
  flag: 5,
};

/**========================================================================
     Load Images
==========================================================================*/

/* 
*GAME_LOGIC* 
number of racers should not exceed number of available cars 
OR each car image should be made visually unique if selected by multiple racers 

*/

const terrainTiles = [
  { type: terrain.flag, fileName: 'track_flag.png' },
  { type: terrain.finishLine, fileName: 'track_goal.png' },
  { type: terrain.road, fileName: 'track_road.png' },
  { type: terrain.tree, fileName: 'track_tree.png' },
  { type: terrain.wall, fileName: 'track_wall.png' },
];

const cars = [
  { vehicleId: 0, fileName: 'car_mini_blue.png' },
  { vehicleId: 1, fileName: 'car_mini_orange.png' },
];

// TODO it should not be possible to choose an invalid vehicleId
// TODO Display 'displayName' above each car
const racers = [
  { displayName: 'Enzo', vehicleId: cars[0].vehicleId },
  { displayName: 'Mike', vehicleId: cars[1].vehicleId },
];

function getVehicleById(id, vehicles) {
  return vehicles.find((v) => v.vehicleId === id);
}

let picsToLoad = racers.length + terrainTiles.length;

function countLoadedImagesAndLaunchIfReady() {
  picsToLoad--;
  if (picsToLoad == 0) {
    imageLoadingDoneSoStartGame();
  }
}

let carPics = [];
function loadVehicleImage({ vehicleId }, vehicles) {
  carPics[vehicleId] = new Image();
  carPics[vehicleId].onload = countLoadedImagesAndLaunchIfReady;
  carPics[vehicleId].src =
    'images/' + getVehicleById(vehicleId, vehicles).fileName;
}

// TODO trackPics could be moved to top of containing scope.
let trackPics = [];
function loadTerrainImage({ type, fileName }) {
  trackPics[type] = new Image();
  trackPics[type].onload = countLoadedImagesAndLaunchIfReady;
  trackPics[type].src = 'images/' + fileName;
}

function loadImages() {
  for (const racer of racers) {
    loadVehicleImage(racer, cars);
  }

  for (const tile of terrainTiles) {
    loadTerrainImage(tile);
  }
}

function drawBitmapCenteredWithRotation(useBitmap, atX, atY, withAng) {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.rotate(withAng);
  canvasContext.drawImage(
    useBitmap,
    -useBitmap.width / 2,
    -useBitmap.height / 2
  );
  canvasContext.restore();
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorText(showWords, textX, textY, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillText(showWords, textX, textY);
}

/**========================================================================
    Car
==========================================================================*/

function carClass() {
  this.x = 75;
  this.y = 75;
  this.ang = 0;
  this.speed = 0;

  this.myCarPic; // which picture to use
  this.name = 'Untitled Car';

  this.keyHeld_Gas = false;
  this.keyHeld_Reverse = false;
  this.keyHeld_TurnLeft = false;
  this.keyHeld_TurnRight = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;

  this.bindInputKeys = function (upKey, rightKey, downKey, leftKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
  };

  this.reset = function (whichImage, carName) {
    this.name = carName;
    this.myCarPic = whichImage;
    this.speed = 0;

    for (let eachRow = 0; eachRow < tileRows; eachRow++) {
      for (let eachCol = 0; eachCol < tileCols; eachCol++) {
        let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (trackGrid[arrayIndex] == terrain.startLine) {
          trackGrid[arrayIndex] = terrain.road;
          this.ang = -Math.PI / 2;
          this.x = eachCol * tileWidth + tileWidth / 2;
          this.y = eachRow * tileHeight + tileHeight / 2;
          return;
        }
      }
    }

    // TODO handle error
    // TODO remove console log and print message instead
    console.log('NO PLAYER START FOUND!');
  };

  this.move = function () {
    // TODO put these values in context ie. a typical range
    const GROUNDSPEED_DECAY_MULT = 0.94;
    const DRIVE_POWER = 0.5;
    const REVERSE_POWER = 0.2;
    const TURN_RATE = 0.1;
    const MIN_SPEED_TO_TURN = 0.3;

    this.speed *= GROUNDSPEED_DECAY_MULT;

    if (this.keyHeld_Gas) {
      this.speed += DRIVE_POWER;
    }
    if (this.keyHeld_Reverse) {
      this.speed -= REVERSE_POWER;
    }
    if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
      if (this.keyHeld_TurnLeft) {
        this.ang -= TURN_RATE;
      }
      if (this.keyHeld_TurnRight) {
        this.ang += TURN_RATE;
      }
    }

    this.x += Math.cos(this.ang) * this.speed;
    this.y += Math.sin(this.ang) * this.speed;

    carTrackHandling(this);
  };

  this.draw = function () {
    drawBitmapCenteredWithRotation(this.myCarPic, this.x, this.y, this.ang);
  };
}

/**========================================================================
    Tracks
==========================================================================*/

const tileWidth = 40;
const tileHeight = 40;
const tileCols = 20;
const tileRows = 15;

let trackGrid = [];

function getTileType(col, row) {
  // TODO Make this if case more readable
  if (col >= 0 && col < tileCols && row >= 0 && row < tileRows) {
    var trackIndexUnderCoord = rowColToArrayIndex(col, row);
    return trackGrid[trackIndexUnderCoord];
  } else {
    return terrain.wall;
  }
}

function carTrackHandling(whichCar) {
  var carTrackCol = Math.floor(whichCar.x / tileWidth);
  var carTrackRow = Math.floor(whichCar.y / tileHeight);
  var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

  if (
    carTrackCol >= 0 &&
    carTrackCol < tileCols &&
    carTrackRow >= 0 &&
    carTrackRow < tileRows
  ) {
    const tileHere = getTileType(carTrackCol, carTrackRow);

    if (tileHere == terrain.finishLine) {
      // TODO animate win state with confetti
      // TODO remove console log and print message instead
      console.log(whichCar.name + ' WINS!');

      currentLevel = currentLevel + 1 === levels.length ? 0 : currentLevel + 1;

      loadLevel(levels[currentLevel]);
    } else if (tileHere != terrain.road) {
      // prevents car getting stuck in a wall
      whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
      whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;

      whichCar.speed *= -0.5;
    }
  }
}

function rowColToArrayIndex(col, row) {
  return col + tileCols * row;
}

function drawTracks() {
  var arrayIndex = 0;
  var drawTileX = 0;
  var drawTileY = 0;
  for (let eachRow = 0; eachRow < tileRows; eachRow++) {
    for (let eachCol = 0; eachCol < tileCols; eachCol++) {
      var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
      var tileKindHere = trackGrid[arrayIndex];
      var useImg = trackPics[tileKindHere];

      canvasContext.drawImage(useImg, drawTileX, drawTileY);
      drawTileX += tileWidth;
      arrayIndex++;
    }
    drawTileY += tileHeight;
    drawTileX = 0;
  }
}

/**==================================================================
    Input
====================================================================*/

// TODO Debug purposes only. Remove once code in version control
// var mouseX = 0;
// var mouseY = 0;

function setupInput() {
  // TODO Debug purposes only. Remove once code in version control
  // canvas.addEventListener('mousemove', updateMousePos);

  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);

  const KEY_LEFT = 37;
  const KEY_UP = 38;
  const KEY_RIGHT = 39;
  const KEY_DOWN = 40;

  const KEY_W = 87;
  const KEY_A = 65;
  const KEY_S = 83;
  const KEY_D = 68;

  car1.bindInputKeys(KEY_W, KEY_D, KEY_S, KEY_A);
  car2.bindInputKeys(KEY_UP, KEY_RIGHT, KEY_DOWN, KEY_LEFT);
}

// TODO Debug purposes only. Remove once code in version control
// function updateMousePos(evt) {
//   var rect = canvas.getBoundingClientRect();
//   var root = document.documentElement;

//   mouseX = evt.clientX - rect.left - root.scrollLeft;
//   mouseY = evt.clientY - rect.top - root.scrollTop;

//   // cheat / hack to test car in any position
//   /*
//   carX = mouseX;
// 	carY = mouseY;
// 	carSpeedX = 4;
// 	carSpeedY = -4;
//   */
// }

function keySet(keyEvent, whichCar, setTo) {
  if (keyEvent.keyCode == whichCar.controlKeyLeft) {
    whichCar.keyHeld_TurnLeft = setTo;
  }
  if (keyEvent.keyCode == whichCar.controlKeyRight) {
    whichCar.keyHeld_TurnRight = setTo;
  }
  if (keyEvent.keyCode == whichCar.controlKeyUp) {
    whichCar.keyHeld_Gas = setTo;
  }
  if (keyEvent.keyCode == whichCar.controlKeyDown) {
    whichCar.keyHeld_Reverse = setTo;
  }
}

function keyPressed(evt) {
  keySet(evt, car1, true);
  keySet(evt, car2, true);

  evt.preventDefault();
}

function keyReleased(evt) {
  keySet(evt, car1, false);
  keySet(evt, car2, false);
}

/**==================================================================
    Main
====================================================================*/

let car1 = new carClass();
let car2 = new carClass();

let canvas, canvasContext;

window.onload = function () {
  canvas = document.getElementById('racingGame');
  canvasContext = canvas.getContext('2d');
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  colorText('LOADING IMAGES', canvas.width / 2, canvas.height / 2, 'white');

  loadImages();
  // then -> switch on cars
  // then -> cars move
};

let currentLevel = 0;
function imageLoadingDoneSoStartGame() {
  const framesPerSecond = 30;
  setInterval(updateAll, 1000 / framesPerSecond);

  setupInput();
  loadLevel(levels[currentLevel]);
}

function loadLevel(whichLevel) {
  trackGrid = whichLevel.slice();
  car1.reset(carPics[0], 'Car 1');
  car2.reset(carPics[1], 'Car 2');
}

function updateAll() {
  moveAll();
  drawAll();
}

function moveAll() {
  car1.move();
  car2.move();
}

function drawAll() {
  drawTracks();
  car1.draw();
  car2.draw();
}
