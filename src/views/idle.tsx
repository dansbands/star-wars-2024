import React from "react";
import rebels from "../img/rebels.png";

const IdleView = () => {
  return (
    <div className="idle-view">
      <div className="idle-container">
        <h1>Welcome!</h1>
        <h2>Choose a Character</h2>
        <h2>Using the Menu Above</h2>
        <img src={rebels} className="idle-image" alt="rebel alliance logo" />
      </div>
    </div>
  );
};

export default IdleView;
