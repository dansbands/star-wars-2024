import React from "react";
import errorImg from "../img/vader.png";

const ErrorView = () => {
  return (
    <div className="error-view">
      <a href="/">
        <img src={errorImg} alt="loading icon" />
        <p>Something went wrong...</p>
        <h1>I find your lack of faith disturbing</h1>
      </a>
    </div>
  );
};

export default ErrorView;
