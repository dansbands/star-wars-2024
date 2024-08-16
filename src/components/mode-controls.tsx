import { Dispatch, SetStateAction } from "react";

export type ModeControlProps = {
  toggleList: Dispatch<SetStateAction<boolean>>;
};

const ModeControls = ({ toggleList }: ModeControlProps) => {
  return (
    <>
      <button onClick={() => toggleList(true)}>List</button>
      <button onClick={() => toggleList(false)}>Panel</button>
    </>
  );
};

export default ModeControls;
