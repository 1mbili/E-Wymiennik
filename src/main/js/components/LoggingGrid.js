import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./LoggingGrid.css";
import SignRouting from "./SignRouting";
import "./SignRouting.css";

function LoggingGrid() {
  return (
    <div>
      <div className="container mt-3">
      <SignRouting />
      </div>
    </div>
  );
}

export default LoggingGrid;
