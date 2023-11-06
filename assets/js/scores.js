var highScores = document.querySelector("#highscores");
var clear = document.querySelector("#clear");
var liElem = document.createElement('li');

highScores.append(liElem);

var userInitials = JSON.parse(localStorage.getItem("names"));
var userScore = JSON.parse(localStorage.getItem("result"));

liElem.innerHTML = userInitials + " - " + userScore;

clear.addEventListener('click',function(){
    highScores.innerHTML = "";
})