import React, { useState } from "react";
import FilmList, { CharacterFilms } from "../components/film-list";
import { CharacterData } from "../App";
import FilmGrid from "../components/film-grid";
import Modal from "../components/modal";
import { emptyFilm } from "../util/helpers";

type Props = {
  listMode: boolean;
  characterData: CharacterData;
  characterFilms: CharacterFilms[];
};

const Films = ({ listMode, characterData, characterFilms }: Props) => {
  const [currentFilm, setCurrentFilm] = useState<CharacterFilms>(emptyFilm);

  const description = `Films that ${characterData.name} appears in:`;

  return (
    <div className="film-view">
      <div>{description}</div>
      {listMode ? (
        <FilmList setCurrentFilm={setCurrentFilm} films={characterFilms} />
      ) : (
        <FilmGrid setCurrentFilm={setCurrentFilm} films={characterFilms} />
      )}
      <Modal currentFilm={currentFilm} setCurrentFilm={setCurrentFilm} />
    </div>
  );
};

export default Films;
