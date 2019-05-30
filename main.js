$(document).ready(function(){

  $("#rock").on("click", function() {

    $("#w").show("#w");
    $("#c").show("#c");
    $("#p").show("#p");
    $("#winner").show("#winner");
    if (compChoice === "paper")
    document.getElementById('w').innerHTML = 'computer wins'
    else if (compChoice === "scissors")
    document.getElementById('w').innerHTML = 'player wins'
    else
    document.getElementById('w').innerHTML = 'well.. it\'s a tie'

  });
  $("#paper").on("click", function() {
    $("#w").show("#w");
    $("#c").show("#c");
    $("#p").show("#p");
    $("#winner").show("#winner");
    if (compChoice === "scissors")
    document.getElementById('w').innerHTML = 'computer wins'
    else if (compChoice === "rock")
    document.getElementById('w').innerHTML = 'player wins'
    else
    document.getElementById('w').innerHTML = 'well.. it\'s a tie'

  });
  $("#scissors").on("click", function() {
    $("#w").show("#w");
    $("#c").show("#c");
    $("#p").show("#p");
    $("#winner").show("#winner");
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

// full screen method

var elem = document.documentElement;

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
}


function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();

  }
}

// Events
var output = document.getElementById("myP");
document.addEventListener("fullscreenchange", function() {
  output.innerHTML = "fullscreenchange event fired!";
});

document.addEventListener("webkitfullscreenchange", function() {
  output.innerHTML = "webkitfullscreenchange event fired!";
});
