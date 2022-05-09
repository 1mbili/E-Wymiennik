import React, { useState } from "react";
import PasswordField from "./PasswordField";
import sendSignIn from "../api/login.api";
import 'regenerator-runtime/runtime'

const Login = (props) => {

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const submitHandler = async(event) => {
    event.preventDefault();

    const submitData = {
      username : enteredUsername,
      password : enteredPassword
    }
    console.log(submitData);
    let a = await sendSignIn(submitData);
    if (a == "403"){
      alert("Błędne dane");
    }
    setEnteredUsername("");
    setEnteredPassword("");
  };


  const savePasswordInput = (enteredPass) => {
    setEnteredPassword(enteredPass)
  } 

    return (
      <form onSubmit={submitHandler}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input className="form-control" value = {enteredUsername} placeholder="Enter username" onChange={usernameChangeHandler} />
        </div>
        <PasswordField onPasswordInput={savePasswordInput} ></PasswordField>
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
}
export default Login;