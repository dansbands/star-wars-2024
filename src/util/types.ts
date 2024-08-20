import { Dispatch, SetStateAction } from "react";
import { CharacterFilms } from "../components/film-list";

export type LoadingStates = "idle" | "loading" | "success" | "error";

export type CharacterData = {
  name: string;
  birth_year: string;
  films: string[];
};

export type PersonPickerProps = {
  characterChoices?: { name: string; url: string }[];
  dropdownValue: string;
  characterData: { name: string; birth_year: string; films: string[] };
  setCharacterData: Dispatch<
    SetStateAction<{
      name: string;
      birth_year: string;
      films: string[];
    }>
  >;
  setDropdownValue: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
};

export type FilmsProps = {
  listMode: boolean;
  characterData: CharacterData;
  characterFilms: CharacterFilms[];
};

export type ModeControlProps = {
  listMode: boolean;
  toggleList: Dispatch<SetStateAction<boolean>>;
};

export type HeaderProps = ModeControlProps &
  PersonPickerProps & { loadingState: LoadingStates };
