function GameObject (avatar, xCoordinate, yCoordinate, type, target, direction) {
  this.avatar = avatar;
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.enemyType = type;
  this.enemyTarget = target;
  this.direction = direction;
}

function coinFlip() {
  return Math.floor(Math.random() * 2);
}

function movePattern (enemy, counter) {
  if (enemy.enemyType === "horizontal") {
    moveNpcHorizontal(enemy);
  } else if (enemy.enemyType === "vertical") {
    moveNpcVertical(enemy);
  } else if (enemy.enemyType === "patrol") {
    moveNpcPatrol(enemy);
  } else if (enemy.enemyType === "hunter") {
    if(counter%2 === 0){
      moveNpcHunter(enemy);
    }
  }
}

function moveNpcHunter(enemy) {
  var xDistance = enemy.enemyTarget.xCoordinate - enemy.xCoordinate;
  var yDistance = enemy.enemyTarget.yCoordinate - enemy.yCoordinate;
  if (Math.abs(xDistance) > Math.abs(yDistance)) {
    if (xDistance > 0) {
      if (notABarrier(enemy, "right") && notAWall(enemy, "right")) {
        enemy.xCoordinate += 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "down") && notAWall(enemy, "down")) {
        enemy.yCoordinate += 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "up") && notAWall(enemy, "up")) {
        enemy.yCoordinate -= 1;
      }
    } else if (xDistance < 0) {
      if (notABarrier(enemy, "left") && notAWall(enemy, "left")) {
        enemy.xCoordinate -= 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "down") && notAWall(enemy, "down")) {
        enemy.yCoordinate += 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "up") && notAWall(enemy, "up")) {
        enemy.yCoordinate -= 1;
      }
    }
  } else if (Math.abs(yDistance) > Math.abs(xDistance)) {
    if (yDistance > 0) {
      if (notABarrier(enemy, "down") && notAWall(enemy, "down")) {
        enemy.yCoordinate += 1;
      } else if (xDistance >= 0 && notABarrier(enemy, "right") && notAWall(enemy, "right")) {
        enemy.xCoordinate += 1;
      } else if (xDistance <= 0 && notABarrier(enemy, "left") && notAWall(enemy, "left")) {
        enemy.xCoordinate -= 1;
      }
    } else if (yDistance < 0) {
      if (notABarrier(enemy, "up") && notAWall(enemy, "up")) {
        enemy.yCoordinate -= 1;
      } else if (xDistance >= 0 && notABarrier(enemy, "right") && notAWall(enemy, "right")) {
        enemy.xCoordinate += 1;
      } else if (xDistance <= 0 && notABarrier(enemy, "left") && notAWall(enemy, "left")) {
        enemy.xCoordinate -= 1;
      }
    }
  } else {
    if (xDistance > 0) {
      if (notABarrier(enemy, "right") && notAWall(enemy, "right")) {
        enemy.xCoordinate += 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "down") && notAWall(enemy, "down")) {
        enemy.yCoordinate += 1;
      } else if (Math.abs(yDistance) >= 0 && notABarrier(enemy, "up") && notAWall(enemy, "up")) {
        enemy.yCoordinate -= 1;
      }
    } else if (xDistance < 0) {
      if (notABarrier(enemy, "left") && notAWall(enemy, "left")) {
        enemy.xCoordinate -= 1;
      } else if (yDistance >= 0 && notABarrier(enemy, "down") && notAWall(enemy, "down")) {
        enemy.yCoordinate += 1;
      } else if (Math.abs(yDistance) >= 0 && notABarrier(enemy, "up") && notAWall(enemy, "up")) {
        enemy.yCoordinate -= 1;
      }
    }
  }
}

function moveNpcPatrol(enemy) {
  if (enemy.direction === "down") {
    if (enemy.yCoordinate < 5 && notABarrier(enemy, "down") && notAWall(enemy, "down")) {
      enemy.yCoordinate +=1;
    } else {
      enemy.direction = "left";
    }
  } else if (enemy.direction === "left") {
    if (enemy.xCoordinate > 0 && notABarrier(enemy, "left") && notAWall(enemy, "left")) {
      enemy.xCoordinate -=1;
    } else {
      enemy.direction = "up";
    }
  } else if (enemy.direction === "up") {
    if (enemy.yCoordinate > 0 && notABarrier(enemy, "up") && notAWall(enemy, "up")) {
      enemy.yCoordinate -=1;
    } else {
      enemy.direction = "right";
    }
  } else if (enemy.direction === "right") {
    if (enemy.xCoordinate < 5 && notABarrier(enemy, "right") && notAWall(enemy, "right")) {
      enemy.xCoordinate +=1;
    } else {
      enemy.direction = "down";
    }
  } else {
    enemy.direction = "left";
  }
}

