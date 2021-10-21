import React from "react";

import Movie from '../Movie'; 
import './style.css';

const MovieList = ({movies}) => (
    <>
    <div className="movie-list">
        { movies.map ( movie => <li><Movie title={movie.title} poster={movie.poster} year={movie.year} rating={movie.rating} director={movie.director} genre={movie.genre} /></li> ) }
    </div>
    </>
);

export default MovieList;