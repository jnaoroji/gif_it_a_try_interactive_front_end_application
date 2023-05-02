var gameIterationData;

// Get the value of the "gameIterationData" key from local storage
gameIterationData = localStorage.getItem("gameIterationData");

// Parse the string representation of the array back into an array
var highScores = JSON.parse(gameIterationData);
console.log(highScores);

// Check if the "gameIteration" array has any values
if (highScores && highScores.length > 0) {
  // Create an unordered list element
  var list = document.createElement("ul");

  // Loop through the "gameIteration" array and create list items for each value
  for (var i = 0; i < highScores.length; i++) {
    // Create a list item for the current iteration
    var listItem = document.createElement("li");

    // Create a span element to display the username
    var usernameSpan = document.createElement("span");
    usernameSpan.textContent = highScores[i].username + ": ";

    // Create a span element to display the score
    var scoreSpan = document.createElement("span");
    scoreSpan.textContent = highScores[i].score;

    // Append the username and score spans to the list item
    listItem.appendChild(usernameSpan);
    listItem.appendChild(scoreSpan);

    // Append the list item to the unordered list
    list.appendChild(listItem);
  }

  // Append the unordered list to the body of the HTML document
  document.body.appendChild(list);
}