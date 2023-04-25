//start the quiz

const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const answerBtnElement = document.getElementById("answer-btns");
const nextBtnElement = document.getElementById("next-btn");
const hideScoresElement = document.getElementById("score-container");
const hideIntroElement = document.getElementById("intro");
const questionElement = document.getElementById("question");
const btnElement = document.getElementById("btn")
let timeElement = document.getElementById("time");

const choiceElementA = document.getElementById("A");
const choiceElementB = document.getElementById("B");
const choiceElementC = document.getElementById("C");
const choiceElementD = document.getElementById("D");


const startGameElement = document.getElementById("start-btn");

startGameElement.addEventListener("click", createQuestion);

choiceElementA.addEventListener("click", checkAnswer);
choiceElementB.addEventListener("click", checkAnswer);
choiceElementC.addEventListener("click", checkAnswer);
choiceElementD.addEventListener("click", checkAnswer);


let counter = 60;
let start = false
function countDown() {
    if (!start) {
        start = true
        const interval = setInterval(function () {
            timeElement.innerHTML = "Time: " + counter;
            counter--;

            if (counter == 0) {
                clearInterval(interval);
                timeElement.innerHTML = "Time: " + 0
            }
        }, 1000)
    }
}



//identify questions and answers into objects and arrays
let questions = [
    {
        question: "In JavaScript what can an array contain?",
        choiceA: { answer: "Numbers", correct: false },
        choiceB: { answer: "Strings", correct: false },
        choiceC: { answer: "Booleans", correct: false },
        choiceD: { answer: "All of the above", correct: true }
    },
    {
        question: "Next Question!?",
        choiceA: { answer: "blash", correct: false },
        choiceB: { answer: "blablah", correct: false },
        choiceC: { answer: "anotherblah", correct: false },
        choiceD: { answer: "correctBlah", correct: true }
    },

    // {
    //     question: "The condition of am if/else statement is stored in?",

    //     choiceA: "Parenthesis",
    //     choiceB: "Curly Brackets",
    //     choiceC: "Commas",
    //     choiceD: "Slashes",
    //     correct: "A"
    // },
    // {
    //     question: "Which language is the hardest?",

    //     choiceA: "HTML",
    //     choiceB: "CSS",
    //     choiceC: "JavaScript",
    //     choiceD: "English",
    //     correct: "C"
    // },
    // {
    //     question: "Which is a helpful tool to debug code?",

    //     choiceA: "Arrays",
    //     choiceB: "Booleans",
    //     choiceC: "If/Then Statements",
    //     choiceD: "Console.log",
    //     correct: "D"

    // }


];

//click next to move on to the next question
let questionIndex = 0;

function createQuestion() {

    startButton.classList.add("hidden");
    questionContainerElement.classList.remove("hidden");
    hideScoresElement.classList.remove("hide-score");
    hideIntroElement.classList.add("hidden");

    let q = questions[questionIndex];
    console.log(q)
    questionIndex++

    questionElement.innerHTML = q.question;

    choiceElementA.innerHTML = q.choiceA.answer;
    choiceElementA.setAttribute('data-correct', q.choiceA.correct)

    choiceElementB.innerHTML = q.choiceB.answer;
    choiceElementB.setAttribute('data-correct', q.choiceB.correct)

    choiceElementC.innerHTML = q.choiceC.answer;
    choiceElementC.setAttribute('data-correct', q.choiceC.correct);

    choiceElementD.innerHTML = q.choiceD.answer;
    choiceElementD.setAttribute('data-correct', q.choiceD.correct);

    countDown();
}




function checkAnswer(event) {
    if(event.target.getAttribute('data-correct') === "true"){
        console.log("Correct answer was chosen, add time, give feedback, call next question func")
        counter + 10
        createQuestion();
    }else{
        console.log("incorrect answer choosen, subtract time, give feedback, call next func")
    }
}






