
//declare all variables
var artistButtonsEl = document.querySelectorAll('.box2');
var beatlesButtonEl = document.querySelector('#beatlesbtn');
var adeleButtonEl = document.querySelector('#adelebtn');
var queenButtonEl = document.querySelector('#queenbtn');
var michaelButtonEl = document.querySelector('#michaelbtn');

//object of artist urls on music brainz
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
        alert('please select a new artist')
        //cant use alerts, find a modal for this prompt
    }
}

var getArtistWorks = function (artist){

    var artistApiUrl = artistApiUrls[artist];
    if (!artistApiUrl) {
        alert('Invalid artist name');
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
            alert('Error: ' + response.statusText);
            //cant use alerts
            }
            })
            .catch(function () {
            alert('Unable to connect to Music Brainz');
            // cant use alerts
            });
};

var displayGame = function (data) {
    var works = data.works;

    if (!works || works.length === 0) {
        alert('No works found for this artist');
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
    createGiphyRequest();
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
        alert('Error: ' + response.statusText);
        //cant use alerts
        }
        })
        .catch(function () {
        alert('Unable to connect to Music Brainz');
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
    gifEl.style.maxHeight = "250px";

    gameArea.appendChild(gifEl);    
 
}


artistButtonsEl.forEach(function(button) {
    button.addEventListener('click', playGame);
  });