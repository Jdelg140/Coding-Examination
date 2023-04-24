//start the quiz

const startButton= document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const answerBtnElement =document.getElementById("answer-btns");
const nextBtnElement =document.getElementById("next-btn");
const hideScoresElement=document.getElementById("score-container");
const hideIntroElement=document.getElementById("intro");
const questionElement=document.getElementById("question");

let timeElement=document.getElementById("time");

const choiceElementA=document.getElementById("A");
const choiceElementB=document.getElementById("B");
const choiceElementC=document.getElementById("C");
const choiceElementD=document.getElementById("D");

const startGameElement=document.getElementById("start-btn");

startGameElement.addEventListener("click",createQuestion)


let counter= 10;

function countDown(){
        timeElement.innerHTML="Time: "+ counter;
        counter--

        if(counter<0){
            clearInterval(interval)
        }


}

//click next to move on to the next question



function createQuestion(){
    
    startButton.classList.add("hidden");
    questionContainerElement.classList.remove("hidden");
    hideScoresElement.classList.remove("hide-score");
    
    hideIntroElement.classList.add("hidden");

    let questionIndex= 0;

    let q =questions[questionIndex];

    questionElement.innerHTML= q.question;

    choiceElementA.innerHTML=q.choiceA;
    choiceElementB.innerHTML=q.choiceB;
    choiceElementC.innerHTML=q.choiceC;
    choiceElementD.innerHTML=q.choiceD;

    interval= setInterval(countDown,1000)

    if(choiceD===true){
        questionIndex++
    }
    
}

function checkAnswer(answer){
if(answer==questions[questionIndex].correct){

}
}


//identify questions and answers into objects and arrays
let questions= [
    {
        question: "In JavaScript what can an array contain?",
        
            choiceA:"Numbers",
            choiceB:"Strings", 
            choiceC:"Booleans", 
            choiceD: "All of the above", 
            correct:"D"


    },
    {  
    question: "The condition of am if/else statement is stored in?",
        
            choiceA:"Parenthesis",
            choiceB:"Curly Brackets",
            choiceC: "Commas",
            choiceD:"Slashes",
            correct:"A"
    },
    {
        question:"Which language is the hardest?",
      
            choiceA:"HTML",
            choiceB:"CSS",
            choiceC:"JavaScript",
            choiceD:"English",
            correct:"C"
    },
    {
        question:"Which is a helpful tool to debug code?",
      
            choiceA:"Arrays",
            choiceB:"Booleans",
            choiceC:"If/Then Statements",
            choiceD: "Console.log",
            correct:"D"
        
    }

    
]

