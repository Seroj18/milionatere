// stexcel harcer

let questions = [
    {
        id:1,
        level_id:1,
        question: 'Ի՞նչ Է Ձեզ Համար JavaScript-Ը Նշանակում ?',
        answers:[
            {id:1, text:'վեբ սկրիպտավորման լեզու, որն օգտագործվում է ինչպես հաճախորդի, այնպես էլ սերվերի կողմից ծրագրավորման համար:',correct: true},
            {id:2, text:'Նույն java-ն է մի քանի առավելությամբ', correct: false},
            {id:3, text:' ընդհանուր նշանակության ծրագրավորման լեզու',correct: false},
            {id:4, text:'լեզու որը օգտագործվում է backend-ի',correct: false}
        ],
    },
    {
        id:2,
        level_id:1,
        question: 'Տվյալների Ի՞նչ Ձևեր Է Աջակցում JavaScript-Ը ?',
        answers:[
            {id:1, text:'arr,undefined,string,function,null,object,BigInt',correct: false},
            {id:2, text:'null,undefined,boolean,number,string,object,symbol,BigInt',correct: true},
            {id:3, text:'number,symbol,for',correct: false},
            {id:4, text:'boolean,null,object,if',correct: false}
        ],
    },
    {
        id:3,
        level_id:1,
        question: 'Որն է JavaScript-Ի Օգտագործման ամենավատ թերությունը?',
        answers:[
            {id:1, text:'Անվտանգությունը',correct: true},
            {id:2, text:'արագությունը',correct: false},
            {id:3, text:'դժվար գրելաձև',correct: false},
            {id:4, text:'հասկանալը',correct: false}
        ],
    },
    {
        id:4,
        level_id:1,
        question: 'Ինչո՞վ Են Տարբերվում Let-Ը և Var-Ը Միմյանցից ?',
        answers:[
            {id:1, text:'var-ը const-ի հին տարբերակն է',correct: false},
            {id:2, text:'չկա տարբերություն',correct: false},
            {id:3, text:'let հիմնաբառը ընդգրկված է բլոկով, մինչդեռ var բանալի բառը սահմանվում է գործառույթով',correct: true},
            {id:4, text:'var-ը համակարգը չի հասկանում',correct: false}
        ],
    },
    {
        id:5,
        level_id:2,
        question: 'JavaScript-Ում Ինչ Են Անում Սլաքի Ֆունկցիաները:?',
        answers:[
            {id:1, text:'կարող ես օգտագործել ընդամենը մեկ անգամ',correct: false},
            {id:2, text:'երկարացնում են կոդը',correct: false},
            {id:3, text:'ոչ մի բան',correct: false},
            {id:4, text:'գրելու արագ և հստակ մեթոդ են:',correct: true}
        ],
    },
    {
        id:6,
        level_id:2,
        question: 'Ինչո՞վ Է Տարբերվում Null-ը Undefined-ից?',
        answers:[
            {id:1, text:'Undefined-ը նշանակում է դաշտ որի մեջ միայն 0 է, իսկ Null-ը կարող է օգտագործվել ոչ մի արժեք նշելու և փոփոխականին վերագրվելու համար',correct: false},
            {id:2, text:'Undefined-ը հանձնարարության արժեք է: Այն կարող է օգտագործվել ոչ մի արժեք նշելու և փոփոխականին վերագրվելու համար իսկ Null-ը նշանակում է հայտարարված փոփոխական, որին դեռ արժեք չի տրվել',correct: false},
            {id:3, text:'Undefined-ը նշանակում է հայտարարված փոփոխական, որին դեռ արժեք չի տրվել իսկ Null-ը կարող է օգտագործվել ոչ մի արժեք նշելու և փոփոխականին վերագրվելու համար',correct: true},
            {id:4, text:'դրանք կատարում են նույն ֆունկցիան',correct: false}
        ],
    },
    {
        id:7,
        level_id:2,
        question: 'Ի՞նչ Է JavaScript-Ի «Խիստ» Ռեժիմը ?',
        answers:[
            {id:1, text:'Դուք կարող եք բարելավել ձեր կոդի սխալների ստուգումը` օգտագործելով խիստ ռեժիմ',correct: true},
            {id:2, text:'այն կարճացնում է կոդը',correct: false},
            {id:3, text:'այն նախատեսված է backend կոդ գրելու համար',correct: false},
            {id:4, text:'տարբերություն չի տալիս',correct: false}
        ],
    },
    {
        id:8,
        level_id:2,
        question: 'ի՞նչ Է BOM-ը ?',
        answers:[
            {id:1, text:'նույն DOM-ը ',correct: false},
            {id:2, text:'BOM-ը թույլ է տալիս օգտվողներին շփվել բրաուզերների հետ, որոնց հետ պատուհանը ծառայում է որպես առաջին օբյեկտ',correct: true},
            {id:3, text:'BOM-ը փաստաթղթի օբյեկտի մոդել է, որը զննարկիչը ստեղծում է համակարգչի հիշողության մեջ',correct: false},
            {id:4, text:'BOM-ը նախատեսված է backend կոդ գրելու համար',correct: false}
        ],
    },
    {
        id:9,
        level_id:3,
        question: 'Ինչ է ռեկուրսիան ?',
        answers:[
            {id:1, text:'Դա նոր փոփոխականի տեսակ է',correct: false},
            {id:2, text:'Անանուն ֆունկցիա',correct: false},
            {id:3, text:'Օբյեկտի կամ գործընթացի սահմանում, այլ օբյեկտի կամ գործընթացի ներսում',correct:true },
            {id:4, text:'Անիմաստ ֆունկցիա',correct: false}
        ],
    },
    {
        id:10,
        level_id:3,
        question: 'Ինչ է DOM-ը ?',
        answers:[
            {id:1, text:'DOM-ը նույն BOM-ն է',correct: false},
            {id:2, text:'DOM-ը նշանակում է հայտարարված փոփոխական',correct: false},
            {id:3, text:'DOM-ը թույլ է տալիս օգտվողներին շփվել բրաուզերների հետ, որոնց հետ պատուհանը ծառայում է որպես առաջին օբյեկտ',correct: false},
            {id:4, text:'DOM-ը փաստաթղթի օբյեկտի մոդել է, որը զննարկիչը ստեղծում է համակարգչի հիշողության մեջ',correct: true}
        ],
    },
    {
        id:11,
        level_id:3,
        question: ' Տվյալների ո՞ր տեսակներն են բարդ ?',
        answers:[
            {id:1, text:'object',correct: true},
            {id:2, text:'boolian',correct: false},
            {id:3, text:'string',correct: false},
            {id:4, text:'number',correct: false}
        ],
    },
    {
        id:12,
        level_id:3,
        question: 'Ո՞ր ընկերությունն է մշակել JavaScript-ը ?',
        answers:[
            {id:1, text:'JavaScript ծրագրավորման լեզուն մշակվել է Microsoft ի կողմից',correct: false},
            {id:2, text:'JavaScript ծրագրավորման լեզուն մշակվել է Netscape ի կողմից',correct: true},
            {id:3, text:'JavaScript ծրագրավորման լեզուն մշակվել է Tesla ի կողմից',correct: false},
            {id:4, text:'JavaScript ծրագրավորման լեզուն մշակվել է Nvdia ի կողմից',correct: false}
        ],
    },
]

