//start the quiz

const startButton= document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")
const answerBtnElement =document.getElementById("answer-btns")
const nextBtnElement =document.getElementById("next-btn")
const hideScoresElement=document.getElementById("score-container")
const hideIntroElement=document.getElementById("intro")
const questionElement=document.getElementById("question")
const firstAnswer=document.getElementById("btn0")
const secondAnswer=document.getElementById("btn1")
const thirdAnswer=document.getElementById("btn2")
const fourthAnswer=document.getElementById("btn3")


startButton.addEventListener("click", startGame)
nextBtnElement.addEventListener("click",function(){

},true)



function startGame(){

startButton.classList.add("hidden")
questionContainerElement.classList.remove("hidden")
hideScoresElement.classList.remove("hide-score")
nextBtnElement.classList.remove("next-btn-hide")
hideIntroElement.classList.add("hidden")
if(nextBtnElement==true)
showQuestion1()
}



//click next to move on to the next question



function showQuestion1(){
    questionElement.innerText=questions[0].question1
    firstAnswer.innerText=questions[0].text1
    secondAnswer.innerText=questions[0].text2
    thirdAnswer.innerText=questions[0].text3
    fourthAnswer.innerText=questions[0].text4
    showQuestion2()
}

function showQuestion2(){
    questionElement.innerText=questions[1].question2
    firstAnswer.innerText=questions[1].text5
    secondAnswer.innerText=questions[1].text6
    thirdAnswer.innerText=questions[1].text7
    fourthAnswer.innerText=questions[1].text8
    showQuestion3()
}
function showQuestion3(){
    questionElement.innerText=questions[2].question3
    firstAnswer.innerText=questions[2].text9
    secondAnswer.innerText=questions[2].text10
    thirdAnswer.innerText=questions[2].text11
    fourthAnswer.innerText=questions[2].text12
    showQuestion4()
}
function showQuestion4(){
    questionElement.innerText=questions[3].question4
    firstAnswer.innerText=questions[3].text13
    secondAnswer.innerText=questions[3].text14
    thirdAnswer.innerText=questions[3].text15
    fourthAnswer.innerText=questions[3].text16
    
}

//identify questions and answers into objects and arrays
const questions= [
    {
        question1: "In JavaScript what can arrays contain?",
        
            
            text1:"Numbers",
            text2:"Strings", 
            text3:"Booleans", 
            text4: "All of the above", 


    },
    {  
    question2: "The condition of if/else statement is stored in?",
        
            text5:"Parenthesis",
            text6:"Curly Brackets",
            text7: "Commas",
            text8:"Slashes",
    },
    {
        question3:"Which language is the hardest?",
      
            text9:"HTML",
            text10:"CSS",
            text11:"JavaScript",
            text12:"English"
    },
    {
        question4:"Which is a helpful tool to debug code?",
      
            text13:"Arrays",
            text14:"Booleans",
            text15:"If/Then Statements",
            text16: "Console.log"
        
    }

    
]

