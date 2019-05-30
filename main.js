$(document).ready(function(){

  $("#rock").on("click", function() {
    $("#winner").show();
  });
  $("#paper").on("click", function() {
    $("#winner").show();
  });
  $("#scissors").on("click", function() {
    $("#winner").show();
  });

});




// reg javascript



var options = ['rock', 'paper', 'scissors']
var computer = options[Math.floor(Math.random() * options.length)];
console.log(computer)
