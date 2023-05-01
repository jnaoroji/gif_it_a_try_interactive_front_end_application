
//declare all variables
var artistButtonsEl = document.querySelectorAll('.box2');
var beatlesButtonEl = document.querySelector('#beatlesbtn');
var adeleButtonEl = document.querySelector('#adelebtn');
var queenButtonEl = document.querySelector('#queenbtn');
var michaelButtonEl = document.querySelector('#michaelbtn');
var modal = document.getElementById("my-modal");
var alertContentEL = document.getElementById("alert-content");
var scoreBtn = document.getElementById("score")
var scoreModalEl = document.getElementById("score-modal")

//object of artist urls on music brainz
const artistApiUrls = {
    "michaelbtn": "https://musicbrainz.org/ws/2/artist/2f9ecbed-27be-40e6-abca-6de49d50299e?inc=works&fmt=json",
    "queenbtn": "https://musicbrainz.org/ws/2/artist/0383dadf-2a4e-4d10-a46a-e9e041da8eb3?inc=works&fmt=json",
    "adelebtn": "https://musicbrainz.org/ws/2/artist/cc2c9c3c-b7bc-4b8b-84d8-4fbd8779e493?inc=works&fmt=json",
    "beatlesbtn": "https://musicbrainz.org/ws/2/artist/b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d?inc=works&fmt=json",
  };

var gifArea = document.querySelector('#menu');
var gameArea = document.querySelector('.box1');
var titles = [];
var searchTerm = "";
var counter = 0;
var score = 0;

//function that triggers getting the artist works from Music Brains API

var playGame = function (event){
    event.preventDefault();
    
    var artist = event.target.getAttribute('id');
    // pick artist name stored in local storage
    var pickedArtist = event.target.textContent
    localStorage.setItem("artistName", pickedArtist)
    
    console.log(artist);

    if (artist){
        getArtistWorks(artist);
        
    } else{
        alertContentEL.textContent = 'please select a new artist'
        alert();
        //alert('please select a new artist');
        //cant use alerts, find a modal for this prompt
    }
}

var getArtistWorks = function (artist){

    var artistApiUrl = artistApiUrls[artist];
    if (!artistApiUrl) {
        alertContentEL.textContent = 'Invalid artist name!'
        alert();
        //alert('Invalid artist name!');
        //cant use alerts, find a modal for this prompt
        return;
    }
    
    fetch(artistApiUrl)
        .then(function (response) {
        if (response.ok) {
            response.json().then(function (works) {
            console.log(works);
            
            displayGame(works);
            
            });
            } else {
            alertContentEL.textContent = 'Error: ' + response.statusText
            alert();
            //alert('Error: ' + response.statusText)
            //cant use alerts
            }
            })
            .catch(function () {
            alertContentEL.textContent = 'Unable to connect to Music Brainz'
            alert();
            //alert('Unable to connect to Music Brainz');
            // cant use alerts
            });
};

var displayGame = function (data) {
    var works = data.works;

    if (!works || works.length === 0) {
        alertContentEL.textContent = 'No works found for this artist'
        alert();
        //alert('No works found for this artist');
        // cant use alerts
        return;
    }

    // Clear the game area
    
    gifArea.innerHTML = '';

 

    // Displays the titles of the artist's works
    works.forEach(function (work) {
        var title = work.title;
        titles.push(title);

    });
    console.log(titles);

    createGiphyRequest();


    var RandomButton = document.createElement("button");

    // get picked artist name from local storage and click to start
    var artistName = localStorage.getItem("artistName")
    RandomButton.innerHTML = artistName + '<br>' + 'Click to Start!';
    RandomButton.classList.add('box2','hover:font-bold');

    gameArea.appendChild(RandomButton);
    RandomButton.addEventListener('click', createGiphyRequest);

}

    var createGiphyRequest = function (){
    searchTerm = titles[Math.floor(Math.random() * titles.length)];
    console.log("answer= " + searchTerm);
    var giphyUrl = "https://api.giphy.com/v1/gifs/translate?api_key=Tx6284aZTIMxVEBFzICg2PUFWP8R9FCu&s=" + searchTerm;
    
   
  
    fetch(giphyUrl)
    .then(function (response) {
    if (response.ok) {
        response.json().then(function (gif) {
        console.log(gif);
        displayGif(gif);
        
        
        });
        } else {
        alertContentEL.textContent = 'Error: ' + response.statusText
        alert();
        //alert('Error: ' + response.statusText);
        //cant use alerts
        }
        })
        .catch(function () {
        alertContentEL.textContent = 'Unable to connect to Music Brainz'
        alert();
        //alert('Unable to connect to Music Brainz');
        // cant use alerts
        });
};

