import React from "react";
import PersonPicker, { PersonPickerProps } from "./person-picker";
import ModeControls, { ModeControlProps } from "./mode-controls";

export type HeaderProps = ModeControlProps & PersonPickerProps;

const Header = ({
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
      <p>Star Wars</p>
      <PersonPicker
        characterChoices={characterChoices}
        dropdownValue={dropdownValue}
        characterData={characterData}
        setCharacterData={setCharacterData}
        setDropdownValue={setDropdownValue}
        setError={setError}
      />
      <ModeControls toggleList={toggleList} />
    </header>
  );
};

export default Header;
