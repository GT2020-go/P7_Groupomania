import "./App.css";
import React from "react";
import SignUpPage from "./pages/signup";

function App() {
  const getGreetingMessage = (name) => {
    return "Hello " + name + " from function";
  };
  return (
    <div>
      <h1>{getGreetingMessage("Gaetan")}</h1>
      <div>{SignUpPage()}</div>
    </div>
  );
}

export default App;
