import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

import loginUser from "./components/loginUser";
import signupUser from "./components/signupUser";

function App() {
  const getGreetingMessage = (name) => {
    return "Hello " + name + " from function";
  };
  return (
    <div>
      <h1>{getGreetingMessage("Gaetan")}</h1>
    </div>
  );
}

export default App;
