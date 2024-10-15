/*Code for Javascript file to create Interactive Quiz Website*/

const questions = [
    {
        question: "Who developed HTML?",
        answers: [
            { text: "Brendan Eich", correct: false },
            { text: "Tim Berners-Lee", correct: true},
            { text: "Guido van Rossum", correct: false },
            { text: "Dennis Ritchie", correct: false }
        ]
    },
    {
        question: "What are the types of CSS?",
        answers: [
            { text: "External CSS", correct: false },
            { text: "Inline CSS", correct: false },
            { text: "Outer CSS", correct: false },
            { text: "Inline, Internal and External CSS", correct: true }
        ]
    },
    {
        question: "What is the purpose of JavaScript in web development?",
        answers: [
            { text: "Provide structure to webpage", correct: false },
            { text: "To make Dynamic and user-friendly", correct: true },
            { text: "To Design elements of webpage", correct: false },
            { text: "None of Above", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a link between html page and css page?",
        answers: [
            { text: "<script>", correct: false },
            { text: "<link>", correct: true },
            { text: "<a>", correct: false },
            { text: "<url>", correct: false }
        ]
    },
    {
        question: "What is the symbol of ID Selector in CSS?",
        answers: [
            { text: ".", correct: false },
            { text: "*", correct: false },
            { text: "#", correct: true },
            { text: "$", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionBox = document.getElementById('question-box');
const questionElement = document.getElementById('ques');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    resultElement.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    nextButton.style.display = 'block';
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true; // Disable buttons after answering
        if (button.innerText === answer.text) {
            button.style.backgroundColor = answer.correct ? 'green' : 'red';
        }
    });
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
}

function showResult() {
    questionBox.style.display = 'none';
    resultElement.style.display = 'block';
    resultElement.innerText = `You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener('click', showNextQuestion);

startQuiz();
