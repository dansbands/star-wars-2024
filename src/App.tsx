import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header";
import FilmList, { CharacterFilms } from "./components/film-list";
import CharacterBio from "./components/character-bio";
import characters from "./util/characters.json";
import Loading from "./views/loading";
import Idle from "./views/idle";
import Error from "./views/error";

const { characters: characterChoices } = characters;

const App: React.FC = () => {
  const [loadingState, setLoadingState] = useState("idle"); // idle | loading | success | error
  const [listMode, setListMode] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");
  const [characterData, setCharacterData] = useState({
    name: "",
    birth_year: "",
    films: [''],
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
    console.log('characterData.films', characterData.films.length)
    if (characterData.films[0] !== '') {
      setLoadingState('loading');
      characterData?.films.map((film) => {
        fetch(film)
          .then((res) => res.json())
          .then((data) => {
            filmArr = [...filmArr, data];
            setCharacterFilms(filmArr);
            setLoadingState("success");
          })
          .catch((err) => setLoadingState('error'));
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
        setError={() => setLoadingState('error')}
      />
      <body>
        {loadingState === "idle" && <Idle />}
        {loadingState === "loading" && <Loading />}
        {loadingState === "error" && <Error />}
        {loadingState === "success" && (
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
