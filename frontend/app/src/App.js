// import logo from "./logo.svg";
import "./App.scss";

//componens from Layout:
import SignupForm from "./components/user/signup";
import Header from "./components/layout/header";

// single bootstrap elements:
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const App = () => {
  return (
    <div>
      <Header />
      <SignupForm />
    </div>
  );
};

export default App;
