var canvas;
var canvasContext;
const canvasHeight = 200;
const canvasWidth = 400;
const fontSize = 16;
const canvasBgColourLight = "#2E86C1";
const canvasBgColourDark = "#2c3e50";
const canvasFgColourLight = "white";
const canvasFgColourDark = "white";

const K = 10;

const PADDLE_THICKNESS = K;
const PADDLE_HEIGHT = 7.5 * K;
var paddle1Y;
var paddle2Y;
const p1Colour = "#E74C3C";
const p2Colour = "black";

var ballX = 0.5 * K;
var ballY = 0.5 * K;
const V = 5;
var ballSpeedX = V;
var ballSpeedY = 0.4 * V;
const ballSize = 0.5 * K;
const ballColour = "#6CD84C";

var player1Score = 0;
var player2Score = 0;
const WINNING_SCORE = 3;
var showingWinScreen = false;

function calculateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.left - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY,
  };
}

function keyboardMovement(ky, v, max, min) {
  switch (ky) {
    case "j":
      const incr = v + 10;
      return incr > max ? v : incr;

    case "k":
      const decr = v - 10;
      return decr < min ? v : decr;

    default:
      return v;
  }
}

function computerMovement() {
  var paddle2YCenter = paddle2Y + PADDLE_HEIGHT / 2;
  if (paddle2YCenter < ballY - 35) {
    paddle2Y += 6;
  } else if (paddle2YCenter > ballY + 35) {
    paddle2Y -= 6;
  }
}

function handleMouseClick(_evt) {
  if (showingWinScreen) {
    player1Score = 0;
    player2Score = 0;
    showingWinScreen = false;
  }
}

window.onload = function () {
  canvas = document.getElementById("pongCanvas");
  canvasContext = canvas.getContext("2d");
  canvasContext.font = `${fontSize}px Arial`;
  paddle1Y = canvas.height / 2 - PADDLE_HEIGHT / 2;
  paddle2Y = canvas.height / 2 - PADDLE_HEIGHT / 2;

  const framesPerSecond = 30;
  setInterval(function () {
    moveEverything();
    drawEverything();
  }, 1000 / framesPerSecond);

  document.addEventListener("keydown", (e) => {
    paddle1Y = keyboardMovement(
      e.key,
      paddle1Y,
      canvas.height - PADDLE_HEIGHT / 2,
      0 - PADDLE_HEIGHT / 2
    );
  });

  document.addEventListener("keyup", (e) => {
    switch (e.key) {
      case " ":
        if (showingWinScreen) handleMouseClick(null);
        return;
      default:
        return;
    }
  });

  canvas.addEventListener("mousedown", handleMouseClick);

  canvas.addEventListener("mousemove", function (evt) {
    mousePos = calculateMousePos(evt);
    paddle1Y = mousePos.y - PADDLE_HEIGHT / 2;
  });
};

function ballReset() {
  if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
    showingWinScreen = true;
  }

  ballSpeedX = -ballSpeedX;
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
}

function moveEverything() {
  if (showingWinScreen) {
    return;
  }

  computerMovement();

  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;

  if (ballX < 0 + PADDLE_THICKNESS * 1.75) {
    if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
      ballSpeedX = -ballSpeedX;

      var deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
      ballSpeedY = deltaY * 0.35;
    } else {
      player2Score++;
      ballReset();
    }
  }

  if (ballX > canvas.width - PADDLE_THICKNESS * 1.75) {
    if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
      ballSpeedX = -ballSpeedX;

      var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
      ballSpeedY = deltaY * 0.35;
    } else {
      player1Score++;
      ballReset();
    }
  }

  if (ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }
}

function drawNet() {
  for (var i = 0; i < canvas.height; i += 40) {
    colorRect(canvas.width / 2 - 10, i, 2, 20, canvasFgColourDark);
  }
}

function drawEverything() {
  //next line makes screen black
  colorRect(0, 0, canvas.width, canvas.height, canvasBgColourDark);

  if (showingWinScreen) {
    canvasContext.fillStyle = canvasFgColourDark;

    if (player1Score >= WINNING_SCORE) {
      const msg = "Player 1 wins!";
      canvasContext.fillText(
        msg,
        canvas.width / 2 - msg.length * 3.75,
        canvas.height / 2 - 10
      );
    }
    if (player2Score >= WINNING_SCORE) {
      const msg = "Player 2 wins!";
      canvasContext.fillText(
        "Player 2 wins!",
        canvas.width / 2 - msg.length * 3.75,
        canvas.height / 2 - 10
      );
    }

    const clickMsg = "spacebar to continue";
    canvasContext.fillText(
      clickMsg,
      canvas.width / 2 - clickMsg.length * 3.45,
      canvas.height / 2 + 10
    );

    return;
  }

  drawNet();

  // Drw left player paddle
  colorRect(0 + 2, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, p1Colour);
  // Draw right computer paddle
  colorRect(
    canvas.width - 2 - PADDLE_THICKNESS,
    paddle2Y,
    PADDLE_THICKNESS,
    PADDLE_HEIGHT,
    p2Colour
  );

  canvasContext.fillStyle = canvasFgColourDark;
  canvasContext.fillText(player1Score, canvas.width / 2 - 50, 30);
  canvasContext.fillText(player2Score, canvas.width / 2 + 25, 30);

  // Draw ball
  colorCircle(ballX, ballY, ballSize, ballColour);
}

function colorCircle(centerX, centerY, radius, colour) {
  canvasContext.fillStyle = colour;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function colorRect(leftX, topY, width, height, colour) {
  canvasContext.fillStyle = colour;
  canvasContext.fillRect(leftX, topY, width, height);
}
