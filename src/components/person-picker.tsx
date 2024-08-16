import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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

  const fetchCharacter = () => {
    if (currentCharacter.url) {
      fetch(currentCharacter.url)
        .then((res) => res.json())
        .then((json) => setCharacterData(json))
        .catch((err) => setError(err));
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setDropdownValue(event.target.value);
    fetchCharacter();
  };

  useEffect(() => {
    fetchCharacter();
  }, [dropdownValue]);

  return (
    <>
      <Select
        value={dropdownValue}
        onChange={handleChange}
        sx={{
          width: 400,
          height: 40,
          backgroundColor: "white",
        }}
      >
        {characterChoices?.map((char) => {
          return (
            <MenuItem key={char.url} value={char.name}>
              {char.name}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default PersonPicker;
