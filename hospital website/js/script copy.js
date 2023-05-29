let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



//quiz Q and Answer

const quizData = [
  
    {
        question: "Do you suffer from frequent urination?",
        a: "Yes",
        b: "No",
      
        correct: "a",
    },
    {
        question: "Do you have a first-degree relative with diabetes?",
        a: "Yes",
        b: "No",
        correct: "a",
    },
    {
        question: "Do you feel a lot of thirst",
        a: "Yes",
        b: "No",
      
        correct: "a",
    },
    {
        question: "Do you suffer from sudden weight loss?",
        a: "Yes",
        b: "No",
      
        correct: "a",
    },
   
 
    {
        question: "sleep sweating",
        a: "Yes",
        b: "No",
      
        correct: "a",
    },
    {
        question: "Numbness in the extremities",
        a: "Yes",
        b: "No",
      
        correct: "a",
    },
    {
        question: "an increased feeling of hunger",
        a: "Yes",
        b: "No",
      
        correct: "a",
    },
    {
        question: "Sudden blurred vision",
        a: "Yes",
        b: "No",
      
        correct: "a",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')

const submitBtn = document.getElementById('submit')

//score test counter and result
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}




submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++
        let a= score;
        let f="";
        let t ="";
        if (a>=6){
            f=" for your saftey";
             t = "visit a doctor"
            function showDiv() {
                document.getElementById("myDiv").style.display = "block";
              }
        }
        else if(a>=4){
            f="Pre-diabetic stage";
            t = "becarefull and visit a doctor"
            function showDiv() {
                document.getElementById("myDiv").style.display = "block";
              }
        }
        else{
            f= "normal"
            t = ""
            function showDiv() {
                document.getElementById("myDiv").style.display = "block";
              }
        }

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML =`
           
           <h2>${f}<br><br><br><br>${t}</h2>

           <button onclick="location.reload()">Reload</button>
           `
          

       }
    }
})
//button show and hide the test

const divContainer = document.querySelector('#quiz');
let isClicked = false;

let showOrHide = function(){
    if(isClicked){
        divContainer.style.display = 'block';
        isClicked = false
    }else{
        divContainer.style.display ='none';
        isClicked = true;
    }

}





