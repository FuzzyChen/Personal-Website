var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var level = 0;

//Game Start
$(document).keydown(function() {
  if (level === 0) {
    $("h1").text("Level " + level);
    $("body").removeClass("game-over");
    randomColorFlash();
  }
});

function randomColorFlash() {
  randomChosenColor = buttonColors[nextSequence()];
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
  userClickPattern = [];
  $("h1").text("Level " + level);
}

function nextSequence() {
  level += 1;
  var a = Math.floor(Math.random() * 4);
  return a;
}
// $("h1").text("Level " + level);
function playSound(color) {
  var a = new Audio("sounds/" + color + ".mp3");
  a.play();
}

function checkAnswer() {
  if (gamePattern.toString() === userClickPattern.toString()) {
    setTimeout(randomColorFlash, 1500);
    return true;
  } else if (gamePattern.length === userClickPattern.length) {
    var a = new Audio("sounds/wrong.mp3");
    a.play();
    $("body").addClass("game-over");
    $("h1").text("press any key to restart");
    startOver();
    return false;
  } else {
    return false;
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickPattern = [];
}

$("#green").click(function() {
  $("#green")
    .fadeOut(100)
    .fadeIn(100);
  var userChosenColor = "green";
  playSound(userChosenColor);
  userClickPattern.push(userChosenColor);
  console.log(userClickPattern);
  checkAnswer();
});

$("#yellow").click(function() {
  $("#yellow")
    .fadeOut(100)
    .fadeIn(100);
  var userChosenColor = "yellow";
  playSound(userChosenColor);
  userClickPattern.push(userChosenColor);
  console.log(userClickPattern);
  checkAnswer();
});

$("#red").click(function() {
  $("#red")
    .fadeOut(100)
    .fadeIn(100);
  var userChosenColor = "red";
  playSound(userChosenColor);
  userClickPattern.push(userChosenColor);
  console.log(userClickPattern);
  checkAnswer();
});

$("#blue").click(function() {
  $("#blue")
    .fadeOut(100)
    .fadeIn(100);
  var userChosenColor = "blue";
  playSound(userChosenColor);
  userClickPattern.push(userChosenColor);
  console.log(userClickPattern);
  checkAnswer();
});
