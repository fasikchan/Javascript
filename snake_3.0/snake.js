var Field = {
  x: 50,
  y: 50,

  generate: function() {
    if ($(".field").children()[0] == null) {
      for(var i = 0, x = 1, y = 1; i < this.x * this.y; i++) {
        if (x > 50) {
          x = 1;
          y++;
        };
        $(".field").append('<div class="block" id="' + x + 'x' + y + 'y"></div>');
        x++;
      }
    }
  },
}

var Snake = {
  get: [],

  create: function() {
    var block = $("#" + parseInt(Math.random() * 51) + "x" + parseInt(Math.random() * 51) + "y")
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

    },
  },
}



$(function() {
  Field.generate();

});
