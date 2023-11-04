var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionTitle = document.getElementById("question-title");
var questionChoice = document.getElementById("choices");

var questionCatalogue = [
    {
        input: "1. Common used data type DO NOT include:",
        choice1: "1. Object",
        choice2: "2. JavaScript",
        choice3: "3. String",
        choice4: "4. Dictionary",
        correctAnswer: "2. JavaScript"
    }, {
        input: "2. How does a WHILE loop start?",
        choice1: "1. while i = 1 to 10",
        choice2: "2. while (i<=10)",
        choice3: "3. While (i<=10;i++)",
        choice4: "4. While (let i = 0; i <=10; i++)",
        correctAnswer: "2. while (i<=10)"
    }, {
        input: "3. Inside which HTML element do we put the JavaScript?",
        choice1: "1. <JavaScript>",
        choice2: "2. <scripting>",
        choice3: "3. <script>",
        choice4: "4. <js>",
        correctAnswer: "3. <script>"
    }, {
        input: "4. How do you create a function in JavaScript?",
        choice1: "function myFunction()",
        choice2: "function:myFunction()",
        choice3: "function = myFunction()",
        choice4: "def Function():",
        correctAnswer: "function myFunction()"
    }, {
        input: "5. How to write an IF statement in JavaScript?",
        choice1: "if i == 5 then {}",
        choice2: "if i = 5 {}",
        choice3: "if (i == 5) {}",
        choice4: "if i = 5:",
        correctAnswer: "if (i == 5) {}"
    }, {
        input: "6. How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choice1: "if !=5 then",
        choice2: "if i <> 5",
        choice3: "if (i <> 5)",
        choice4: "if (i != 5)",
        correctAnswer: "if (i != 5)"
    }
]


startButton.addEventListener('click',function(event){
    // startScreen.style.display = 'none';
    var state = startScreen.getAttribute('data-state');
    console.log(state);
    var classShown = startScreen.getAttribute('class');
    console.log(classShown);
    startScreen.setAttribute("class",state);
    startScreen.setAttribute("data-state",classShown);

    
    questionTitle.style.display = 'compact';
    questionTitle.textContent = questionCatalogue[0].input;
});

// Upon clicking the Start button, it will prompt to the questions function

function questions(){

}

//Store the lists of questions in an array, or object, with each question is an object
// Each question has 