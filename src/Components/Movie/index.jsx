import React from "react";

import './style.css';

const Movie = ({title, poster, year, rating, director, genre}) => (
    <>
    <div className="movie">
        <div className="movie-img-wrapper">
            <img className="movie-img" src={'/assets/' + poster} alt="" />
        </div>
        <div className="movie-description">
            <h2>{title}</h2>
            <p>Year: {year}</p>
            <p>Rating: {rating}</p>
            <p>Director: {director}</p>
            <p>Genre: {genre}</p>
        </div>
    </div>
    </>
  );

  export default Movie;