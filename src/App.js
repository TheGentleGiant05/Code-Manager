// stylesheet
import "./App.css";
// components
import Project from "./Components/Project";
import Title from "./Components/Title";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/projects">
            <Title />
            <div className="span-components">
              <Sidebar />
              <Project />
            </div>
          </Route>
          <Route path="/">
            {/* <Intro /> */}
            <Title />
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
