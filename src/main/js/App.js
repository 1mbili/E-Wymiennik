import React from "react";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
var ReactDOM = require("react-dom");
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoggingGrid from "./components/LoggingGrid";

const App = () => {
  return <LoggingGrid />;
};

ReactDOM.render(<App />, document.getElementById("react"));