function moveNpcHorizontal(enemy) {
  if (enemy.direction === "right") {
    if (enemy.xCoordinate < 5 && notAWall(enemy, "right") && notABarrier(enemy, "right")) {
      enemy.xCoordinate += 1;
    } else {
      enemy.xCoordinate -= 1;
      enemy.direction = "left";
    }
  } else {
    if (enemy.xCoordinate > 0 && notAWall(enemy, "left") && notABarrier(enemy, "left")) {
      enemy.xCoordinate -= 1;
    } else {
      enemy.xCoordinate += 1;
      enemy.direction = "right";
    }
  }
}

function moveNpcVertical(enemy) {
  if (enemy.direction === "down") {
    if (enemy.yCoordinate < 5 && notAWall(enemy, "down") && notABarrier(enemy, "down")) {
      enemy.yCoordinate += 1;
    } else {
      enemy.yCoordinate -= 1;
      enemy.direction = "up";
    }
  } else {
    if (enemy.yCoordinate > 0 && notAWall(enemy, "up") && notABarrier(enemy, "up")) {
      enemy.yCoordinate -= 1;
    } else {
      enemy.yCoordinate += 1;
      enemy.direction = "down";
    }
  }
}

function notABarrier(object, direction) {
  if (direction === "left") {
    if ($(".y" + object.yCoordinate + " .x" + (object.xCoordinate - 1)).attr('class').includes("barrier")) {
      return false;
    }
    return true;
  } else if (direction === "right") {
    if ($(".y" + object.yCoordinate + " .x" + (object.xCoordinate + 1)).attr('class').includes("barrier")) {
      return false;
    }
    return true;
  } else if (direction === "up") {
    if ($(".y" + (object.yCoordinate - 1) + " .x" + object.xCoordinate).attr('class').includes("barrier")) {
      return false;
    }
    return true;
  } else if (direction === "down") {
    if ($(".y" + (object.yCoordinate + 1) + " .x" + object.xCoordinate).attr('class').includes("barrier")) {
      return false;
    }
    return true;
  }
}

function notAWall(object, direction) {
  if (direction === "left") {
    if ($(".y" + object.yCoordinate + " .x" + object.xCoordinate).attr('class').includes("wall-left")) {
      return false;
    } else {
      return true;
    }
  } else if (direction === "right") {
    if ($(".y" + object.yCoordinate + " .x" + object.xCoordinate).attr('class').includes("wall-right")) {
      return false;
    } else {
      return true;
    }
  } else if (direction === "up") {
    if ($(".y" + object.yCoordinate + " .x" + object.xCoordinate).attr('class').includes("wall-up")) {
      return false;
    } else {
      return true;
    }
  } else if (direction === "down") {
    if ($(".y" + object.yCoordinate + " .x" + object.xCoordinate).attr('class').includes("wall-down")) {
      return false;
    } else {
      return true;
    }
  }
}

function powerUpCheck(player, item) {
  if(player.xCoordinate === item.xCoordinate && player.yCoordinate === item.yCoordinate) {
    return true;
  } else{
    return false;
  }
}

// USER INTERFACE LOGIC
function triggerInterrupt(player, goal, enemies, turnCounter, turnLimit) {
  var interrupt = false;
  if (player.xCoordinate === goal.xCoordinate && player.yCoordinate === goal.yCoordinate) {
    $("#status h3").html("You win!");
    $("#controls").hide();
    $("#game-over").show();
    interrupt = true;
  } else if (turnCounter === turnLimit) {
    $("#status h3").html("You're out of turns, you lose!");
    $("#controls").hide();
    $("#game-over").show();
    interrupt = true;
  }
  enemies.forEach(function(enemy) {
    if (player.xCoordinate === enemy.xCoordinate && player.yCoordinate === enemy.yCoordinate) {
      $("#status h3").html("You lose!");
      $("#controls").hide();
      $("#game-over").show();
      interrupt = true;
    }
  });
  return interrupt;
}

function positionGameObjects(array) {
  $("td").text("");
  array.forEach(function(element) {
    $(".y" + element.yCoordinate + " .x" + element.xCoordinate).html("<img src=\"img/" + element.avatar + "\" class=\"" + element.direction + "\">");
  });
}

// Positive Turn Counter - In Use
function meterUp(turnCounter, turnLimit) {
  turnCounter ++;
  var percentileWidth = turnCounter / turnLimit * 100;
  $("#meter").removeClass("warning"); // React to Power Up
  if (percentileWidth >= 40 && percentileWidth < 70) {
    $("#meter").removeClass("danger"); // React to Power Up
    $("#meter").addClass("warning");
  } else if (percentileWidth >= 70) {
    $("#meter").addClass("danger");
  }
  $("#meter").width(percentileWidth + "%");
  return turnCounter;
}

