import React from "react";

const PasswordField = (props) => {

  const passwordChangeHandler = (event) => {
    const insertedPassword = event.target.value;
    props.onPasswordInput(insertedPassword);
  };

  return (
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        onChange={passwordChangeHandler}
      />
    </div>
  );
};

export default PasswordField;
