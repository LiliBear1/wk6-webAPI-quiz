# Module 6 Challenge Web APIs Plan: Code Quiz

## Task

Build a timed coding quiz 
With multiple-choice questions
App will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code


## User Story
```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

Create a code quiz that contains the following requirements:

  A start button
  * When clicked a timer starts and the first question appears
    // Look back at timer and countdown exercise this week
  * Questions contain buttons for each answer.
    // Look back at JS questions module
  * When answer is clicked, the next question appears.
    // Consider audio sound for correct being added here, MDN doc on Ausio APIs

  * If the answer clicked was incorrect 
     // Consider audio sound for incorrect being added here, MDN doc on Ausio APIs
  * Then subtract time from the clock
    // Link this in with the timer functionalit
  
  The quiz should end when: 
  * All questions are answered or;
  * The timer reaches 0.
    // Question logic and timer functionality here

  When the game ends:
  * It should display their score
  * Give the user the ability to
    * Save their initials and
    * Save their score 
    // Local storage DOM, retain the score, prevent default
  
Notes
* Consider sound files for incorrect and correct 
* Javascript to add in
    /assets/js/logic.js (INDEX)
    /assets/js/questions.js (INDEX)
    /assets/js/scores.js (HIGHSCORES)

## Mock-Up

The following animation demonstrates the application functionality:

![Animation of code quiz. Presses button to start quiz. Clicks the button for the answer to each question, displays if answer was correct or incorrect. Quiz finishes and displays high scores. User adds their intials, then clears their intials and starts over.](./assets/08-web-apis-challenge-demo.gif)

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

