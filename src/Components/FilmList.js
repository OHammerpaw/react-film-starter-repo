import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {
  render() {
        const allFilms = this.props.films.map((film) => {
            return (
                <FilmRow film={film}
                key={film.title} />
            )
        })
    return (
        <div className="film-library">
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        </div>
    );
  }
}

export default FilmList;