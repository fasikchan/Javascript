$(function() {

  var speed = 2000;
  var snake = []

  function fieldGenerate() {
    var x = 0;
    var y = 0;
    for( ;y <= 35; ) {
      $(".field").append('<div class="block" id="'+ x +'-'+ y +'"></div>');
      x++;
      if(x > 35) {
        y++;
        x = 0;
      }
    }
  }

  function getX() {
    var x = parseInt($(".snake").prop("id").split("-")[0]);
    return x;
  }

  function getY() {
    var y = parseInt($(".snake").prop("id").split("-")[1]);
    return y;
  }

  function snakeGenerate() {
    var x = parseInt(Math.random() * (5, 30) + 1);
    var y = parseInt(Math.random() * (5, 30) + 1);
    $("#"+ x +"-"+ y +"").addClass("snake");
  }

  function snakeAdd(x, y) {
    $("#"+x+"-"+y+"").addClass("snake")
  }

  function rightMove() {
    var y = getY();
    var x = getX();
    $("#"+x+"-"+y+"").removeClass("snake")
    x += 1;
    $("#"+x+"-"+y+"").addClass("snake")
    console.log(x, y);
  }

  function leftMove() {
    var y = getY();
    var x = getX();
    $("#"+x+"-"+y+"").removeClass("snake")
    x -= 1;
    $("#"+x+"-"+y+"").addClass("snake")
    console.log(x, y);
  }

  function upMove() {
    var y = getY();
    var x = getX();
    $("#"+x+"-"+y+"").removeClass("snake")
    y -= 1;
    $("#"+x+"-"+y+"").addClass("snake")
    console.log(x, y);
  }

  function downMove() {
    var y = getY();
    var x = getX();
    $("#"+x+"-"+y+"").removeClass("snake")
    y += 1;
    $("#"+x+"-"+y+"").addClass("snake")
    console.log(x, y);
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

  fieldGenerate();
  snakeGenerate();
  snakeAdd();

});
