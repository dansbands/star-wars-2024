import React from 'react'
import loadingGif from "../img/bb8.gif";

const Loading = () => {
  return (
    <div className="loading-view">
      <img src={loadingGif} alt="loading icon" />
    </div>
  );
}

export default Loading