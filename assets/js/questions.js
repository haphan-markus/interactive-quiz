var startButton = document.getElementById('start');
var startScreen = document.getElementById('start-screen');
var questionCatalogue = {
    question1: {
        input: "Common used data type DO NOT include:",
        choice1: "1. Object",
        choice2: "2. JavaScript",
        choice3: "3. String",
        choice4: "4. Dictionary",
        correctAnswer: choice2
    },
    question2: {
        input: "How does a WHILE loop start?",
        choice1: "1. while i = 1 to 10",
        choice2: "2. while (i<=10)",
        choice3: "3. While (i<=10;i++)",
        choice4: "4. While (let i = 0; i <=10; i++)",
        correctAnswer: choice2
    },
    question3: {
        input: "Inside which HTML element do we put the JavaScript?",
        choice1: "1. <JavaScript>",
        choice2: "2. <scripting>",
        choice3: "3. <script>",
        choice4: "4. <js>",
        correctAnswer: choice3
    },
    question4: {
        input: "How do you create a function in JavaScript?",
        choice1: "function myFunction()",
        choice2: "function:myFunction()",
        choice3: "function = myFunction()",
        choice4: "def Function():",
        correctAnswer: choice1
    },
    question5: {
        input: "How to write an IF statement in JavaScript?",
        choice1: "if i == 5 then {}",
        choice2: "if i = 5 {}",
        choice3: "if (i == 5) {}",
        choice4: "if i = 5:",
        correctAnswer: choice3
    },
    question6: {
        input: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choice1: "if !=5 then",
        choice2: "if i <> 5",
        choice3: "if (i <> 5)",
        choice4: "if (i != 5)",
        correctAnswer: choice4
    }
}


startButton.addEventListener('click',function(event){
    startScreen.style.display = 'none';
});

// Upon clicking the Start button, it will prompt to the questions function

function questions(){

}

//Store the lists of questions in an array, or object, with each question is an object
// Each question has 