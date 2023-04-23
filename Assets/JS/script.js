//start the quiz

const startButton= document.getElementById("#start-btn")
const questionElement = document.getElementById("#question")
const answerBtnElement =document.getElementById("#answer-btns")
const nextBtnElement =document.getElementById("#next-btn")
const highScoreElement=document.getElementById("#scores")


startButton.addEventListener("click", startGame)
nextBtnElement.addEventListener("click",nextQuestion)
highScoreElement.addEventListener("click",highScore)


function highScore(){

}


function startGame(){
question1

}


//click next to move on to the next question
function nextQuestion(){

}


function showQuestion(){

}

//identify questions and answers into objects and arrays
const questions= [
    {
        question1: "In JavaScript what can arrays contain?",
        answers1: [
            
            {text2:"Numbers", wrong:false},
            {text3:"Strings", wrong:false},
            {text4:"Booleans", wrong:false},
            {text1: "All of the above", correct:true}


        ],
        question2: "The condition of am if/else statement is stored in?",
        answers2:[
            {text5:"Parenthesis",correct: true},
            {text6:"Curly Brackets",wrong:false},
            {text7: "Commas",wrong: false},
            {text8:"Slashes",wrong: false}
        ],
        question3:"Which language is the hardest?",
        answers3:[
            {text9:"HTML",wrong:false},
            {text10:"CSS",wrong: false},
            {text11:"JavaScript",correct:true},
            {text12:"English",wrong:false}
        ],
        question4:"Which is a helpful tool to debug code?",
        answers4:[
            {text13:"Arrays",wrong:false},
            {text14:"Booleans",wrong:false},
            {text15:"If/Then Statements",wrong:false},
            {text16: "Console.log",correct:true}
        ]


    }

]

