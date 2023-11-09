var highScoresList = document.querySelector("#highscores");
var clear = document.querySelector("#clear");

var lastHighScores = JSON.parse(window.localStorage.getItem("highScores"));

for (let i = 0; i < lastHighScores.length;i++){
    var liElem = document.createElement('li');
    liElem.innerHTML = lastHighScores[i].initials + " - " + lastHighScores[i].score;
    highScoresList.append(liElem);    
}
clear.addEventListener('click',function(){
    while (highScoresList.hasChildNodes()){
        highScoresList.removeChild(highScoresList.firstChild);
    }
    window.localStorage.clear("highScores");
})