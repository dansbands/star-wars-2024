import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel, SelectChangeEvent } from "@mui/material";
import { PersonPickerProps } from "../util/types";

const PersonPicker = ({
  characterChoices = [],
  dropdownValue,
  setDropdownValue,
}: PersonPickerProps) => {
  
  const handleDropdownChange = (event: SelectChangeEvent<string>) => {
    setDropdownValue(event.target.value);
  };

  return (
    <div className="select-container">
      <InputLabel className="hidden" id="label">
        Age
      </InputLabel>
      <Select
        className="person-picker"
        label="label"
        id="select"
        value={dropdownValue}
        onChange={handleDropdownChange}
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
