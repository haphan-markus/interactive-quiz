var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var submitButton = document.getElementById("submit");
var initials = document.getElementById("initials");

var quizLength = quiz.length;
console.log("Total number of questions in the quiz: " + quizLength);

var userQuestion = document.createElement('p');
var button1 = document.createElement('button');
var button2 = document.createElement('button');
var button3 = document.createElement('button');
var button4 = document.createElement('button');

// Show time left for answering and show countdown
var timeLeft = 120;
var time = document.querySelector('#time');
time.innerHTML = timeLeft;

startButton.addEventListener('click',answerQuestion);

function answerQuestion(event){
    // Set coundown function
    var timeInterval = setInterval(function(){
        timeLeft--;
        time.innerHTML = timeLeft;
        if (timeLeft === 0){
            // Stop execution of time countdown
            clearInterval(timeInterval);
            return;
        }
    },1000);
    // Hide start-screen div
    startScreen.setAttribute("class",'hide');
    
    // Show questions div
    questions.setAttribute('class','start');
    
    // Display the question from quiz
    userQuestion.innerHTML = quiz[0].input;
    questionTitle.append(userQuestion);
    userQuestion.setAttribute('class','start');
    
    // Create button for option 1 and insert content
    button1.innerHTML = quiz[0].option1;
    choices.append(button1);
    button1.setAttribute('data-state','bttnOption');
        
    // Create button for option 2 and insert content
    button2.innerHTML = quiz[0].option2;
    choices.append(button2);
    button2.setAttribute('data-state','bttnOption');

    // Create button for option 3 and insert content
    button3.innerHTML = quiz[0].option3;
    choices.append(button3);
    button3.setAttribute('data-state','bttnOption');
    
    // Create button for option 4 and insert content
    button4.innerHTML = quiz[0].option4;
    choices.append(button4);
    button4.setAttribute('data-state','bttnOption');

    var k = 0; // k indicates the question number in "quiz" array
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var userChoice = [button1, button2, button3, button4];
    var paraEl = document.createElement('p');
    
    userChoice.forEach(function(elem){
        elem.addEventListener('click',function(){
            if (elem.textContent === quiz[k].correctAnswer){
                paraEl.innerText = "Correct. Congratulations!"
                correctAnswer ++;
                console.log('Total correct answers:' + correctAnswer);
                } else {
                paraEl.innerText = "Wrong!";
                timeLeft = timeLeft - 10;
                wrongAnswer ++;
                console.log("Total wrong answers: " + wrongAnswer);
            }
            questions.appendChild(paraEl); // Put the "p" element to the end of id "questions"
            // paraEl.setAttribute('class','feedback');
            setTime(paraEl);
            // Increase the value of k to switch to new Question
            k ++;
            console.log(k);
            // Add if conditional statement to break this loop when all questions have been shown and answered
            // The "questions" div is hiden, and the "end-screen" div is shown.
            if (k === quizLength) {
                endScreen.setAttribute('class','start');
                questions.setAttribute('class','hide');
                clearInterval(timeInterval);
                finalScore.innerHTML = timeLeft;
                time.innerHTML = timeLeft;
                localStorage.setItem("result", timeLeft);
                console.log("Final value of timeleft: " + timeLeft);
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
        var names = initials.value.trim();
        console.log(names);
        localStorage.setItem("names", JSON.stringify(names));
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
}