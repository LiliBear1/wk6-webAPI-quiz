// Select the high scores list and clear button
var highScore = document.querySelector("#highscores");
var clear = document.querySelector("#clear");

// Button to clear
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// Get scores from local storage
var allScores = JSON.parse(localStorage.getItem("allScores"));

// Check if allScores is an array before looping
if (Array.isArray(allScores)) {
  allScores.forEach(function(score) {
    // Create a new <li> element and add it to the high scores list
    highScore.appendChild(document.createElement("li")).textContent = `${score.initials} ${score.score}`;
  });
}
