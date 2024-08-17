import { Dispatch, SetStateAction } from "react";
import { CharacterFilms } from "./film-list";
import { formatDate, numerals, posters } from "../util/helpers";

type Props = {
  films: CharacterFilms[];
  setCurrentFilm: Dispatch<SetStateAction<CharacterFilms>>;
};

const FilmGrid = ({ films, setCurrentFilm }: Props) => {
  return (
    <>
      <div className="card-row">
        {films.map((film) => {
          const episode = `Episode ${numerals[film.episode_id - 1]}`;
          return (
            <div
              key={film.episode_id}
              className="movie-card"
              onClick={() => setCurrentFilm(film)}
            >
              <img
                src={posters[film.episode_id - 1]}
                alt="poster"
                className="image-card"
              />
              <div className="movie-caption">
                <h6>{episode}: </h6>
                <h4>{film.title}</h4>
                <h6>Release Date: {formatDate(film.release_date)}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilmGrid;