var displayGif = function (data){
    var gif = data.data.images.original.mp4;

    // can we get a fix height for each gif?
    //var gif = data.data.images.fixed_height.mp4;
    console.log(gif);
    // counter increments so the game is only played with 5 loops
        counter++;
        
        // check if the game has reached the maximum number of loops
        if (counter > 5) {
            // stop the game and display the score
            //GE SU YOU NEED TO ADD SCORE HERE
            var scoreEl = document.createElement('p');
            scoreEl.textContent = 'Your score: ' + score + "/5";
            gameArea.appendChild(scoreEl);//maybe in a modal Ge?
            return;
        }
    
     // Clear the game area
     gifArea.innerHTML = '';
     gameArea.innerHTML ='';
    // creates gif 
    var gifEl = document.createElement('video');
    gifEl.src = gif;
    gifEl.autoplay = true;
    gifEl.loop = true;
    gifEl.style.maxHeight = "250px";

    // creates answer input
    var answerInput = document.createElement('input');
    answerInput.setAttribute('type', 'text');
    answerInput.setAttribute('placeholder', 'Enter your answer here');

    // creates next button
    var nextEl = document.createElement('button');
    nextEl.textContent = "Next Song!";
    nextEl.addEventListener('click', createGiphyRequest);
    
    // creates submit button
    var submitEl = document.createElement('button');
    submitEl.textContent = "Submit";
    submitEl.addEventListener('click', function() {
    var userAnswer = answerInput.value;
    // handle user answer submission
    if (userAnswer.toLowerCase() === searchTerm.toLowerCase()) {
        alert('Correct!');
        score++;
    } else {
        alert('Incorrect!');
    }
    });
    
    
    
    gifArea.appendChild(gifEl);
    gameArea.appendChild(nextEl);
    gameArea.appendChild(answerInput);
    gameArea.appendChild(submitEl);

    //answer element appended after gif has been present for 5 seconds, 
    // answer remains for 3 seconds before new giphy request created
    setTimeout(function() {
        var answerEl = document.createElement("p");
        answerEl.textContent = "Answer: " + searchTerm;
        
        gameArea.appendChild(answerEl);
        // remove the answerEl after 3 seconds
        setTimeout(function() {
            gameArea.removeChild(answerEl);
            createGiphyRequest();
        }, 3000);
    }, 5000);
 
}


artistButtonsEl.forEach(function(button) {
    button.addEventListener('click', playGame);
  });




  //var tailwind alert modal = document.getElementById("my-modal");
var alert = function (){
    var button = document.getElementById("ok-btn");

    modal.style.display = "block";

      // close modal when the OK button
    button.onclick = function() {
        modal.style.display = "none";
    }

// close modal when clicks anywhere outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// score modal
scoreBtn.addEventListener("click", function(){
    score();
})

var score = function (){
    var button = document.getElementById("close-btn");

    scoreModalEl.style.display = "block";

      // close modal when the OK button
    button.onclick = function() {
        scoreModalEl.style.display = "none";
    }

// close modal when clicks anywhere outside the modal
    window.onclick = function(event) {
        if (event.target == scoreModalEl) {
            scoreModalEl.style.display = "none";
        }
    }
}