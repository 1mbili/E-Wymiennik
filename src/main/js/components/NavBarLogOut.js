import axios from 'axios';
import React from "react";
import {
  Bars, Nav, NavBtn,
  NavBtnLink
} from "./navbarElements/NavbarElements";


const NavbarLogOut = () => {
  
  const logOutHandler = () => {
    axios.get(apiUrl + '/delcookie', {withCredentials: true}).then(res => {
      window.location="/"
  })  }

  return (
    <>
      <Nav>
        <Bars />

        <NavBtn>
          <NavBtnLink onClick={logOutHandler} to="/" activeStyle>
            Log out
          </NavBtnLink>
          <NavBtnLink  to="/user" activeStyle>
            Deposit Money
          </NavBtnLink>
          <NavBtnLink to="/user" activeStyle>
            Withdraw money
    
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavbarLogOut;
