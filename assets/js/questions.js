var questions = document.getElementById('questions');
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");

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

for (let i = 0;i < quiz.length;i++){
    var olEl = document.createElement('ol');
    questionTitle.appendChild(olEl);
    olEl.setAttribute('id','question'+i);
    
    var choice1 = document.createElement('button');
    var choice2 = document.createElement('button');
    var choice3 = document.createElement('button');
    var choice4 = document.createElement('button');
    choices.appendChild(choice1);
    choice1.setAttribute('id','choice1-'+i);
    
    choices.appendChild(choice2);
    choice2.setAttribute('id','choice2-'+i);
    
    choices.appendChild(choice3);
    choice3.setAttribute('id','choice3-'+i);

    choices.appendChild(choice4);
    choice4.setAttribute('id','choice4-'+i);
}