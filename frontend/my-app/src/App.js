// // import React from "react";
// // import logo from "./logo.svg";
// // import { Counter } from "./features/counter/Counter";
// // import "./App.css";

// // //MD objects import:
// // import { makeStyles } from "@material-ui/core/styles";
// // import AppBar from "@material-ui/core/AppBar";
// // import Toolbar from "@material-ui/core/Toolbar";
// // import Typography from "@material-ui/core/Typography";
// // import Button from "@material-ui/core/Button";
// // import IconButton from "@material-ui/core/IconButton";
// // import MenuIcon from "@material-ui/icons/Menu";

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     flexGrow: 1,
// //   },
// //   menuButton: {
// //     marginRight: theme.spacing(2),
// //   },
// //   title: {
// //     flexGrow: 1,
// //   },
// // }));

// // function App() {
// //   const classes = useStyles();
// //   return (
// //     <div className="App">
// //       <AppBar position="static">
// //         <Toolbar>
// //           <IconButton
// //             edge="start"
// //             className={classes.menuButton}
// //             color="inherit"
// //             aria-label="menu"
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" className={classes.title}>
// //             News
// //           </Typography>
// //           <Button color="inherit">Login</Button>
// //         </Toolbar>
// //       </AppBar>
// //       <Button variant="contained" color="primary">
// //         Hello World
// //       </Button>
// //       <main className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <Counter />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <span>
// //           <span>Learn </span>
// //           <a
// //             className="App-link"
// //             href="https://reactjs.org/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             React
// //           </a>
// //           <span>, </span>
// //           <a
// //             className="App-link"
// //             href="https://redux.js.org/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Redux
// //           </a>
// //           <span>, </span>
// //           <a
// //             className="App-link"
// //             href="https://redux-toolkit.js.org/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Redux Toolkit
// //           </a>
// //           ,<span> and </span>
// //           <a
// //             className="App-link"
// //             href="https://react-redux.js.org/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             React Redux
// //           </a>
// //         </span>
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

// import { Navbar } from "./app/Navbar";

// import { PostsList } from "./features/posts/PostsList";
// import { AddPostForm } from "./features/posts/AddPostForm";
// import { SinglePostPage } from "./features/posts/SinglePostPage";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="App">
//         <Switch>
//           <Route
//             exact
//             path="/"
//             render={() => (
//               <React.Fragment>
//                 <AddPostForm />
//                 <PostsList />
//               </React.Fragment>
//             )}
//           />
//           <Route exact path="/posts/:postId" component={SinglePostPage} />
//           <Redirect to="/" />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

//----------ONLY For login tuorial:--------------
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
