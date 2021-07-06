import React, { useState, useEffect } from "react";
import "../StyleSheets/Project.css";
import add from "./Images/add.svg";
import xIcon from "./Images/x-symbol.svg";
import firebase from "../firebase";

function Project() {
  const [newProject, setNewProject] = useState("");
  const [newTask, setNewTask] = useState("");
  const [projectList, setProjectList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [currentProject, setCurrentProject] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // function to get project list from database
  const fetchData = () => {
    // es6 arrow function
    const ref = firebase.database().ref("projects"); // get reference to part of db we want
    ref.on("value", (snapshot) => {
      // fire this code block on any value change in this section of db
      let data = snapshot.val(); // save value of object that is tied to the reference point we specified earlier
      let newList = []; // empty list to append data to later
      for (let d in data) {
        // for-loop to append each project to the array from the line above
        newList.push(data[d].project); // .push adds each item that for-loop passes over into array
      }
      // console.log(newList);
      setProjectList(newList);
    });
  };

  // function to update current project useState variable
  const updateCurrentProject = (e) => {
    // runs on onClick for any project listed on the screen
    const projectName = e.target;
    const projs = document.getElementsByTagName("p");
    for (let i = 0; i < projs.length; i++) {
      projs[i].className = "";
    }
    projectName.className = "project__list-selected-item";
    // set currentProject useState var
    const proj = e.target.innerText;
    setCurrentProject(proj);
    // console.log(currentProject);
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    setProjectList([...projectList, newProject]);
    const projectsRef = firebase.database().ref("projects/");
    const project = {
      project: newProject,
      tasks: taskList,
    };
    projectsRef.push(project);
    // alert(`Added Project: ${newProject}`);
    setNewProject("");
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    let projectRef = firebase
      .database()
      .ref("projects/")
      .orderByChild("project")
      .equalTo(currentProject);
    if (newTask !== "") {
      if (currentProject !== "") {
        setTaskList([...taskList, newTask]);
        setNewTask("");
      } else {
        alert("Please select a project before adding a task :)");
      }
    } else {
      alert("Please fill in the field before submitting :)");
    }
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

  const handleRemoveTask = (index) => {
    let newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const handleRemoveProject = (index) => {
    let clickedProject = projectList[index];
    // removing from the UI
    let newProjectList = [...projectList];
    newProjectList.splice(index, 1);
    setProjectList(newProjectList);
    // removing from the DB
    let projectRef = firebase.database().ref("projects/");
    projectRef.remove();
  };

  return (
    <div className="project">
      <div className="project__div">
        <h2 className="project__title">Projects</h2>
        <div className="project__div--line"></div>
        {/* insert items into list from database */}
        <ul className="project__list">
          {projectList.map((item, index) => {
            return (
              <li key={index}>
                <p onClick={(e) => updateCurrentProject(e)}>{item}</p>
                <img
                  src={xIcon}
                  className="x-icon"
                  onClick={() => handleRemoveProject(index)}
                />
              </li>
            );
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
        <img src={add} onClick={handleProjectSubmit} className="add-icon" />
      </div>
      <div className="project__div">
        <h2 className="project__title">Tasks</h2>
        <div className="project__div--line"></div>
        <ul className="project__list">
          {taskList.map((item) => {
            return (
              <li key={item}>
                {item}
                <img
                  src={xIcon}
                  className="x-icon"
                  onClick={() => handleRemoveTask}
                />
              </li>
            );
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
        <img src={add} onClick={handleTaskSubmit} className="add-icon" />
      </div>
    </div>
  );
}

export default Project;
