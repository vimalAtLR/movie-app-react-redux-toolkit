import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

function MovieListing() {
  const movies = useSelector(state => state.movies.movies)

  return (
    <div className='movie-wrapper'>
      <div className="movie-list">
      <h2>Movies</h2>
        <div className="movie-container">
          {movies?.length && movies.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
          })}
        </div>
      </div>
    </div>
  )
}

export default MovieListing
