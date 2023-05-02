var gameIterationData = [];
var highEl = document.getElementById('high');


// Get the value of the "gameIterationData" key from local storage
gameIterationData = localStorage.getItem("gameIterationData")||[];

// Parse the string representation of the array back into an array
var highScores = JSON.parse(gameIterationData);
console.log(highScores);

// Check if the "gameIteration" array has any values
if (highScores && highScores.length > 0) {
  // loop for each li in highscores array
  for (var i = 0; i < highScores.length; i++) {

    var Highli = document.createElement("li");

    // displays username from highscores array
    var usernameSpan = document.createElement("span");
    usernameSpan.textContent = highScores[i].userName + ": ";

    // displays score from highscore array
    var scoreSpan = document.createElement("span");
    scoreSpan.textContent = highScores[i].userScore;

    // appends username and score to li
    Highli.appendChild(usernameSpan);
    Highli.appendChild(scoreSpan);

    // Append the list item to the ordered list
    highEl.appendChild(Highli);
  }

  
}