const questionElement = document.querySelector('#question')
const answerButtons = document.querySelector('.answer-buttons')
const nextButton = document.querySelector('#next-btn')
const SimpleTime = document.querySelector('.Simple-time')
const questionIndex = document.querySelector('.questionIndex')
const SimpleNumber = document.querySelector('.Simple-number')

let currentQuestionIndex = 0;
let score = 0;
let questionNo
let finishManey = 0 

function startQuiz(){
    clearInterval(setTime)
    clearInterval(setTimeOut)
    finishManey = 0
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next'
    showQuestion();
    TimeOut()
}
function showQuestion(){
    console.log(currentQuestionIndex);
    console.log(questions.length);
    resetState()
    SimpleNumber.innerHTML = 15
    setTime =  setInterval(()=>{
        SimpleNumber.innerHTML--
    },1000)
    let currentQuestion = questions[currentQuestionIndex];
    questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;
    questionIndex.innerHTML = questionNo + ' ' + ' of ' + ' ' +  questions.length + ' ' + ' questions'
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){    
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectBtn.classList.add('correct');
        score++;
        QuestionManey(true)

    }else{
        selectBtn.classList.add('incorrect');
        QuestionManey(false)
    }
    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === 'true') {
            button.classList.add('correct')
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore(){
    clearInterval(setTime)
    clearInterval(setTimeOut)
    resetState();
    questionElement.innerHTML = `you win ${finishManey} $`;
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block'
    questionIndex.style.display = 'none'
    nextButton.addEventListener('click',()=>{
        if (nextButton.innerHTML === 'Play Again') {
            maney.forEach(item =>{ 
                if (+item.innerHTML === 8000 || +item.innerHTML === 128000 || +item.innerHTML === 1000000) {
                    item.style.color = 'yellow'
                }else{
                item.style.color = 'white'
                }
            })
            questionIndex.style.display = 'block'
            startQuiz()
        }
    })
}

function handleNextButton(){
    clearInterval(setTime)
    clearInterval(setTimeOut)
    TimeOut()
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
        questionIndex.style.display = 'block'
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        questionIndex.style.display = 'block'
        console.log('hello');
        showScore()
    }
})

