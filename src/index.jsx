import React from 'react';
import { render } from 'react-dom';
import './style.css';

import './movies.js';

import Header from './Components/Header';
import Movie from './Components/Movie';
import MovieList from './Components/MovieList';
import movies from './movies.js';

const App = () => (
  <>
    <Header />
    <MovieList movies={movies} />
  </>
);

render(<App />, document.querySelector('#app'));
