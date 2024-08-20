import React, { useEffect, useState, ChangeEvent } from "react";
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
import { SelectChangeEvent } from "@mui/material";

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

  const currentCharacter = characterChoices.find(
    (choice) => choice.name === dropdownValue
  ) || { url: "" };

  const fetchCharacter = () => {
    if (currentCharacter?.url) {
      fetch(currentCharacter.url)
        .then((res) => {
          if (res.status === 404) {
            setLoadingState("error");
          }
          return res.json();
        })
        .then((json) => setCharacterData(json))
        .catch((err) => setLoadingState("error"));
    }
  };

  const handleDropdownChange = (event: SelectChangeEvent<string>) => {
    setDropdownValue(event.target.value);
  };

  useEffect(() => {
    fetchCharacter();
  }, [dropdownValue]);

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
  }, [characterData]);

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
        handleDropdownChange={handleDropdownChange}
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