// Negative Turn Counter - Not In Use
function meterDown(turnCounter, poweredUp, powerUpValue) {
  var meterWidthMax = 660;
  if (poweredUp) {
    var unitWidth = parseInt($("#meter").width()) / (turnCounter - powerUpValue);
  } else {
    var unitWidth = parseInt($("#meter").width()) / turnCounter;
  }
  turnCounter --;
  var percentileWidth = unitWidth * turnCounter / 660 * 100;
  $("#meter").removeClass("warning"); // React to Power Up
  if (percentileWidth >= 40 && percentileWidth < 70) {
    $("#meter").removeClass("danger");  // React to Power Up
    $("#meter").addClass("warning");
  } else if (percentileWidth < 40) {
    $("#meter").addClass("danger");
  }
  $("#meter").width(percentileWidth + "%");
  return turnCounter;
}

$(document).ready(function() {
  // Configure Meter
  // Use 0% for Positive Turn Counting (turnCounter < turnLimit) or
  // Use 100% for Negative Turn Counting (turnCounter > turnLimit)
  $("#meter").width("0%")
  var turnCounter = 0;
  var turnLimit = 20;

  var gameObjects = [];
  var enemies = [];

  // Create extra game objects and push to corresponding arrays
  var goal = new GameObject("default-goal.png", 5, 5);
  var powerUp = new GameObject("default-powerup.png", 3, 3,);
  var powerUpValue = 5;
  var player = new GameObject("default-player.png", 0, 0);
  var enemy1 = new GameObject("default-patrol.png", 1, 4, "patrol");
  var enemy2 = new GameObject("default-hunter.png", 5, 0, "hunter", player);
  var enemy3 = new GameObject("default-linear.png", 5, 4, "horizontal");

  gameObjects.push(goal, powerUp, player, enemy1, enemy2, enemy3);
  enemies.push(enemy1, enemy2, enemy3);

  positionGameObjects(gameObjects);

  function progressTurn() {
    var poweredUp = powerUpCheck(player, powerUp);
    if (poweredUp) {
      powerUp.xCoordinate = "";
      if (turnLimit === 0) {
        turnCounter += powerUpValue;
      } else if (turnLimit !== 0) {
        turnCounter -= powerUpValue;
      }
    }
    positionGameObjects(gameObjects);
    if (triggerInterrupt(player, goal, enemies, turnCounter, turnLimit) === false) {
      enemies.forEach(function(enemy) {
        movePattern(enemy, turnCounter);
      });
      positionGameObjects(gameObjects);
    }
    triggerInterrupt(player, goal, enemies, turnCounter, turnLimit);
    if (triggerInterrupt(player, goal, enemies, turnCounter, turnLimit) === true) {
      if (player.xCoordinate === goal.xCoordinate && player.yCoordinate === goal.yCoordinate) {
        $("#meter").addClass("shutdown-meter");
        $("#meter").removeAttr("id");
      } else {
        if (turnLimit === 0) {
          turnCounter = 1;
        } else if (turnLimit !== 0) {
          turnCounter = turnLimit - 1;
        }
      }
    }

    // Configure Meter - Use meterUp or meterDown - meterUp in Use
    turnCounter = meterUp(turnCounter, turnLimit);
    // turnCounter = meterDown(turnCounter, poweredUp, powerUpValue)
  }

  function playerMove(direction) {
    if (direction === "left") {
      if (player.xCoordinate > 0 && notAWall(player, "left") && notABarrier(player, "left")) {
        player.xCoordinate = player.xCoordinate - 1;
        player.direction = "left";
      }
    } else if (direction === "right") {
      if (player.xCoordinate < 5 && notAWall(player, "right") && notABarrier(player, "right")) {
        player.xCoordinate = player.xCoordinate + 1;
        player.direction = "right";
      }
    } else if (direction === "up") {
      if (player.yCoordinate > 0 && notAWall(player, "up") && notABarrier(player, "up")) {
        player.yCoordinate = player.yCoordinate - 1;
      }
    } else if (direction === "down") {
      if (player.yCoordinate < 5 && notAWall(player, "down") && notABarrier(player, "down")) {
        player.yCoordinate = player.yCoordinate + 1;
      }
    }
    progressTurn();
  }

  // Mouse Navigation
  $("#navigation button.movement").click(function() {
    var playerDirection = $(this).attr("id");
    playerMove(playerDirection);
  });

  // Arrow Key Navigation
  $(document).keydown(function(e){
    if (triggerInterrupt(player, goal, enemies, turnCounter, turnLimit)) {
      return;
    } else if (e.keyCode === 65) {
       playerMove("left")
    } else if (e.keyCode === 68) {
       playerMove("right")
    } else if (e.keyCode === 87) {
       playerMove("up")
    } else if (e.keyCode === 83) {
       playerMove("down")
    }
  });

  $("#controls .toggle").click(function() {
    $("#controls button span").toggle();
  });

  $("#restart").click(function() {
    location.reload();
  });
});
