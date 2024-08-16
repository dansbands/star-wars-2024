import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header";
import FilmList, { CharacterFilms } from "./components/film-list";
import CharacterBio from "./components/character-bio";
import characters from "./util/characters.json";
import loadingGif from "../src/img/bb8.gif";

const { characters: characterChoices } = characters;

const App: React.FC = () => {
  const [error, setError] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [listMode, setListMode] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(characterChoices[0].name);
  const [characterData, setCharacterData] = useState({
    name: "",
    birth_year: "",
    films: [""],
  });
  const [characterFilms, setCharacterFilms] = useState<CharacterFilms[]>([
    {
      title: "",
      episode_id: 0,
      opening_crawl: "",
      director: "",
      producer: "",
      release_date: "",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
      created: "",
      edited: "",
      url: "",
    },
  ]);

  let filmArr: CharacterFilms[] = [];

  useEffect(() => {
    setIsFetching(true);
    if (characterData.films.length > 0) {
      characterData.films.map((film) => {
        fetch(film)
          .then((res) => res.json())
          .then((data) => {
            filmArr = [...filmArr, data];
            setCharacterFilms(filmArr);
            setIsFetching(false);
          });
      });
    }
  }, [characterData]);

  const description = `${listMode ? "List" : "Grid"} of Films, etc.`;

  return (
    <div className="App">
      <Header
        toggleList={setListMode}
        characterChoices={characterChoices}
        dropdownValue={dropdownValue}
        characterData={characterData}
        setCharacterData={setCharacterData}
        setDropdownValue={setDropdownValue}
        setError={setError}
      />
      <body>
        {isFetching ? (
          <div className="loading-view">
            <img src={loadingGif} alt="loading icon" />
          </div>
        ) : (
          <>
            <div>{description}</div>
            {characterData && (
              <>
                <CharacterBio
                  name={characterData.name}
                  birth_year={characterData.birth_year}
                />
              </>
            )}
            <FilmList films={characterFilms} />
          </>
        )}
      </body>
    </div>
  );
};

export default App;
