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

var adeleButtonEl = document.querySelector('#adelebtn');
var gameArea = document.querySelector('#menu');
var titles = [];
//function that triggers getting the artist works from Music Brains API

var playAdeleGame = function (event){
    event.preventDefault();

    var artist = adeleButtonEl.getAttribute('id');

    if (artist){
        getArtistWorks(artist);
        
    } else{
        alert('please select a new artist')
        //cant use alerts, find a modal for this prompt
    }
}

var getArtistWorks = function (){
    var adeleApiUrl = "https://musicbrainz.org/ws/2/artist/cc2c9c3c-b7bc-4b8b-84d8-4fbd8779e493?inc=works&fmt=json";

   
    fetch(adeleApiUrl)
        .then(function (response) {
        if (response.ok) {
            response.json().then(function (works) {
            console.log(works);
            
            displayAdeleGame(works);
            
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

var displayAdeleGame = function (data) {
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

    gameArea.appendChild(gifEl);    
 
}

adeleButtonEl.addEventListener('click', playAdeleGame);