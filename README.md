## Open Movie Database Search App
Code by Jacqueline Potts

The app is up and running on Heroku at: https://open-movie-database-search-app.herokuapp.com/

Github Repo here: https://github.com/jpotts244/open-movie-database-search-app

## About the App
This app was written using `Ruby` and `Sinatra` on the backend and vanilla `JavaScript` on the client side.

## Setup
To run this app locally, follow the following steps
### Install Sinatra and other dependencies
```
bundle install
```
### Run the Sinatra Server
```
ruby app.rb
```

The application will be running locally at: https://localhost:4567


## To Dos and Improvements
This by all means is not a finished project, below are some hopes and dreams for future iterations:
 - Finish the on click movie detail feature. Currently, movie details are shown at the bottom of the page after a search has been
 completed. I wanted to add CSS to initially hide and on-click of the parent element, show the movie details.
 - Add styling and CSS, the UI for this app is not the best it could be.
 - Have the favorites page return a more user friendly HTML view rather than JSON object.
 - Add a link to return to the main page when a user is on the `/favorites` page.  
 - Refactor and better organize the client side `JavaScript`.
 - Add error handling for API requests, we want our user to know if the movie they search for is not found in OMDb or if the request params are in the incorrect format. Having error handling will also allow us to more easily debug whats going on in the code and what we can expect from our API calls.
