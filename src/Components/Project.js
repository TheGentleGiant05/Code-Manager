import React, { useState } from "react";
import "../StyleSheets/Project.css";
import add from "./Images/add.svg";

function Project() {
  const [newProject, setNewProject] = useState("");
  const [newTask, setNewTask] = useState("");
  const [projectList, setProjectList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    setProjectList([...projectList, newProject]);
    // alert(`Added Project: ${newProject}`);
    setNewProject("");
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, newTask]);
    // alert(`${newTask} task added to project(x)`);
    setNewTask("");
  };

  const handleMouseEnter = (e) => {
    const inputField = e.target;
    inputField.style = "background-color: #7A7A7A";
  };

  const handleMouseLeave = (e) => {
    const inputField = e.target;
    if (inputField !== document.activeElement) {
      inputField.style = "background-color: #343434";
    }
  };

  return (
    <div className="project">
      <div className="project__div">
        <h2 className="project__title">Projects</h2>
        <div className="project__div--line"></div>
        {/* insert items into list from database */}
        <ul className="project__list">
          {projectList.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <input
          className="project__input"
          type="text"
          value={newProject}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onChange={(e) => setNewProject(e.target.value)}
        />
        <img src={add} onClick={handleProjectSubmit} />
      </div>
      <div className="project__div">
        <h2 className="project__title">Tasks</h2>
        <div className="project__div--line"></div>
        <ul className="project__list">
          {taskList.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <input
          className="project__input"
          type="text"
          value={newTask}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <img src={add} onClick={handleTaskSubmit} />
      </div>
    </div>
  );
}

export default Project;
