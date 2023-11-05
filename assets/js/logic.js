var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");

var quizLength = quiz.length;
console.log("Total number of questions in the quiz: " + quizLength);

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
    var userQuestion = document.createElement('p');
    userQuestion.innerHTML = quiz[0].input;
    questionTitle.append(userQuestion);
    userQuestion.setAttribute('class','start');
    
    var button1 = document.createElement('button');
    button1.innerHTML = quiz[0].option1;
    choices.append(button1);
    button1.setAttribute('data-state','bttnOption');
        
    var button2 = document.createElement('button');
    button2.innerHTML = quiz[0].option2;
    choices.append(button2);
    button2.setAttribute('data-state','bttnOption');

    var button3 = document.createElement('button');
    button3.innerHTML = quiz[0].option3;
    choices.append(button3);
    button3.setAttribute('data-state','bttnOption');
    
    var button4 = document.createElement('button');
    button4.innerHTML = quiz[0].option4;
    choices.append(button4);
    button4.setAttribute('data-state','bttnOption');

    var k = 0;
    var i = 0;
    var userChoice = [button1, button2, button3, button4];
    for (let j = 0; j < userChoice.length; j++){
        let paraEl = document.createElement('p');
        
        userChoice[j].addEventListener('click',function(event){
            if (userChoice[j].textContent === quiz[k].correctAnswer){
                paraEl.innerText = "Correct. Congratulations!"
                } else {
                paraEl.innerText = "Wrong!"
            }
            questions.appendChild(paraEl); // Put the p element to the end of id "questions"
            setTime(paraEl);
            //Upon clicking, the next question will appear
            k ++;
            console.log(k);
            button1.textContent = quiz[k].option1;
            button2.textContent = quiz[k].option2;
            button3.textContent = quiz[k].option3;
            button4.textContent = quiz[k].option4;
            userQuestion.textContent = quiz[k].input;
        })
    }
});

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
