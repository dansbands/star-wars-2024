import React from "react";
import PersonPicker from "./person-picker";
import ModeControls from "./mode-controls";
import logo from "../../src/img/logo.jpg";
import { HeaderProps } from "../util/types";

const Header = ({
  listMode,
  toggleList,
  characterChoices,
  dropdownValue,
  characterData,
  setCharacterData,
  setDropdownValue,
  setError,
}: HeaderProps) => {
  return (
    <header className="App-header">
      <img className="logo" alt="star wars logo" src={logo} />
      <PersonPicker
        characterChoices={characterChoices}
        dropdownValue={dropdownValue}
        characterData={characterData}
        setCharacterData={setCharacterData}
        setDropdownValue={setDropdownValue}
        setError={setError}
      />
      <ModeControls listMode={listMode} toggleList={toggleList} />
    </header>
  );
};

export default Header;
