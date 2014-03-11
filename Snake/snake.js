$(function() {

  function createField() {
    var x = 1;
    var y = 1;

    for ( ;y <= 50;) {
      $(".field").append('<div class="block" id="x:'+ x +' y:'+ y +'"></div>');
      x++;
      if (x > 50) {
        y++;
        x = 1;
      }
    };
  };


})
