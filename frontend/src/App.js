import React from "react";
import "./App.css";
import ProjectList from './pages/ProjectList';
import { Switch, Route } from "react-router-dom";
import history from "./HistoryContainer/History";
import { Router } from "react-router-dom";
import  ProjectPage from './pages/ProjectPage';
import LoginModule from './pages/LoginModule'
import NavTabs from "./pages/NavTabs";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <NavTabs/>
        <Switch>
          <Route path="/" exact component={LoginModule} />
          <Route path="/department" exact component={ProjectList} />
          <Route path="/department/:department" component={ProjectPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
