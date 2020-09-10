let quizContainer = document.getElementById("quiz");
let resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("submit");
let quizQuestions = [
    {
        question: "Inside which HTML element do we put JavaSCript?",
        answers: {
            a: "<js>",
            b: "<scripting>",
            c: "<javascript>",
            d: "<script>"
        },
        correctAnswer: "d"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            a: "function myFunction()",
            b: "function = myFunction()",
            c: "function:myFunction()",
        },
        correctAnswer: "a"
    },
    {
        question: "How does a FOR loop start?",
        answers: {
            a: "for (i = 0; i <= 5)",
            b: "for (i = 0; i <= 5; i++)",
            c: "for i = 1 to 5",
            d: "for (i <= 5; i++)"
        },
        correctAnswer: "b"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: {
            a: "X",
            b: "*",
            c: "=",
            d: "-"
        },
        correctAnswer: "c"
    },
]





console.log(quizQuestions);

function startQuiz() {


    let output = [];


    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {


            let answers = [];


            for (letter in currentQuestion.answers) {


                answers.push(
                    `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
                );
            }


            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );


    quizContainer.innerHTML = output.join('');
}

startQuiz();

function showResults() {
    let answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        let answerContainer = answerContainers[questionNumber];
        let selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;


        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }

        else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}



submitButton.addEventListener("click", showResults);