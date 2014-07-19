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
        $(".field").append('<div class="block" id="x' + x + 'y' + y +'"></div>');
        x++;
      }
    }
  },
}

var Snake = {
  get: [],

  add: function() {
    var block = $("#x" + parseInt(Math.random() * 51) + "y" + parseInt(Math.random() * 51) + "")
    block.addClass('snake');
    this.get.push(block.attr("id"));
  },

  moving: {
    left: function() {
      console.log(Snake.get)
    }
  }
}



$(function() {
  Field.generate();

});
