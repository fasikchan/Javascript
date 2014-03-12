$(function() {

  var top = 0;
  var left = 0;
  var speed = 2000;

  $(".message").html("<span> Y:"+top+"<br> X:"+left+"</span>");

  function snakeGenerate() {
    $(".field").html('<div class="snake"></div>');
    prayGenerate();
  }

  function rightMove() {
    $(".snake").stop().animate({
      left: 630
    }, {
      duration: speed,
      step: function(now) {
        left = parseInt(now);
        $(".message").html("<span> Y:"+top+"<br> X:"+left+"</span>");
      }
    })
  }

  function downMove() {
    $(".snake").stop().animate({
      top: 630
    }, {
      duration: speed,
      step: function(now) {
        top = parseInt(now);
        $(".message").html("<span> Y:"+top+"<br> X:"+left+"</span>");
      }
    })
  }

  function leftMove() {
      $(".snake").stop().animate({
        left: 0
    }, {
        duration: speed,
        step: function(now) {
          left = parseInt(now);
          $(".message").html("<span> Y:"+top+"<br> X:"+left+"</span>");
        }
      })
    }

  function upMove() {
    $(".snake").stop().animate({
      top: 0
    }, {
      duration: speed,
      step: function(now) {
        top = parseInt(now);
        $(".message").html("<span> Y:"+top+"<br> X:"+left+"</span>");
      }
    })
  }

  function prayGenerate() {
    var x = parseInt(Math.random() * 630);
    var y = parseInt(Math.random() * 630);
    $(".field").html('<div class="prey"></div>');
    $(".prey").css({
      left: x,
      top: y
    });
    //return x, y;
  }

  snakeGenerate();

  $(document).keydown(function(event) {
    switch (event.which) {
      case 39: rightMove(); break;
      case 40: downMove(); break;
      case 37: leftMove(); break;
      case 38: upMove();
    }
  });

});
