import React from "react";
import history from "../HistoryContainer/History";

import ProjectListComponent from "../core/ProjectList";

export default function ProjectList(props) {
  {sessionStorage.getItem("department") == null && history.push("/")}
  return (
    <div>
      <h2>Department List</h2>
      <ProjectListComponent  />
    </div>
  );
}
