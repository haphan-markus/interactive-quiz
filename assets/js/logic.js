var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var submitButton = document.getElementById("submit");
var initials = document.getElementById("initials");
var feedback = document.getElementById("feedback");

var quizLength = quiz.length;

var userQuestion = document.createElement('p');
var button1 = document.createElement('button');
var button2 = document.createElement('button');
var button3 = document.createElement('button');
var button4 = document.createElement('button');

var timeLeft = 120; // Show time left for answering and show countdown
var time = document.querySelector('#time');
time.innerHTML = timeLeft;

startButton.addEventListener('click',answerQuestion);

function answerQuestion(){
    // Set coundown function
    var timeInterval = setInterval(function(){
        timeLeft--;
        time.innerHTML = timeLeft;
        if (timeLeft === 0){
            clearInterval(timeInterval); // Stop execution of time countdown
            return [
                endScreen.setAttribute('class','start'),
                questions.setAttribute('class','hide'),
                finalScore.innerHTML = timeLeft,
                time.innerHTML = timeLeft
            ];
        }
    },1000);
    
    startScreen.setAttribute("class",'hide');// Hide start-screen div
    
    questions.setAttribute('class','start');// Show questions div
    
    var k = 0; // k indicates the question number in "quiz" array

    userQuestion.innerHTML = quiz[k].input;// Display the question from quiz
    questionTitle.append(userQuestion);
    userQuestion.setAttribute('class','start');
    
    button1.innerHTML = quiz[k].option1; // Create button for option 1 and insert content
    choices.append(button1);
        
    button2.innerHTML = quiz[k].option2; // Create button for option 2 and insert content
    choices.append(button2);

    button3.innerHTML = quiz[k].option3; // Create button for option 3 and insert content
    choices.append(button3);
    
    button4.innerHTML = quiz[k].option4;// Create button for option 4 and insert content
    choices.append(button4);

    var userChoice = [button1, button2, button3, button4];
    
    userChoice.forEach(function(elem){
        elem.addEventListener('click',function(){
            if (elem.textContent === quiz[k].correctAnswer){
                feedback.innerText = "Correct. Congratulations!";
                } else {
                feedback.innerText = "Wrong!";
                timeLeft = timeLeft - 10;
            }
            setTime(feedback);
            
            k ++;// Increase the value of k to switch to new Question
            console.log("Question number: " + k);
            // Add if conditional statement to break this loop when all questions have been shown and answered
            // The "questions" div is hiden, and the "end-screen" div is shown.
            if (k === quizLength) {
                endScreen.setAttribute('class','start');
                questions.setAttribute('class','hide');
                clearInterval(timeInterval);
                finalScore.innerHTML = timeLeft;
                time.innerHTML = timeLeft;
                return;
            }
            userQuestion.textContent = quiz[k].input;
            button1.textContent = quiz[k].option1;
            button2.textContent = quiz[k].option2;
            button3.textContent = quiz[k].option3;
            button4.textContent = quiz[k].option4;
        })
    })
    submitButton.addEventListener('click',function(event){
        event.preventDefault();
        var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
        var names = initials.value.trim();
        console.log(names);
        
        var NewScore = {
            score: timeLeft,
            initials: names
        };
        highScores.push(NewScore);
               
        localStorage.setItem("highScores", JSON.stringify(highScores));
        window.open('highscores.html');
    });
};

// Function to set time of the notice "Wrong!" or "Correct. Congratulations!" if their answer is correct or not
function setTime(i){
    var secondLeft = 1;
    i.setAttribute('class','feedback');
    setInterval(function(){
        secondLeft--;
        if (secondLeft === 0){
            clearInterval();
            i.setAttribute('class','hide');
        }
    },1000)
    return secondLeft;
}