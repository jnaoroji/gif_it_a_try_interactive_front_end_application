
//declare all variables
var artistButtonsEl = document.querySelectorAll('.box2');
var beatlesButtonEl = document.querySelector('#beatlesbtn');
var adeleButtonEl = document.querySelector('#adelebtn');
var queenButtonEl = document.querySelector('#queenbtn');
var michaelButtonEl = document.querySelector('#michaelbtn');
var modal = document.getElementById("my-modal");
var alertContentEL = document.getElementById("alert-content");
var userScoreEl = document.getElementById("userScore")
var initialEl = document.getElementById("initial")

var InitialSubmitModal = document.getElementById("InitialSubmit-modal")
var homePageRefresh = document.getElementById('homepagerefresh')


var userScore = []
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
    }
}

var getArtistWorks = function (artist){

    var artistApiUrl = artistApiUrls[artist];
    if (!artistApiUrl) {
        alertContentEL.textContent = 'Invalid artist name!'
        alert();
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
            }
            })
            .catch(function () {
            alertContentEL.textContent = 'Unable to connect to Music Brainz'
            alert();
            });
};

var displayGame = function (data) {
    var works = data.works;

    if (!works || works.length === 0) {
        alertContentEL.textContent = 'No works found for this artist'
        alert();
        return;
    }

    // Clear the game area
    
    gifArea.innerHTML = '';

 

    // Displays the titles of the artist's works
    works.forEach(function (work) {
        //removes special characters, parenthesis strings, and numbers from titiles array
        var title = work.title;
        title = title.replace(/[^\w\s]/gi, ''); 
        title = title.replace(/\([^)]*\)/g, ''); 
        title = title.replace(/\d+/g, ''); 
        titles.push(title.trim());
    });

    console.log(titles);

    createGiphyRequest();
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
        }
        })
        .catch(function () {
        alertContentEL.textContent = 'Unable to connect to Music Brainz'
        alert();
        });
};

var displayGif = function (data){
    var gif = data.data.images.original.mp4;

    console.log(gif);
    // counter increments so the game is only played with 5 loops
    counter++;
        
    // check if the game has reached the maximum number of loops
        if (counter > 5) {
            userScoreEl.textContent = 'Your score: ' + score + "/5";
            InitialInput();
            return;
        }
    
    
     // Clear the game area
     gifArea.innerHTML = '';
     gameArea.innerHTML ='';
    // creates gif 
    var divEl = document.createElement("div")
    var gifEl = document.createElement('video');
    gifEl.src = gif;
    gifEl.autoplay = true;
    gifEl.loop = true;
    gifEl.style.maxHeight = "250px";
    divEl.classList.add('p-2.5', 'm-5')

    // creates answer input
    var answerInput = document.createElement('input');
    answerInput.setAttribute('type', 'text');
    answerInput.setAttribute('placeholder', 'Your answer here');
    // Submits on enter keypress
    answerInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          submitEl.click();
        }
      });

    // creates next button
    var cardEl = document.createElement('div')
    var nextEl = document.createElement('button');
    nextEl.setAttribute('style', 'margin-top: 50%')
    nextEl.textContent = "Next Song!";
    nextEl.addEventListener('click', createGiphyRequest);
    
    // creates submit button
    var submitEl = document.createElement('button');
    submitEl.textContent = "Submit";
    submitEl.addEventListener('click', function() {
        var userAnswer = answerInput.value;
    // handle user answer submission, to lowercase and removes special characters
        if (removeSpecialChars(userAnswer).toLowerCase() === removeSpecialChars(searchTerm).toLowerCase()) {
        alertContentEL.textContent = 'Correct!';
        alert();
        score++;
        } else {
            alertContentEL.textContent = 'Incorrect!';
            alert();
        }

        // helper function to remove special characters from a string
        function removeSpecialChars(str) {
        return str.replace(/[^\w\s]/gi, '').trim();
        }

    });
    
    
    cardEl.classList.add('text-center')
    gifArea.appendChild(divEl);
    divEl.appendChild(gifEl);
    gameArea.appendChild(cardEl);

    cardEl.appendChild(nextEl);
    cardEl.appendChild(answerInput);
    cardEl.appendChild(submitEl);

    //answer element appended after gif has been present for 5 seconds, 
    // answer remains for 3 seconds before new giphy request created
    setTimeout(function() {
        var answerEl = document.createElement("p");
        answerEl.textContent = "Answer: " + searchTerm;
        answerEl.setAttribute('style', 'padding: 10px')
        
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

    button.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// InitialInput modal
var InitialInput = function (){

    var button = document.getElementById("initialSubmit-btn");

    InitialSubmitModal.style.display = "block";

    button.onclick = function(event) {
        event.preventDefault();

        var userName = initialEl.value
        localStorage.setItem("userScore", userName + " : " + score + "/5")
        console.log(userName)
        window.location.href = "score.html";
        InitialSubmitModal.style.display = "none";

    }

}
