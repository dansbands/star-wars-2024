import { Dispatch, SetStateAction } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";

export type ModeControlProps = {
  toggleList: Dispatch<SetStateAction<boolean>>;
};

const ModeControls = ({ toggleList }: ModeControlProps) => {
  return (
    <div className="mode-controls">
      <button className="mode-button" onClick={() => toggleList(false)}>
        <GridViewIcon />
      </button>
      <button className="mode-button" onClick={() => toggleList(true)}>
        <FormatListBulletedIcon />
      </button>
    </div>
  );
};

export default ModeControls;
