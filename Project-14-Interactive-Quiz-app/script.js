const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Management Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "jQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["Python Script", "JQuery", "NodeJS", "React"],
    answer: "Python Script"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: "//"
  }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function loadQuiz() {
  const output = [];

  quizData.forEach((currentQuestion, questionIndex) => {
    const options = currentQuestion.options.map(option => `
      <label>
        <input type="radio" name="question${questionIndex}" value="${option}">
        ${option}
      </label>
    `).join("");

    output.push(`
      <div class="question">
        <h3>${currentQuestion.question}</h3>
        <div class="options">${options}</div>
      </div>
    `);
  });

  quizContainer.innerHTML = output.join('');
}

function calculateScore() {
  let score = 0;

  quizData.forEach((currentQuestion, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

    if (selectedOption && selectedOption.value === currentQuestion.answer) {
      score++;
    }
  });

  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

submitButton.addEventListener('click', () => {
  calculateScore();
});

loadQuiz();
