
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const quizQuestions = [
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

    // variable to store the HTML output
    const output = [];

    // for each question...
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {

}

startQuiz();

submitButton.addEventListener("click", showResults);