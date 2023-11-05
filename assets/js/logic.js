var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");

var quizLength = quiz.length;
console.log(quizLength);

startButton.addEventListener('click',function(event){
    // Hide start-screen div
    var startScreenState = startScreen.getAttribute('data-state');
    var startScreenClass = startScreen.getAttribute('class');
    console.log(startScreenState);
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
    var question0 = document.getElementById('question0');
    question0.setAttribute('class','start');
    
    var button10 = document.createElement('button');
    button10.innerHTML = quiz[0].option1;
    choices.append(button10);
    button10.setAttribute('data-state','bttnOption');
        
    var button20 = document.createElement('button');
    button20.innerHTML = quiz[0].option2;
    choices.append(button20);
    button20.setAttribute('data-state','bttnOption');

    var button30 = document.createElement('button');
    button30.innerHTML = quiz[0].option3;
    choices.append(button30);
    button30.setAttribute('data-state','bttnOption');
    
    var button40 = document.createElement('button');
    button40.innerHTML = quiz[0].option4;
    choices.append(button40);
    button40.setAttribute('data-state','bttnOption');

    var userChoice = [button10, button20, button30, button40];
    
    for (let j = 0; j < userChoice.length; j++){
        var paraEl = document.createElement('p');
        userChoice[j].addEventListener('click',function(event){
            if (userChoice[j].textContent === quiz[0].correctAnswer){
                paraEl.innerText = "Correct. Congratulations!"
                } else {
                paraEl.innerText = "Wrong!"
            }
            questions.appendChild(paraEl); // Put the p element to the end of id "questions"
            setTime(paraEl);
            //Upon clicking, the next question will appear
            
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
