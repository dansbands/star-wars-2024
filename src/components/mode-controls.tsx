import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import { ModeControlProps } from "../util/types";

const ModeControls = ({ listMode, toggleList }: ModeControlProps) => {
  return (
    <div className="mode-controls">
      <button
        className={listMode ? "mode-button" : "mode-button active-button"}
        onClick={() => toggleList(false)}
      >
        <GridViewIcon />
      </button>
      <button
        className={listMode ? "mode-button active-button" : "mode-button"}
        onClick={() => toggleList(true)}
      >
        <FormatListBulletedIcon />
      </button>
    </div>
  );
};

export default ModeControls;
