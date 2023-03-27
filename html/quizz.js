const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('qustionCounter');
const scoreText = document.getElementById('score');
const progressbar = document.getElementById('progress-bar');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let current_question = {};
let accept_ans = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
let c_bonus = 10;

let questions = [
    {
        question: "Which of the following events occur when the visitor leaves the current page, the browser unloads it",
        choice1: "load",
        choice2 : "unload",
        choice3: "onload",
        choice4: "onunload",
        answer: 2
    },
    {
        question: "Which of the following are Event handlers?",
        choice1: "Interface",
        choice2 : "Function",
        choice3: "Handler",
        choice4: "Event",
        answer: 2
    },
    {
        question: "How can you write into HTML output using Java Script?",
        choice1: "Using innerHtml",
        choice2 : "Using console.log",
        choice3: "Using document.write()",
        choice4: "Using window.alert()",
        answer: 3
    },
    {
        question: "Which of the following can read and render HTML web pages",
        choice1: "Server",
        choice2 : "Head tak",
        choice3: "Web broswer",
        choice4: "Empty",
        answer: 3
    }
];


const correct_bonus = 10;
const max_questions = 4;
  
function startQuizz(){
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    console.log(availableQuestion);
   
    getNewQustion();   
    
   
}

function getNewQustion(){

    if(availableQuestion.length == 0){
        console.log(availableQuestion.length);
        console.log(questionCounter);
        console.log(max_questions);
        localStorage.setItem('mostRecentScore',score);
        return window.location = ('end.html');
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter} / ${max_questions}`;
    const qustionIndex = Math.floor(Math.random() * availableQuestion.length);
    current_question = availableQuestion[qustionIndex];
    
    question.innerText = current_question.question; 

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = current_question["choice" + number];
    });

    availableQuestion.splice(qustionIndex, 1);
    accept_ans = true;
};

choices.forEach(choice => {
    choice.addEventListener("click",e =>{
        
        if(!accept_ans) return;

        accept_ans = false;
        const selectedChoice = e.target;
        const selectedAns = selectedChoice.dataset["number"];
      //  let  classToApply = 'incorrect';
     //   if( selectedAns == c_question.answer){
      //      classToApply = 'correct';
       //     console.log(classToApply);

       // }

       const classToApply = selectedAns == current_question.answer ? "correct" : "incorrect";

       selectedChoice.parentElement.classList.add(classToApply);
        if(classToApply == "correct"){
            incrementScore(correct_bonus);
        }
       setTimeout(()=>{
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQustion();
       },1000)
    });
    incrementScore = num=>{
        score+=num;
        scoreText.innerText = score;
    } 
});

startQuizz();  
