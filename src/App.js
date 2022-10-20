import React, { Component } from 'react';
import './App.css';
import FilmList from './Components/FilmList';
import Details from './Components/Details';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="App">
        < FilmList films={TMDB.films} />
        < Details films={TMDB.films} />
      </div>
    );
  }
}

export default App;