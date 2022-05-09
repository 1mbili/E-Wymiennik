import React, { Component, useState } from "react";
import sendSignUp from "../api/register.api";
const SignUp = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredSecondName, setEnteredSecondName] = useState("");
  const [enteredPESEL, setEnteredPESEL] = useState("");
  const [enteredadres, setEnteredAdres] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const secondNameChangeHandler = (event) => {
    setEnteredSecondName(event.target.value);
  };
  const peselChangeHandler = (event) => {
    setEnteredPESEL(event.target.value);
  };

  const adresChangeHandler = (event) => {
    setEnteredAdres(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const submitData = {
      username: enteredUsername,
      password: enteredPassword,
      email : enteredEmail,
      pesel: enteredPESEL,
      imie: enteredFirstName,
      nazwisko: enteredSecondName,
      adres: enteredadres,
      role: [],
    };
    sendSignUp(submitData);
    console.log(submitData);
    setEnteredUsername("");
    setEnteredPassword("");
    setEnteredFirstName("");
    setEnteredSecondName("");
    setEnteredPESEL("");
    setEnteredEmail("");
    setEnteredAdres("");

  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          value={enteredFirstName}
          onChange={firstNameChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          value={enteredSecondName}
          onChange={secondNameChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value = {enteredEmail}
          onChange={emailChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label>PESEL</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter PESEL"
          value = {enteredPESEL}
          onChange={peselChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label>Adres</label>
        <input
          className="form-control"
          placeholder="Enter Adres"
          value = {enteredadres}
          onChange={adresChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value= {enteredPassword}
          onChange={passwordChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="username"
          className="form-control"
          placeholder="Enter username"
          value = {enteredUsername}
          onChange={usernameChangeHandler}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
};
export default SignUp;
