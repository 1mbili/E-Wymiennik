import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./AdminPage";
import Login from "./login.component";
import Navbar from "./Navbar.js";
import NavbarLogOut from "./NavBarLogOut";
import "./SignRouting.css";
import SignUp from "./signup.component";
import UserPage from "./userPage";

function SignRouting(props) {
  const [czyZalogowany, setCzyZalogowany] = useState("");
  const [userID, setUserID] = useState(-1);
  const saveLoging = (recivedType) => {
    setCzyZalogowany(recivedType);
  };
  const userIdHandler = (id) => {
    setUserID(id);
  } 
  return (
    <Router>
      <div className="App">
        {czyZalogowany=='' && <Navbar />}
        {czyZalogowany=='user' && <NavbarLogOut />}
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login onLogin={saveLoging} onUserId={userIdHandler}/>} />
              <Route path="/sign-in" element={<Login onLogin={saveLoging} onUserId={userIdHandler} />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/admin/*" element={<AdminPage />} />
              <Route path="/user/*" element={<UserPage onUserId={userID}/>} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default SignRouting;
