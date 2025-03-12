const questions = [
    {
        question: "What is the largest river in the  world?",
        answers: [
            {text: "The Nile River", correct: true},
            {text: "Ganga", correct: false},
            {text: " Barakar River", correct: false},
            {text: "Jalangi River", correct: false},
        ]
    },
    {
        question: "What is the largest river in the  world?",
        answers: [
            {text: "The Nile River", correct: true},
            {text: "Ganga", correct: false},
            {text: " Barakar River", correct: false},
            {text: "Jalangi River", correct: false},
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
          { text: "Paris", correct: true },
          { text: "Berlin", correct: false },
          { text: "Rome", correct: false },
          { text: "Madrid", correct: false },
        ]
      },
      {
        question: "Which planet is known as the Red Planet?",
        answers: [
          { text: "Mars", correct: true },
          { text: "Venus", correct: false },
          { text: "Jupiter", correct: false },
          { text: "Saturn", correct: false },
        ]
      },
      {
        question: "Who wrote the Harry Potter series?",
        answers: [
          { text: "J.K. Rowling", correct: true },
          { text: "Stephen King", correct: false },
          { text: "J.R.R. Tolkien", correct: false },
          { text: "George R.R. Martin", correct: false },
        ]
      },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButtons = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButtons.innerHTML = "Next";
    showQuestion();
};

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.id = "answer-1" + currentQuestionIndex + "-" + index;
        button.id = "answer-2" + currentQuestionIndex + "-" + index;
        button.id = "answer-3" + currentQuestionIndex + "-" + index;
        button.id = "answer-4" + currentQuestionIndex + "-" + index; 
        button.addEventListener("click", () => {
            checkAnswer(answer.correct);
        });
        answerButton.appendChild(button);
    });  
}

startQuiz();

 