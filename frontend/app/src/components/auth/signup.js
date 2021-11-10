import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signup } from "../../actions/authActions";

import { useHistory, Link } from "react-router-dom";
//import logos:
import LogoSolo from "../../Groupomania_Logos/icon.svg";

// Define the user - initial state:
const userInitialState = {
  name: "",
  email: "",
  password: "",
  id: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  const [user, setUser] = useState(userInitialState);

  const history = useHistory();
  const handleSubmit = (e) => {
    // e.preventDefault(); // prevent browser from refreshing
    dispatch(signup(user));
    setUser(userInitialState);
    history.push("/login");
  };

  return (
    <form className="form-signup" noValidate onSubmit={handleSubmit}>
      <img
        className="mb-4 mx-auto d-block"
        src={LogoSolo}
        alt="Logo of Groupomania"
        width={72}
        height={72}
      />
      <h3 className="mb-3 font-weight-normal text-center">
        New user? <br />
        Create an account
      </h3>
      <p className="text-center">
        Already have an account? <Link to="/login">Login</Link> here
      </p>
      <label htmlFor="inputName" className="sr-only">
        First Name
      </label>
      <input
        type="name"
        id="inputName"
        className="form-control"
        placeholder="John"
        required
        autoFocus
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="@"
        required
        autoFocus
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="*****"
        required
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        className="btn btn-lg btn-primary btn-block mx-auto d-block"
        type="submit"
      >
        Sign up
      </button>
      <p className="mt-5 mb-3 text-muted text-center">© 2021</p>
    </form>
  );
};

export default SignUp;
