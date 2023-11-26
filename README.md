# Assignment 1 - ReactJS app.

Name: Denis Miculescu (20098078)

## Overview.

The provided code constitutes a React-based movie-related web application with diverse functionalities. The application includes pages such as the homepage, upcoming movies, watchlist, and favorite movies. Users can add and remove movies from their watchlist and favorites, as well as write reviews. Actor information is displayed, and a dedicated page showcases popular actors with a search functionality. Additionally, the movie details page exhibits detailed information about a movie, its cast, and provides other recommended movies.

### Features.

+ Three additonal static endpoints (Top Rated, Movies in Cinema, Popular actors)
+ Search by name function added on Popular Actors page
+ In the more details section of a movie, I implemented two parameterised endpoints, first being the cast of the movie and second being other recommended movies based on the movie selected.

## Setup requirements.

There are no addiontal, non-standard steps required to run the app locally. In a terminal, simply move into the 'movies' directory and run 'npm start'. If this doesn't work, run 'npm install'. Wait for the installation process to finish and try 'npm start' again. 

## API endpoints.

Static endpoints:

+ Top Rated Movies - Displays the highest rated movies on the database. - movies/toprated
+ Movies in Cinema - Shows what movies are out in cinemas right now. - movies/moviesincinema
+ Popular Actors - Provides a list of various popular actors - movies/popularactors

Parameterised endpoints:

+ Cast - Shows what actors were part of the movie - /movie/:id/&append_to_response=credits
+ Recommended Movies - Displays various movie recommendations based on selected movie - /movie/:id/recommendations (This doesn't display properly)

## Routing.

+ /movies/toprated - displays top rated movies in database.
+ /movies/moviesincinema - displays movies currently in cinema.
+ /movies/popularactors - displays various popular actors.