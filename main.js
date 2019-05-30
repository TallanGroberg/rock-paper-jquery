$(document).ready(function(){



  $("#rock").on("click", function() {

    $("#w").show();
    $("#c").show();
    $("#r").show();
    $("#winner").show();
    if (compChoice === "paper")
    document.getElementById('w').innerHTML = 'computer wins'
    else if (compChoice === "scissors")
    document.getElementById('w').innerHTML = 'player wins'
    else
    document.getElementById('w').innerHTML = 'well.. it\'s a tie'



  });
  $("#paper").on("click", function() {
    $("#w").show();
    $("#c").show();
    $("#p").show();
    $("#winner").show();
    if (compChoice === "scissors")
    document.getElementById('w').innerHTML = 'computer wins'
    else if (compChoice === "rock")
    document.getElementById('w').innerHTML = 'player wins'
    else
    document.getElementById('w').innerHTML = 'well.. it\'s a tie'

  });
  $("#scissors").on("click", function() {
    $("#w").show();
    $("#c").show();
    $("#s").show();
    $("#winner").show();
    if (compChoice === "rock")
    document.getElementById('w').innerHTML = 'computer wins'
    else if (compChoice === "paper")
    document.getElementById('w').innerHTML = 'player wins'
    else
    document.getElementById('w').innerHTML = 'well.. it\'s a tie'

  });

});

// reg javascript


var options = ['rock', 'paper', 'scissors']
var compChoice = options[Math.floor(Math.random() * options.length)];
document.getElementById("c").innerHTML = "the computer chose " + compChoice
document.getElementById('w').innerHTML = "the winner is..."

console.log(compChoice)
