$(document).ready(function(){
  var gridDimension = prompt("How many squares do you want per row?");
  //var gridDimension = 8;

  for (y = 0; y < gridDimension; y++) {
    var row = $('<div class="row"></div>');
    $(row).height(500/gridDimension);
    for (x = 0; x < gridDimension; x++) {
      var square = $('<div class="square"></div>');
      $(square).height(500/gridDimension).width(500/gridDimension);
      square.appendTo(row);
    }
    $('.container').append(row);
  }
  hoverEffect();
  normalMode();
  rainbowMode();
  eraserMode();
  reset();

//create hover effect
  function hoverEffect() {
    $('.square').on('mouseover', function(){
      $(this).css('background-color', 'black')
    });
  }
 //create normalMode function where the .square style is black
  function normalMode() {
    $('.normal-button').on('click', function(){
      $('.square').on('mouseover', function(){
        $(this).css('background-color', 'black');
      });
    });
  }

//create rainbowMode function where the .square style is a random color
  function rainbowMode() {
    $('.rainbow-button').on('click', function(){
      $('.square').on('mouseover', function(){
        $(this).css("background-color","rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")")
      });
    });
  }

//create eraser function where the .square style is white
function eraserMode() {
    $('.eraser-button').on('click', function(){
      $('.square').on('mouseover', function(){
        $(this).css('background-color', 'white');
      });
    });
  }

//create a reset button
function reset() {
  $('.reset-button').on('click', function() {
    $('.square').css('background-color', 'white');
  });
}
});
