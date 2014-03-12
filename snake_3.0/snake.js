$(function() {

  function fieldGenerate() {
    var x = 1;
    var y = 1;
    for( ;y <= 35; ) {
      $(".field").append('<div class="block" id="'+ x +'-'+ y +'"></div>');
      x++;
      if(x == 36) {
        y++;
        x = 1;
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
    var x = parseInt(Math.random() * (1, 35) + 1);
    var y = parseInt(Math.random() * (1, 35) + 1);
    $("#"+ x +"-"+ y +"").addClass("snake");
  }

  fieldGenerate();
  snakeGenerate();

});
