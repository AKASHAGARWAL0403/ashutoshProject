import React from "react";
import history from "../HistoryContainer/History";

import ProjectPageComponent from "../core/ProjectPage";

export default function ProjectPage({match}) {
  {sessionStorage.getItem("department") == null && history.push("/")}
  return (
    <div>
      <h2>Project List</h2>
      <ProjectPageComponent match={match}/>
    </div>
  );
}
