var form = document.getElementById("search-form");
var movieName = document.getElementById("movie-title");
var apiKey = "4bb13579";

form.addEventListener("submit", function(evt) {
  // this is overrides the form's default behavior and users our custom logic below
  evt.preventDefault();
  // on form submit, call the performMovieSearch function
  performMovieSearch();
});

function performMovieSearch() {
  // To support movie titles with multiple words,
  // replace whitespaces with `+` to work with the request formatting of OMDb API
  query = movieName.value.split(' ').join('+');
  url = "http://www.omdbapi.com/?apikey="+ apiKey + "&" + "s=" + query;

  // make an external GET request to OMDb
  xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = processRequest;
}

// ADD ERROR HANDLING HERE
function processRequest(e) {
  // readyState 4 means the request is complete
  if (xhr.readyState == 4) {
    // Parse the JSON response here so we can more easily see the data that comes back from OMDb
    response = JSON.parse(xhr.responseText);

    // Append each of the movies that come back from our search to the DOM so we can see the results!
    var displayData = document.getElementById("search-results");

    for (var i = 0; i < response["Search"].length; i++) {
      movieObject = response["Search"][i];
      var title = movieObject["Title"];
      
      displayData.innerHTML += "<div>" + "<h3>" + title + "</h3>" + "<button onclick=handleFavoriteClickEvent({title:response['Search'][" + i + "]['Title'],oid:response['Search'][" + i + "]['imdbID']})>Favorite?</button>" + "</div>" + "</br>";
      // displayMovieDetails(response["Search"][i]);
    }
  }
}

function displayMovieDetails(movie) {
  var movieDetails = document.getElementById("movie-details");
  movieDetails.innerHTML += "<div>" + movie["Title"] + " " + movie["Year"] + "</div>" + "</br>"
}

function handleFavoriteClickEvent(params) {
  xhr = new XMLHttpRequest();
  xhr.open("POST", "/favorites", true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(JSON.stringify(params));

  xhr.onreadystatechange = processFavoriteRequest;
}

function processFavoriteRequest(e) {
  if (xhr.readyState == 4) {
    // Parse the JSON response here so we can more easily see the data that comes back from OMDb
    var response = JSON.parse(xhr.responseText);
    alert("Congrats, You've favorited " + response["title"] + "!!");
  }
}
