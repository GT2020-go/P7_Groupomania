// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.scss";

// //componens from Layout:
// import SignUp from "./components/auth/signup";
// import Header from "./components/layout/header";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         {SignUp}
//       </div>
//     );
//   }
// }

// export default App;

import React, { useEffect } from "react";
import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUp from "./components/auth/signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
