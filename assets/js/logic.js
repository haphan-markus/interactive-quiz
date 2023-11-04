var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById('questions');
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var choice1 = document.querySelector('#choice1');
var choice2 = document.querySelector('#choice2');
var choice3 = document.querySelector('#choice3');
var choice4 = document.querySelector('#choice4');

var quiz = [
    {
        input: "1. Common used data type DO NOT include:",
        option1: "1. Object",
        option2: "2. JavaScript",
        option3: "3. String",
        option4: "4. Dictionary",
        correctAnswer: "2. JavaScript"
    }, {
        input: "2. How does a WHILE loop start?",
        option1: "1. while i = 1 to 10",
        option2: "2. while (i<=10)",
        option3: "3. While (i<=10;i++)",
        option4: "4. While (let i = 0; i <=10; i++)",
        correctAnswer: "2. while (i<=10)"
    }, {
        input: "3. Inside which HTML element do we put the JavaScript?",
        option1: "1. <JavaScript>",
        option2: "2. <scripting>",
        option3: "3. <script>",
        option4: "4. <js>",
        correctAnswer: "3. <script>"
    }, {
        input: "4. How do you create a function in JavaScript?",
        option1: "function myFunction()",
        option2: "function:myFunction()",
        option3: "function = myFunction()",
        option4: "def Function():",
        correctAnswer: "function myFunction()"
    }, {
        input: "5. How to write an IF statement in JavaScript?",
        option1: "if i == 5 then {}",
        option2: "if i = 5 {}",
        option3: "if (i == 5) {}",
        option4: "if i = 5:",
        correctAnswer: "if (i == 5) {}"
    }, {
        input: "6. How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        option1: "if !=5 then",
        option2: "if i <> 5",
        option3: "if (i <> 5)",
        option4: "if (i != 5)",
        correctAnswer: "if (i != 5)"
    }
]
var quizLength = quiz.length;
console.log(quizLength);

startButton.addEventListener('click',function(event){
    // Hide start-screen div
    var startScreenState = startScreen.getAttribute('data-state');
    console.log(startScreenState);
    var startScreenClass = startScreen.getAttribute('class');
    console.log(startScreenClass);
    startScreen.setAttribute("class",startScreenState);
    startScreen.setAttribute("data-state",startScreenClass);

    // Show div "questions" 
    var questionState = questions.getAttribute('data-state');
    var questionClass = questions.getAttribute('class');
    console.log(questionState);
    console.log(questionClass);
    questions.setAttribute('data-state',questionClass);
    questions.setAttribute('class',questionState);
    
    // Show questions
    var i = 0;
    document.createElement('ol');
    questionTitle.textContent = quiz[i].input;
    choice1.textContent = quiz[i].option1;
    choice2.textContent = quiz[i].option2;
    choice3.textContent = quiz[i].option3;
    choice4.textContent = quiz[i].option4;
    console.log(choice1);
    var userChoice = [choice1, choice2, choice3, choice4];
    for (let j = 0; j<userChoice.length; j++){
        var paraEl = document.createElement('p');
        userChoice[j].addEventListener('click',function(event){
            if (userChoice[j].textContent === quiz[i].correctAnswer){
                paraEl.innerText = "Correct. Congratulations!"
                } else {
                paraEl.innerText = "Wrong!"
            }
            questions.appendChild(paraEl); // Put the p element to the end of id "questions"
            setTime(paraEl);
            //Upon clicking, the next question will appear
            i++;
            console.log(i);
        })
    }
        // questionTitle.textContent = quiz[0].input;
        // choice1.textContent = quiz[0].option1;
        // choice2.textContent = quiz[0].option2;
        // choice3.textContent = quiz[0].option3;
        // choice4.textContent = quiz[0].option4;
        // console.log(choice1);
        // Check if the option chosen is correct: return "Correct. Congratulations!" if correct, and return "Wrong!" for others
        
        
        
        // for (let i = 0; i < quiz.length;i++){
        //     questionTitle.textContent = quiz[i].input;
        //     choice1.textContent = quiz[i].option1;
        //     choice2.textContent = quiz[i].option2;
        //     choice3.textContent = quiz[i].option3;
        //     choice4.textContent = quiz[i].option4;
        //     console.log(choice1);
        //     var userChoice = [choice1, choice2, choice3, choice4];
        //     for (let j = 0; j<userChoice.length; j++){
        //         var paraEl = document.createElement('p');
        //         userChoice[j].addEventListener('click',function(event){
        //             if (userChoice[j].textContent === quiz[i].correctAnswer){
        //                 paraEl.innerText = "Correct. Congratulations!"
        //                 } else {
        //                 paraEl.innerText = "Wrong!"
        //                 }
        //             questions.appendChild(paraEl); // Put the p element to the end of id "questions"
        //             setTime(paraEl);
        //             })
        //     }
        // }
    // }
    

});

// Upon clicking the Start button, it will prompt to the questions function

function showQuestions(i){
    questionTitle.textContent = quiz[i].input;
    choice1.textContent = quiz[i].option1;
    choice2.textContent = quiz[i].option2;
    choice3.textContent = quiz[i].option3;
    choice4.textContent = quiz[i].option4;
    console.log(choice1);
}

//Store the lists of questions in an array, or object, with each question is an object
// Each question has 

function setTime(i){
    var secondLeft = 3;
    i.setAttribute('class','');
    var timeInterval = setInterval(function(){
        secondLeft--;
        if (secondLeft === 0){
            clearInterval();
            i.setAttribute('class','hide');
        }
    },1000)
}
