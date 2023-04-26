//start the quiz

const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const hideScoresElement = document.getElementById("score-container");
const hideIntroElement = document.getElementById("intro");
const questionElement = document.getElementById("question");
const btnElement = document.getElementById("btn");

let timeElement = document.getElementById("time");
let scoreElement = document.getElementById("score");

const choiceElementA = document.getElementById("A");
const choiceElementB = document.getElementById("B");
const choiceElementC = document.getElementById("C");
const choiceElementD = document.getElementById("D");

const incorrectElement= document.getElementById("incorrect-prompt");
const correctElement= document.getElementById("correct-prompt");


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
                timeElement.innerHTML = "Time: " + 0;
            }
        }, 1000)
    }
};



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
        question: "The condition of am if/else statement is stored in?",

        choiceA: {answer: "Parenthesis", correct: true},
        choiceB: {answer: "Curly Brackets", correct: false},
        choiceC: {answer: "Commas",correct: false},
        choiceD: {answer: "Slashes",correct: false}
        
    },
    {
        question: "Which language is the hardest?",

        choiceA: {answer: "HTML",correct: false},
        choiceB: {answer: "CSS",correct: false},
        choiceC: {answer: "JavaScript",correct: true},
        choiceD: {answer: "English",correct: false}
      
    },
    {
        question: "Which is a helpful tool to debug code?",

        choiceA: {answer: "Arrays",correct: false},
        choiceB: {answer: "Booleans",correct: false},
        choiceC: {answer: "If/Then Statements",correct: false},
        choiceD: {answer: "Console.log",correct: true}
        

    }


];

//click next to move on to the next question
let questionIndex = 0;
let score=0;


function createQuestion() {

    startButton.classList.add("hidden");
    questionContainerElement.classList.remove("hidden");
    hideScoresElement.classList.remove("hide-score");
    hideIntroElement.classList.add("hidden");

    
    let q = questions[questionIndex];
    console.log(q);
    questionIndex++;

    questionElement.innerHTML = q.question;

    choiceElementA.innerHTML = q.choiceA.answer;
    choiceElementA.setAttribute('data-correct', q.choiceA.correct);

    choiceElementB.innerHTML = q.choiceB.answer;
    choiceElementB.setAttribute('data-correct', q.choiceB.correct);

    choiceElementC.innerHTML = q.choiceC.answer;
    choiceElementC.setAttribute('data-correct', q.choiceC.correct);

    choiceElementD.innerHTML = q.choiceD.answer;
    choiceElementD.setAttribute('data-correct', q.choiceD.correct);

    scoreElement.innerHTML="Score: "+score;
   
    countDown();

}

function clearFeedback(){
    
    incorrectElement.classList.add("incorrectbtn");
    correctElement.classList.add("correctbtn");

}

function scoreIncrement(){

    score=score+10;
}

function scoreDecrement(){
    
    score=score-5;
}


function checkAnswer(event) {
    if(event.target.getAttribute('data-correct') === "true"){
        console.log("Correct answer was chosen, add time, give feedback, call next question func");
        counter=counter+10;
        scoreElement.innerHTML="Score: "+score;
        correctElement.classList.remove("correctbtn");
        scoreIncrement();
        createQuestion();
       
        
    }else{
        console.log("incorrect answer choosen, subtract time, give feedback, call next func");
        counter=counter - 10;
        scoreElement.innerHTML="Score: "+score;
        incorrectElement.classList.remove("incorrectbtn");
        scoreDecrement();
        createQuestion();
    }
}


function endQuiz(){
    if(questionIndex>questions.length || counter==0){
        startButton.classList.add("hidden");
        questionContainerElement.classList.add("hidden");
        hideScoresElement.classList.add("hide-score");
        hideIntroElement.classList.add("hidden");
        incorrectElement.classList.add("incorrectbtn");
        correctElement.classList.add("correctbtn");
   
}

}
