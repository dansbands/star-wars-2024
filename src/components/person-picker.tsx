import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

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
  setError: Dispatch<SetStateAction<boolean>>;
};

const PersonPicker = ({
  characterChoices = [],
  dropdownValue,
  characterData,
  setDropdownValue,
  setCharacterData,
  setError,
}: PersonPickerProps) => {
  const currentCharacter = characterChoices.find(
    (choice) => choice.name === dropdownValue
  ) || { url: "" };

  // console.log("characterData", characterData);
  // console.log("currentCharacter", currentCharacter);

  const fetchCharacter = () => {
    if (currentCharacter.url) {
      fetch(currentCharacter.url)
        .then((res) => res.json())
        .then((json) => setCharacterData(json))
        .catch((err) => setError(err));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(event.target.value);
    fetchCharacter();
  };

  useEffect(() => {
    fetchCharacter();
  }, [dropdownValue]);

  return (
    <>
      <select value={dropdownValue} onChange={handleChange}>
        {characterChoices?.map((char) => {
          return (
            <option key={char.url} value={char.name}>
              {char.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default PersonPicker;
