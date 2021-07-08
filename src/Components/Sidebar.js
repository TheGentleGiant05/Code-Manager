import React from "react";
import "../StyleSheets/Sidebar.css";
import home from "./Images/home.svg";
import projects from "./Images/projects.svg";
import plan from "./Images/plan.svg";
import habits from "./Images/habits.svg";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const history = useHistory();

  return (
    <div>
      <ul className="sidebar__list">
        <li className="sidebar__list__item" onClick={(e) => history.push("/")}>
          <img src={home} />
          <a href="#">Home</a>
        </li>
        <li
          className="sidebar__list__item"
          onClick={(e) => history.push("/projects")}
        >
          <img src={projects} />
          <a href="#">Projects</a>
        </li>
        <li
          className="sidebar__list__item"
          onClick={(e) => history.push("/plan")}
        >
          <img src={plan} />
          <a href="#">Plan</a>
        </li>
        <li
          className="sidebar__list__item"
          onClick={(e) => history.push("/habit-tracker")}
        >
          <img src={habits} />
          <a href="#">Habits</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
