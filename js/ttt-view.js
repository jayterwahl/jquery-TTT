var View = function (game, $el) {
  this.game = game;
  this.$el = $el;
  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
  var currentGame = this.game;
  var view = this;
  this.$el.on("click", ".square", function Name(event) {
    console.log(event);
    var $current = $(event.currentTarget);
    var position = $current.data("pos");
    currentGame.playMove(position);
    $current.text(currentGame.currentPlayer);


    $current.removeClass("square");
    $current.addClass("marked");
    if (view.checkWinner()) {
      view.$el.off("click", Name);
    }
  });


};


View.prototype.checkWinner = function() {
  var currentGame = this.game;
  console.log("hello");
  if (currentGame.isOver()) {
    var $words = $("<content>");
    $words.text("WINRAR");
    console.log($words);
    this.$el.append($words);
    return true;
  }

};

// View.prototype.makeMove = function ($square) {
// };

View.prototype.setupBoard = function () {

  for (var i = 0; i < 3; i++)  {
    var colIdx = i;
    var $col = $("<ul>").addClass("col").addClass("group");
    for(var rowIdx = 0; rowIdx < 3; rowIdx++) {
      var $square = $("<li>").addClass("square").data("pos", [rowIdx, colIdx]);
      $col.append($square);
    }
    this.$el.append($col);

  }

};

module.exports = View;
