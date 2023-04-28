// var GiphyApiKey: Tx6284aZTIMxVEBFzICg2PUFWP8R9FCu;
// var MusicBrainzUrl:'https://musicbrainz.org/ws/2/';
//  lookup:   /<ENTITY_TYPE>/<MBID>?inc=<INC>&fmt=json
//  our look up: /<=ARTIST>/<MBID>?inc=<WORKS>&fmt=json
//  browse:   /<RESULT_ENTITY_TYPE>?<BROWSING_ENTITY_TYPE>=<MBID>&limit=<LIMIT>&offset=<OFFSET>&inc=<INC>
//  search:   /<ENTITY_TYPE>?query=<QUERY>&limit=<LIMIT>&offset=<OFFSET>
// Ed Sheeran MBID = b8a7c51f-362c-4dcb-a259-bc6e0095f0a6
// Adele MBID = cc2c9c3c-b7bc-4b8b-84d8-4fbd8779e493
// Snoop Dog MBID = f90e8b26-9e52-4669-a5c9-e28529c47894
// Eminem MBID = b95ce3ff-3d05-4e87-9e01-c97b66af13d4
//"https://api.giphy.com/v1/stickers/translate?api_key=" + apiKey + "&s=" + searchTerm;

//the button id that executes the game
var artistButtonsEl = document.querySelectorAll('.box2');
var beatlesButtonEl = document.querySelector('#beatlesbtn');
var adeleButtonEl = document.querySelector('#adelebtn');
var queenButtonEl = document.querySelector('#queenbtn');
var michaelButtonEl = document.querySelector('#michaelbtn');
var modal = document.getElementById("my-modal");
var alertContentEL = document.getElementById("alert-content");

const artistApiUrls = {
    "michaelbtn": "https://musicbrainz.org/ws/2/artist/2f9ecbed-27be-40e6-abca-6de49d50299e?inc=works&fmt=json",
    "queenbtn": "https://musicbrainz.org/ws/2/artist/0383dadf-2a4e-4d10-a46a-e9e041da8eb3?inc=works&fmt=json",
    "adelebtn": "https://musicbrainz.org/ws/2/artist/cc2c9c3c-b7bc-4b8b-84d8-4fbd8779e493?inc=works&fmt=json",
    "beatlesbtn": "https://musicbrainz.org/ws/2/artist/b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d?inc=works&fmt=json",
  };

var gameArea = document.querySelector('#menu');
var titles = [];
//function that triggers getting the artist works from Music Brains API

var playGame = function (event){
    event.preventDefault();
    
    var artist = event.target.getAttribute('id');
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
    
    gameArea.innerHTML = '';

 

    // Displays the titles of the artist's works
    works.forEach(function (work) {
        var title = work.title;
        titles.push(title);

    });
    console.log(titles);

    var RandomButton = document.createElement("button");
        RandomButton.textContent = "Get Giphy!";
        gameArea.appendChild(RandomButton);
        RandomButton.addEventListener('click', createGiphyRequest);
}

    var createGiphyRequest = function (){
    var searchTerm = titles[Math.floor(Math.random() * titles.length)];
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
    console.log(gif);

     // Clear the game area
     gameArea.innerHTML = '';

    var gifEl = document.createElement('video');
    gifEl.src = gif;
    gifEl.autoplay = true;
    gifEl.loop = true;

    gameArea.appendChild(gifEl);    
 
}

// buttonEl.addEventListener('click', playGame);
artistButtonsEl.forEach(function(button) {
    button.addEventListener('click', playGame);
  });




  //var tailwind alert modal = document.getElementById("my-modal");
var alert = function (){
    var btn = document.getElementById("open-btn");
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
