import { Dispatch, SetStateAction } from "react";
import { CharacterFilms } from "./film-list";
import { formatDate, numerals, posters } from "../util/helpers";

type Props = {
  setCurrentFilm: Dispatch<SetStateAction<CharacterFilms>>;
  films: CharacterFilms[];
};

const FilmGrid = ({ setCurrentFilm, films }: Props) => (
  <>
    <div className="card-row">
      {films.map((film) => {
        return (
          <div className="movie-card" onClick={() => setCurrentFilm(film)}>
            <img
              src={posters[film.episode_id - 1]}
              alt="poster"
              className="image-card"
            />
            <div className="movie-caption">
              <h6>Episode {numerals[film.episode_id - 1]}: </h6>
              <h4>{film.title}</h4>
              <h6>Release Date: {formatDate(film.release_date)}</h6>
            </div>
          </div>
        );
      })}
    </div>
  </>
);

export default FilmGrid;