let setTime 
let setTimeOut

function TimeOut(){
    setTimeOut = setTimeout(()=>{
        showScore()
    },15000)
}
const maney = document.querySelectorAll('p')

function QuestionManey(bool){
    maney.forEach((item) =>{
        if(+item.id === questionNo && bool === true){
            item.style.color = 'green'
            if (+item.id === 3 && bool === true) {
                finishManey = +item.innerHTML
            }
            if (+item.id === 7 && bool === true) {
                finishManey = +item.innerHTML
            }
            if (+item.id === 10 && bool === true) {
                finishManey = +item.innerHTML
            }
            if (+item.id === 12 && bool === true) {
                finishManey = +item.innerHTML
            }
        }
        if(+item.id === questionNo && bool === false){
            item.style.color = 'red'
            showScore()
        }
    })
}

startQuiz();






















// let questionIndex = 0
// let answerResult = false
// let score = {success: 0, wrong: 0};

// function next() {
//     if (!answerResult && questionIndex > 0) {
//         alert("chka patasxan")
//         return false
//     }
//     answerResult = false
//     questionIndex ++
//     let result = question.filter((res) => res.level_id === questionIndex)
//     result = result[Math.floor(Math.random * result.length)]
//     if (!result) {
//         gameOver()
//         return
//     }
//     viewPrint(result)
// }

// function viewPrint(data) {
//     let question_field = document.querySelector('.question_field')
//     let answer_field = document.querySelector('.answer_field')
//     question_field.innerHTML = data.question
//     answer_field.innerHTML = ''
//     data.answer.forEach(val => {
//         answer_field.innerHTML += `<li data-id="${val.id}">${val.label}</li>`
//     })

//     let answer_list_field = document.querySelectorAll('.answer_filend li')
//     answer_list_field.forEach(liTag =>{
//         liTag.addEventListener('click',function(){
//             if (!answerResult) {
//                 if (+liTag.dataset.id === data.current) {
//                     liTag.style.background = 'green'
//                     score.success++
//                 }else{
//                     liTag.style.background = 'red'
//                     score.wrong++
//                 }
//                 answerResult = true
//             }
//         }
//         )
//     }
//     )

// }
//     function gameOver(){
//         let result = document.querySelector('.result')
//         result.classList.remove('d-none')
//         let scoreRes = document.querySelector('.score')
//         scoreRes.innerHTML = `
//         <ul>
//             <li>success: ${score.success}</li>
//             <li>wrong: ${score.wrong}</li>
//         </ul>
//         <button onclick = "startnow()">start now</button>
//         <button onclick = "window.close()">Game Out</button>
//         `
//     }

//     next()

// function startnow(){
//     questionIndex = 0
//     answerResult = false
//     score.wrong = 0
//     score.success = 0
//     let result = document.querySelector('.result')
//     result.classList.add('d-none')
//     next()
// }


