import React from "react";
import FilmList, { CharacterFilms } from "../components/film-list";
import { CharacterData } from "../App";
import FilmGrid from "../components/film-grid";

type Props = {
  listMode: boolean;
  characterData: CharacterData;
  characterFilms: CharacterFilms[];
};

const Films = ({ listMode, characterData, characterFilms }: Props) => {
  const description = `Films that ${characterData.name} appears in:`;

  return (
    <div className="film-view">
      <div>{description}</div>
      {listMode ? (
        <FilmList films={characterFilms} />
      ) : (
        <FilmGrid films={characterFilms} />
      )}
    </div>
  );
};

export default Films;
