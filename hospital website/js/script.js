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
        question: "هل تعاني من كثرة البول",
        a: "نعم",
        b: "لا",
      
        correct: "a",
    },
    {
        question: "هل لديك قريب من الدرجة الأولى مصاب بالسكري",
        a: "نعم",
        b: "لا",
      
        correct: "a",
    },
    {
        question: "هل تشعر بكثرة بالعطش",
        a: "نعم",
        b: "لا",
      
        correct: "a",
    },
    {
        question: "هل تعاني من نزول الوزن المفاجئ",
        a: "نعم",
        b: "لا",
      
        correct: "a",
    },
    {
        question: "ملاحظة البقع الداكنة فالجسم ",
        a: "نعم",
        b: "لا",
      
        correct: "a",
    },
    {
        question: "ارتفاع درجة الحرارة",
        a: "نعم",
        b: "لا",
      
        correct: "a",
    },
    {
        question: "التعرق اثناء النوم",
        a: "نعم",
        b: "لا",
      
        correct: "a",
    },
    {
        question: "تنميل بالاطراف ",
        a: "نعم",
        b: "لا",
      
        correct: "a",
    },
    {
        question: "شعور متزايد بالجوع",
        a: "نعم",
        b: "لا",
      
        correct: "a",
    },
    {
        question: "تشويش الؤية المفاجئ",
        a: "نعم",
        b: "لا",
      
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
        if (a>6){
            f="لسلامتك وصحتك";
             t = "يرجى مراجعه طبيب "
            function showDiv() {
                document.getElementById("myDiv").style.display = "block";
              }
        }
        else if(a>=4){
            f="مرحلة ماقبل السكري";
            t = "يرجى مراجعه طبيب "
            function showDiv() {
                document.getElementById("myDiv").style.display = "block";
              }
        }
        else{
            f= "غير مصاب"
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





