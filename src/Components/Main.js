import React from "react";
import "../StyleSheets/Main.css";
import { useHistory } from "react-router-dom";

function Main() {
  const history = useHistory();

  return (
    <div className="main">
      <div className="main__row">
        <div
          onClick={(e) => history.push("/projects")}
          className="main__column"
        >
          Projects
        </div>
        <div className="main__column">Work Timer</div>
      </div>
      <div className="main__row">
        <div className="main__column">Plan Day</div>
        <div
          onClick={(e) => history.push("/habit-tracker")}
          className="main__column"
        >
          Habit Tracker
        </div>
      </div>
    </div>
  );
}

export default Main;
