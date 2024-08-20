import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header";
import { CharacterFilms } from "./components/film-list";
import characters from "./util/characters.json";
import Loading from "./views/loading";
import Idle from "./views/idle";
import Error from "./views/error";
import Films from "./views/films";
import { emptyCharacter, emptyFilm } from "./util/helpers";
import { CharacterData } from "./util/types";

const { characters: characterChoices } = characters;

const App = () => {
  const [loadingState, setLoadingState] = useState("idle"); // idle | loading | success | error
  const [listMode, setListMode] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");
  const [characterData, setCharacterData] =
    useState<CharacterData>(emptyCharacter);
  const [characterFilms, setCharacterFilms] = useState<CharacterFilms[]>([
    emptyFilm,
  ]);

  let filmArr: CharacterFilms[] = [];

  useEffect(() => {
    if (characterData?.films?.length > 0) {
      setLoadingState("loading");
      characterData?.films.map((film) => {
        return fetch(film)
          .then((res) => res.json())
          .then((data) => {
            filmArr = [...filmArr, data];
            setCharacterFilms(filmArr);
            setLoadingState("success");
          })
          .catch((err) => setLoadingState("error"));
      });
    }
  }, [characterData, dropdownValue]);

  return (
    <div className="App">
      <Header
        listMode={listMode}
        toggleList={setListMode}
        characterChoices={characterChoices}
        dropdownValue={dropdownValue}
        characterData={characterData}
        setCharacterData={setCharacterData}
        setDropdownValue={setDropdownValue}
        setError={() => setLoadingState("error")}
      />
      <main>
        {loadingState === "idle" && <Idle />}
        {loadingState === "loading" && <Loading />}
        {loadingState === "error" && <Error />}
        {loadingState === "success" && (
          <Films
            listMode={listMode}
            characterData={characterData}
            characterFilms={characterFilms}
          />
        )}
      </main>
    </div>
  );
};

export default App;
