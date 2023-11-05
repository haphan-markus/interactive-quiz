var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");

var quizLength = quiz.length;
console.log("Total number of questions in the quiz: " + quizLength);

// Show time left for answering and show countdown
var timeLeft = 10;
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
        }
    },1000);
    
    // if (timeLeft === 0){
    //     // Stop execution of time countdown
    //     clearInterval(timeInterval);
    // }
    
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
    var userQuestion = document.createElement('p');// Display the question from quiz
    userQuestion.innerHTML = quiz[0].input;
    questionTitle.append(userQuestion);
    userQuestion.setAttribute('class','start');
    
    var button1 = document.createElement('button');// Create button for option 1 and insert content
    button1.innerHTML = quiz[0].option1;
    choices.append(button1);
    button1.setAttribute('data-state','bttnOption');
        
    var button2 = document.createElement('button');// Create button for option 2 and insert content
    button2.innerHTML = quiz[0].option2;
    choices.append(button2);
    button2.setAttribute('data-state','bttnOption');

    var button3 = document.createElement('button');// Create button for option 3 and insert content
    button3.innerHTML = quiz[0].option3;
    choices.append(button3);
    button3.setAttribute('data-state','bttnOption');
    
    var button4 = document.createElement('button');// Create button for option 4 and insert content
    button4.innerHTML = quiz[0].option4;
    choices.append(button4);
    button4.setAttribute('data-state','bttnOption');

    var k = 0; // k indicates the question number in "quiz" array
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var i = 0; 
    var userChoice = [button1, button2, button3, button4];
    
    for (let j = 0; j < userChoice.length; j++){
        let paraEl = document.createElement('p');
        
        userChoice[j].addEventListener('click',function(event){
            if (userChoice[j].textContent === quiz[k].correctAnswer){
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
            setTime(paraEl);
            // Increase the value of k to switch to new Question
            k ++;
            console.log(k);
            // Add if conditional statement to break this loop when all questions have been shown and answered
            // The "questions" div will be hiden, and the "end-screen" div is shown.
            if (k === quizLength) {
                endScreen.setAttribute('class','start');
                endScreen.setAttribute('data-state','hide');
                questions.setAttribute('class','hide');
                clearInterval(timeInterval);
                return;
            }
            
            button1.textContent = quiz[k].option1;
            button2.textContent = quiz[k].option2;
            button3.textContent = quiz[k].option3;
            button4.textContent = quiz[k].option4;
            userQuestion.textContent = quiz[k].input;
        })
    }
    console.log("Final value of k: " + k);
    
    
    
};

// Function to set time of the notice "Wrong!" or "Correct. Congratulations!" if their answer is correct or not
function setTime(i){
    var secondLeft = 2;
    i.setAttribute('class','');
    setInterval(function(){
        secondLeft--;
        if (secondLeft === 0){
            clearInterval();
            i.setAttribute('class','hide');
        }
    },1000)
}