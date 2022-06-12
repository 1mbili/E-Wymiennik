import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "regenerator-runtime/runtime";
import sendSignIn from "../api/login.api";
import getWallet from "../api/portfel.api";
import PasswordField from "./PasswordField";
const Login = (props) => {
  const history = useNavigate();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const submitData = {
      username: enteredUsername,
      password: enteredPassword,
    };
    console.log(submitData);
    const a = await sendSignIn(submitData);
    const b = await getWallet(1);

    if (a == "false") {
      alert("Błędne dane");
    }
    console.log(a)
    console.log(b)

    if (a.roles.includes("ROLE_ADMIN")) {
      setIsAdmin(true);
      props.onLogin("admin");
      history("/admin");
    }
    else {
      props.onUserId(a.id)
      props.onLogin("user");
      history("/user");

    }
    setEnteredUsername("");
    setEnteredPassword("");
  };

  const savePasswordInput = (enteredPass) => {
    setEnteredPassword(enteredPass);
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          className="form-control"
          value={enteredUsername}
          placeholder="Enter username"
          onChange={usernameChangeHandler}
        />
      </div>
      <PasswordField onPasswordInput={savePasswordInput}></PasswordField>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
};
export default Login;
