var highScores = document.querySelector("#highscores");
var clear = document.querySelector("#clear");
// var liElem = document.createElement('li');

// highScores.append(liElem);

var userRecord = [];
userRecord.push({name: JSON.parse(localStorage.getItem("names")),
                result: JSON.parse(localStorage.getItem("result"))});
console.log(userRecord);

// var userInitials = JSON.parse(localStorage.getItem("names"));
// var userScore = JSON.parse(localStorage.getItem("result"));

for (let i = 0; i < userRecord.length;i++){
    var liElem = document.createElement('li');
    liElem.innerHTML = userRecord[i].name + " - " + userRecord[i].result;
    highScores.append(liElem);    
}
// liElem.innerHTML = userInitials + " - " + userScore;

clear.addEventListener('click',function(){
    highScores.innerHTML = "";
    userRecord =[];
})