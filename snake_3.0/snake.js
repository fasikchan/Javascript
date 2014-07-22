var Field = {
  x: 25,
  y: 25,
  speed: 100,

  generate: function() {
    $(".message").html("<span>Score: "+ (Snake.get.length) +"</span>")
    if ($(".field").children()[0] == null) {
      for(var i = 0, x = 1, y = 1; i < this.x * this.y; i++) {
        if (x > 25) {
          x = 1;
          y++;
        };
        $(".field").append('<div class="block" id="' + x + 'x' + y + 'y"></div>');
        x++;
      }
    }
  },
  exploration: function(next_block) {
    if (next_block == null || next_block.hasClass('snake')) {
      alert('You lose!');
      location.reload();
    } else {
      length = Snake.get.length - 1
      block = $('#'+ Snake.get[length])
      block.removeClass('snake');

      for (i = length; i > 0; i--) {
        Snake.get[i] = Snake.get[i - 1]
      }

      Snake.get[0] = next_block.attr('id');
      next_block.addClass('snake');
    }
    if (next_block.hasClass('prey')) {
      next_block.removeClass('prey');
      Snake.get.unshift(next_block.attr('id'));
      next_block.addClass('snake');
      $(".message").html("<span>Score: "+ (Snake.get.length - 1) +"</span>")
      Prey.generate();
    }
  }
}

var Snake = {
  get: [],

  create: function() {
    var block = $("#5x5y")
    block.addClass('snake');
    this.get.push(block.attr("id"));
  },

  x: function() {
    x = parseInt(Snake.get[0].match(/\d+(?=x)/));
    return x
  },

  y: function() {
    y = parseInt(Snake.get[0].match(/\d+(?=y)/));
    return y
  },

  moving: {
    left: function() {
      next_block = (Snake.x() - 1) == 0 ? null : $('#' + (Snake.x() - 1) + 'x' + Snake.y() + 'y');
      Field.exploration(next_block);
    },
    right: function() {
      next_block = (Snake.x() + 1) == (Field.x + 1) ? null : $('#' + (Snake.x() + 1) + 'x' + Snake.y() + 'y');
      Field.exploration(next_block);
    },
    up: function() {
      next_block = (Snake.y() - 1) == 0 ? null : $('#' + Snake.x() + 'x' + (Snake.y() - 1) + 'y');
      Field.exploration(next_block);
    },
    down: function() {
      next_block = (Snake.y() + 1) == (Field.y + 1) ? null : $('#' + Snake.x() + 'x' + (Snake.y() + 1) + 'y');
      Field.exploration(next_block);
    }
  },
}

var Prey = {
  generate: function() {
    var block = $("#" + (parseInt(Math.random() * 25) + 1) + "x" + (parseInt(Math.random() * 25) + 1) + "y");
    if(!block.hasClass('snake')) {
      block.addClass('prey');
    } else {
      this.generate();
    }
  }
}

$(function() {

  Field.generate();
  Prey.generate();
  Snake.create();

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
      case 39: clearQueue(); s39 = setInterval(Snake.moving.right, Field.speed); break;
      case 40: clearQueue(); s40 = setInterval(Snake.moving.down, Field.speed); break;
      case 37: clearQueue(); s37 = setInterval(Snake.moving.left, Field.speed); break;
      case 38: clearQueue(); s38 = setInterval(Snake.moving.up, Field.speed);
    }
  });

});
