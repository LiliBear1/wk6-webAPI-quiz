// Variables Select elements from HTML
var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var questionTitle = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var feedbackEl = document.querySelector("#feedback");
var endScreenEl = document.querySelector("#end-screen");
var finalScoreEl = document.querySelector("#final-score");
var initialsInput = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

// Quiz variables
var currentQuestionIndex = 0;
var time = 75;
var timerInterval;
var score = 0;

// Start quiz function
function startQuiz() {
  // Hide start screen and show questions
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

  // Start timer
  timerInterval = setInterval(function () {
    time--;
    timeEl.textContent = time;

    // End quiz if timer reaches 0
    if (time <= 0) {
      endQuiz();
    }
  }, 1000); //   milliseconds 

  // Display first question
  displayQuestion();
}

// Display question function
function displayQuestion() {
  // Get current question from questions.js file
  var currentQuestion = quiz[currentQuestionIndex];

  // Set question title and choices
  questionTitle.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";

  // Loop through answer options and create button for each one
  currentQuestion.options.forEach(function (option) {
    var button = document.createElement("button");
    button.textContent = option;
    choicesEl.appendChild(button);

    // Check answer on click
    button.addEventListener("click", function () {
      // Check if answer is correct
      if (option === currentQuestion.answer) {
        // Add to score
        score++;
        // Display correct feedback
        feedbackEl.textContent = "Well done - Correct!";
      } else {
        // Subtract from time
        time -= 10;
        // Display incorrect feedback
        feedbackEl.textContent = "Oops - Incorrect :(";
      }

      // Show feedback for 1 second and then move to next question
      setTimeout(function () {
        feedbackEl.textContent = "";
        currentQuestionIndex++;
        // Check if there are more questions
        if (currentQuestionIndex < quiz.length) {
          displayQuestion();
        } else {
          endQuiz();
        }
      }, 1000);
    });
  });
}

// End quiz function
function endQuiz() {
  // Stop timer
  clearInterval(timerInterval);

  // Hide questions and show end screen
  document.getElementById("questions").classList.add("hide");
  endScreenEl.classList.remove("hide");

  // Final score
  finalScoreEl.textContent = score;

  // Save score to local storage with initials
  submitBtn.addEventListener("click", function () {
    var initials = initialsInput.value.toUpperCase();
    var allScores = JSON.parse(localStorage.getItem("allScores")) || [];

    allScores.push({ initials: initials, score: score });
    localStorage.setItem("allScores", JSON.stringify(allScores));

    // Redirect to high scores page
    window.location.href = "highscores.html";
  });
}

// Add event listener to start button
startBtn.addEventListener("click", startQuiz);
