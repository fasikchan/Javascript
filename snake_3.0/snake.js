var Field = {
  x: 25,
  y: 25,

  generate: function() {
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
    } else {
      block = $('#'+ Snake.get[Snake.get.length - 1])
      block.removeClass('snake');
      Snake.get[Snake.get.length - 1] = Snake.get[0]
      Snake.get[0] = next_block.attr('id');
      next_block.addClass('snake');
    }
    if (next_block.hasClass('prey')) {
      next_block.removeClass('prey')
      Snake.get.unshift(next_block.attr('id'))
      next_block.addClass('snake')
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
    var block = $("#" + parseInt(Math.random() * 26) + "x" + parseInt(Math.random() * 26) + "y")
    block.addClass('prey');
  }
}

$(function() {
  Field.generate();

});
