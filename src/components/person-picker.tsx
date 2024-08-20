import React, { useEffect } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel } from "@mui/material";
import { PersonPickerProps } from "../util/types";

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
    <div className="select-container">
      <InputLabel className="hidden" id="label">Age</InputLabel>
      <Select
        className="person-picker"
        label="label"
        id="select"
        value={dropdownValue}
        onChange={handleChange}
        displayEmpty={true}
        renderValue={() => dropdownValue || "Choose a character..."}
        sx={{
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
    </div>
  );
};

export default PersonPicker;
