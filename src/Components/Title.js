import React from "react";
import "../StyleSheets/Title.css";
import { useHistory } from "react-router-dom";

function Title() {
  const history = useHistory();

  return (
    <div className="title">
      <h1 onClick={(e) => history.push("/")}>Coding Manager</h1>
    </div>
  );
}

export default Title;
