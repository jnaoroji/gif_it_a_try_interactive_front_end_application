var GiphyApiKey: 'Tx6284aZTIMxVEBFzICg2PUFWP8R9FCu';
var MusicBrainzUrl:'https://musicbrainz.org/ws/2/';
//  lookup:   /<ENTITY_TYPE>/<MBID>?inc=<INC>&fmt=json
//  our look up: /<=ARTIST>/<MBID>?inc=<WORKS>&fmt=json
//  browse:   /<RESULT_ENTITY_TYPE>?<BROWSING_ENTITY_TYPE>=<MBID>&limit=<LIMIT>&offset=<OFFSET>&inc=<INC>
//  search:   /<ENTITY_TYPE>?query=<QUERY>&limit=<LIMIT>&offset=<OFFSET>


//the button id that executes the game
var snoopButtonEL = document.querySelector('#snoop');

//the event function that triggers the game
var playSnoopGame = function (event){
    event.preventDefault();
// clear landing page 
    var artist = snoopButtonEL.getAttribute('id');

    if (artist){
        getArtistWorks(artist);
        //clear where its going to render
    } else{
        alert('please select a new artist')
        //cant use alerts, find a modal for this prompt
    }
}

var getArtistWorks = function (works){
    var snoopApiUrl = "https://musicbrainz.org/ws/2/artist/f90e8b26-9e52-4669-a5c9-e28529c47894?inc=works&fmt=json";
    
    fetch(SnoopApiUrl)
        .then(function (response) {
        if (response.ok) {
            response.json().then(function (works) {
            console.log(works);
            displaySnoopGame(works);
            
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


snoopButtonEl.addEventListener('click', playSnoopGame);