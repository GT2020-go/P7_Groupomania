import React, { component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../actions/authActions";

import { useHistory } from "react-router-dom";

//import logos:
import LogoSolo from "../../Groupomania_Logos/icon.svg";

// Define the user - initial state:
const dataInitialState = {
  email: "",
  password: "",
};

const LogIn = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const [data, setData] = useState(dataInitialState);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent browser from refreshing
    dispatch(login(data));
    setData(dataInitialState);
    history.push("/");
  };

  return (
    <form className="form-login" noValidate onSubmit={handleSubmit}>
      <img
        className="mb-4 mx-auto d-block"
        src={LogoSolo}
        alt="Logo of Groupomania"
        width={72}
        height={72}
      />
      <h3 className="mb-3 font-weight-normal text-center">
        Welcome <br />
        Please sign in
      </h3>
      <p className="text-center">
        Not registered yet ? <a href="#">Signup</a> here
      </p>

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
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
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
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button
        className="btn btn-lg btn-primary btn-block mx-auto d-block"
        type="submit"
      >
        Login
      </button>
      <p className="mt-5 mb-3 text-muted text-center">© 2021</p>
    </form>
  );
};

export default LogIn;
