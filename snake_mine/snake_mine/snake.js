4bed619635938114dc
55f12df73c6fcb4063b80be1a7b433e5e05cba416511513937e3e515d31684c6c64d3c6acaaf524e3a972
function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var gameField = {
  width: 25,
  height: 25,
  matrix: [],
  game: false,
  timer: false,
  snakeIterator: false,
  food: false,
  score: 0,

  init: function() {
    for(var i = 0; i < this.width; i++) {
      this.matrix[i] = [];
      for(var j = 0; j < this.height; j++) {
        this.matrix[i][j] = 0;
      }
    }
    this.food = false;
    this.snakeIterator = false;
    this.score = 0;

    snake.init();
    $('#field').css({width:(this.width*10) + 'px', height:(this.height*10) + 'px'});
  },
  stop: function() {
    console.log('stop');
    this.game = false;
    clearInterval(this.snakeIterator);
    clearInterval(this.timer);
  },

  start: function() {
    this.init();
    this.game = true;

    this.timer = setInterval(function() {
      if (!gameField.snakeIterator) {
        gameField.snakeIterator = setInterval(function(){
          snake.move();
          //gameField.render();

        }, 1000 / snake.speed);
      }
      gameField.cook()
      gameField.render();
    }, 50);
  },

  cook: function() {
    while (!this.food) {
      var x = getRandomInt(0, 24);
      var y = getRandomInt(0, 24);

      if (this.matrix[x][y] == 0) {
        this.matrix[x][y] = 2;
        this.food = true;
      }
    }
  },

  render: function() {
    console.log('render');
    $('#field').html('');
    $('#score').html(this.score);
    for(var i = 0; i < this.width; i++) {
      for(var j = 0; j < this.height; j++) {
        if (this.matrix[i][j] > 0) {
          $('<div></div>').addClass('block block' + this.matrix[i][j]).css({left: (i * 10) + 'px', top: (j * 10) + 'px'}).appendTo('#field');
        }
      }
    }
    //console.log($('#field').html());
  }
}

var snake = {
  body: [],
  angle: 0.0,
  speed: 5,
  init: function() {
    this.body = [];
    this.body[0] = [getRandomInt(1, 24), getRandomInt(1, 24)];
    gameField.matrix[this.body[0][0]][this.body[0][1]] = 1;
  },
  move: function() {
    var tail = this.body[this.body.length - 1];
    var newX = this.body[0][0] + Math.round(Math.cos(this.angle));
    var newY = this.body[0][1] + Math.round(Math.sin(this.angle));

    if (newX >= 0 && newX < gameField.width && newY >= 0 && newY < gameField.height) {
      if (gameField.matrix[newX][newY] == 2) this.eat();
        else if (gameField.matrix[newX][newY] == 1) this.die();
          else {
            gameField.matrix[tail[0]][tail[1]] = 0;
            this.body.pop();
          }

      gameField.matrix[newX][newY] = 1;
      this.body.unshift([newX,newY]);
    } else {
      this.die();
    }
  },
  die: function() {
    gameField.stop();
  },
  eat: function(){
    gameField.score += 1;
    gameField.food = false;
    this.speed += 1;
  }

}

$(function() {

  gameField.init();
  gameField.start();

  $(document).keydown(function(event) {
    switch (event.which) {
      case 39: snake.angle = 0; break;
      case 40: snake.angle = Math.PI / 2; break;
      case 37: snake.angle = Math.PI; break;
      case 38: snake.angle = -Math.PI / 2; break;
    }
  });

  $('#restart').click(function(){
    gameField.stop();
    gameField.start();
  })

});
