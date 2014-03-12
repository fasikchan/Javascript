$(function() {

  var m = [3];
  var p = 0;
  var speed = 90;
  var score = 1;

  for(var i = 0; i < 35*35; i++) {
    $(".field").append('<div class="block" data-id="'+ i +'"></div>');
  };

  createPray();
  createSnake();
  snakeAdd();
  snakeAdd();

  function gameOver() {
    for(var i = 1; i <= m.length; i++) {
      if (m[0] == m[i]) {
        alert("You lose, bitch!\nYour score: "+score);
        location.reload();
      }
    }
  }

  function eatPray() {
    if (m[0] == p) {
      $("[data-id = "+p+"]").removeClass("prey");
      createPray();
      snakeAdd();
      speed -= 1;
      score += 1;
    }
  }

  function createPray() {
    p = parseInt(Math.random() * 1224);
    $("[data-id = "+p+"]").addClass("prey");
  }

  function createSnake() {
    $("[data-id = "+m[0]+"]").addClass("snake");
  }

  function snakeAdd() {
    m[m.length] = m[m.length - 1] - 1;
    addBlock();
    $(".message").html("<span>Score: "+ score +"</span>")
  }

  function addBlock() {
    $("[data-id = "+m[0]+"]").addClass("snake");
  }

  function removeBlock() {
    $("[data-id = "+m[m.length - 1]+"]").removeClass("snake");
  }

  function cycle() {
    for (var i = m.length - 1; i > 0; i--) {
      m[i] = m[i - 1];
    };
  }

  function rightMove() {
    removeBlock();
    cycle();
    m[0] += 1;
    addBlock();
    eatPray();
    gameOver();
  }

  function downMove() {
    removeBlock();
    cycle();
    m[0] += 35;
    addBlock();
    eatPray();
    gameOver();
  }

  function leftMove() {
    removeBlock();
    cycle();
    m[0] -= 1;
    addBlock();
    eatPray();
    gameOver();
  }

  function upMove() {
    removeBlock();
    cycle();
    m[0] -= 35;
    addBlock();
    eatPray();
    gameOver();
  }

  var s39 = 0;
  var s40 = 0;
  var s37 = 0;
  var s38 = 0;

  function clearQueue() {
    clearInterval(s39);
    clearInterval(s40);
    clearInterval(s37);
    clearInterval(s38);
  }

  $(document).keydown(function(event) {
    switch (event.which) {
      case 39: clearQueue(); s39 = setInterval(rightMove, speed); break;
      case 40: clearQueue(); s40 = setInterval(downMove, speed); break;
      case 37: clearQueue(); s37 = setInterval(leftMove, speed); break;
      case 38: clearQueue(); s38 = setInterval(upMove, speed);
    }
  });

});
