// Variables
// Grab necessary index.html document IDs
var timer = document.querySelector(".timer");
var startQuiz = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsDiv = document.querySelector("#questions");

// Initialise variables
var score = 0;
var questionIndex = 0;

// Timer - 15 seconds per question:
var secondsRemain = 75;
var interval = 0;

// Penalty is 10 seconds per wrong answer
var penalty = 10;

// Creates new ul
var ul = document.createElement("ul");

// Start quiz timer on button click.
// When clicked a timer starts and the first question appears
 
startQuiz.addEventListener("click", function () {
  if (interval === 0) {
    interval = setInterval(function () {
      secondsRemain--;
      timer.textContent = "Time: " + secondsRemain + "s";

      if (secondsRemain <= 0) {
        clearInterval(interval);
        allDone();
        timer.textContent = "Time: 0s";
      }
    }, 1000);
  }
  render(questionIndex);
});


// Consider audio sound for correct being added here, MDN doc on Audio APIs
// Render questions and choices:
function render(questionIndex) {
  // Clears existing data
  startScreen.innerHTML = "";
  questionsDiv.innerHTML = "";
  ul.innerHTML = "";
  // Loop through question array
  for (var i = 0; i < questions.length; i++) {
    // Append question title
    var currentQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = currentQuestion;
  }

  // Question choice
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ul);
    ul.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

// Check answer
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");

    // Correct
    if (element.textContent == questions[questionIndex].answer) {
      createDiv.setAttribute("id", "createDivCorrect");
      setTimeout(() => {
        createDiv.style.display = "none";
      }, 1000); // time in milliseconds

      score++;
      createDiv.textContent =
        "Correct! The answer is:  " + questions[questionIndex].answer;

        // If the answer clicked was incorrect
        // Consider audio sound for incorrect being added here, MDN doc on Ausio APIs
    } else {
      createDiv.setAttribute("id", "createDivIncorrect");
      setTimeout(() => {
        createDiv.style.display = "none";
      }, 1000); // milliseconds

      // Deduct 10 seconds for wrong answers
      secondsRemain = secondsRemain - penalty;
      createDiv.textContent =
        "Wrong! The correct answer is:  " + questions[questionIndex].answer;
    }
  }
  // Increment questions and check for quiz end condition, then end when met
  questionIndex++;

  if (questionIndex >= questions.length) {
    createDiv.setAttribute("id", "createDiv");
    setTimeout(() => {
      createDiv.style.display = "none";
    }, 1000);

    //   When the game ends: It should display their score, Give the user the ability to Save their initials and Save their score 
    function allDone() {
        questionsDiv.innerHTML = "";
        clearInterval(interval);
      
        var createH1 = document.createElement("h1");
        createH1.setAttribute("id", "createH1");
        createH1.textContent = "All Done!";
      
        questionsDiv.appendChild(createH1);
      
        var createP = document.createElement("p");
        createP.setAttribute("id", "createP");
      
        questionsDiv.appendChild(createP);
      
        // Calculate final score and display
        var finalScore = secondsRemain;
      
        var createSpan = document.createElement("span");
        createSpan.setAttribute("id", "createSpan");
        createSpan.textContent = finalScore;
      
        createP.appendChild(createSpan);
      
        // User to enter initials in field
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "createLabel");
        createLabel.textContent = "Enter your initials: ";
      
        questionsDiv.appendChild(createLabel);
      
        var createInput = document.createElement("input");
        createInput.setAttribute("type", "text");
        createInput.setAttribute("id", "initials");
        createInput.textContent = "";
      
        questionsDiv.appendChild(createInput);
      
        // Button to submit initials and score
        var createSubmit = document.createElement("button");
        createSubmit.setAttribute("type", "submit");
        createSubmit.setAttribute("id", "submit");
        createSubmit.textContent = "Submit";
      
        questionsDiv.appendChild(createSubmit);
      
        // Event listener for submitting initials and score
        createSubmit.addEventListener("click", function () {
          var initials = createInput.value;
      
          // Ensure initials are not blank
          if (initials === "") {
            alert("Please enter your initials.");
          } else {
            // Get existing high scores from local storage or create empty array
            var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      
            // Add new high score object to the high scores array
            var newScore = {
              initials: initials,
              score: finalScore,
            };
      
            highScores.push(newScore);
      
            // Sort high scores in descending order
            highScores.sort(function (a, b) {
              return b.score - a.score;
            });
      
            // Save updated high scores to local storage
            localStorage.setItem("highScores", JSON.stringify(highScores));
      
            // Redirect to high scores page
            window.location.href = "highscores.html";
          }
    });