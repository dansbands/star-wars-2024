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
  setError: Dispatch<SetStateAction<string>>;
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
    if (currentCharacter?.url) {
      fetch(currentCharacter.url)
        .then((res) => {
          if (res.status === 404) {
            setError("error");
          }
          return res.json();
        })
        .then((json) => setCharacterData(json))
        .catch((err) => setError("error"));
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
        displayEmpty={true}
        renderValue={() => dropdownValue || "Choose a character..."}
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
