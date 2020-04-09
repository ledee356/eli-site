
var id1 = getParameterByName('id1')
var id2 = getParameterByName('id2')

fetch('https://www.omdbapi.com/?apikey=6d6fa250&i=' + id1 )
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(id1);
        console.log(jsonData);
        render('.movie-one', jsonData);
    });

fetch('https://www.omdbapi.com/?apikey=6d6fa250&i=' + id2 )
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(id1);
        console.log(jsonData);
        render('.movie-two', jsonData);
    });


function render (parentSelector, data) {
    var yearSpan = document.querySelector('.year .value' + parentSelector);
    var posterElement = document.querySelector('.poster .value' + parentSelector);
    var titleSpan = document.querySelector('.comp_title .value' + parentSelector);
    var directorSpan = document.querySelector('.director .value' + parentSelector);
    var writerSpan = document.querySelector('.writer .value' + parentSelector);
    var actorSpan = document.querySelector('.actor .value' + parentSelector);
    var awardSpan = document.querySelector('.award .value' + parentSelector);
    var descriptionSpan = document.querySelector('.description .value' + parentSelector);
    var releaseSpan = document.querySelector('.release .value' + parentSelector);

    yearSpan.innerText = data.Year;
    posterElement.src = data.Poster;
    titleSpan.innerText = data.Title;
    directorSpan.innerText = data.Director;
    writerSpan.innerText = data.Writer;
    actorSpan.innerText = data.Actors;
    awardSpan.innerText = data.Awards;
    descriptionSpan.innerText = data.Plot;
    releaseSpan.innerText = data.Released;
}

// get query parameter from url
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
