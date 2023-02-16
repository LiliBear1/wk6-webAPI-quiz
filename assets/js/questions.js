// Represent each question as an object in an array

var quiz = [
  {
    // Question string
    question: "Which tag is used to create hyperlinks in HTML?",
    // Answer array
    options: ["<link>", "<a>", "<img>", "<h1>"],
    // Correct answer
    answer: "<a>",
  },

  //   Repeat question string, answer array and correct answer format for other question
  {
    question: "Which of the following is NOT a valid data type in JavaScript?",
    options: ["number", "boolean", "string", "float"],
    answer: "float",
  },
  {
    question:
      "Which property is used to change the background color of an HTML element in CSS?",
    options: ["color", "font-size", "background-color", "border"],
    answer: "background-color",
  },
  {
    question:
      "Which JavaScript function is used to add a new element to the HTML DOM?",
    options: [
      "appendChild()",
      "createElement()",
      "addElement()",
      "newElement()",
    ],
    answer: "createElement()",
  },
  {
    question: "What does the 'id' attribute do in HTML?",
    options: [
      "It specifies a class for an element.",
      "It specifies a unique identifier for an element.",
      "It sets the background color of an element.",
      "It creates a hyperlink to another webpage.",
    ],
    answer: "It specifies a unique identifier for an element.",
  },
  {
    question:
      "Which property is used to change the font family of an HTML element in CSS?",
    options: ["font-family", "font-size", "color", "text-decoration"],
    answer: "font-family",
  },
  {
    question: "Which HTML tag is used to define a table?",
    options: ["<table>", "<tr>", "<td>", "<th>"],
    answer: "<table>",
  },
  {
    question:
      "Which JavaScript function is used to remove an element from the HTML DOM?",
    options: [
      "removeChild()",
      "deleteElement()",
      "hideElement()",
      "removeElement()",
    ],
    answer: "removeChild()",
  },
  {
    question: "Which CSS property is used to center an element horizontally?",
    options: ["margin-left", "margin-right", "text-align", "padding-left"],
    answer: "text-align",
  },
  {
    question: "Which HTML tag is used to define a list?",
    options: ["<ul>", "<ol>", "<li>", "All of the above"],
    answer: "All of the above",
  },
];
