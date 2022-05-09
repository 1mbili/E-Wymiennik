import React, { Component } from 'react'

const PasswordField = (props) =>{

    let insertedPassword = ""

    const passwordChangeHandler = (event) => {
        insertedPassword=event.target.value;
        props.onPasswordInput(event.target.value)
    }

    return (
        <div className="mb-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={passwordChangeHandler}
        /></div>
    );
}

export default PasswordField;