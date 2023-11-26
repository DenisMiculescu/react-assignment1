import React from "react";
import { getMoviesInCinema } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import Tooltip from '@mui/material/Tooltip';
import { get } from "react-hook-form";

const getMoviesInCinemaPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('incinema', getMoviesInCinema)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

console.log(movies)

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Movies in Cinema"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default getMoviesInCinemaPage;