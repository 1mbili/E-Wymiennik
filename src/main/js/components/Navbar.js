import React from "react";
import {
  Bars, Nav, NavBtn,
  NavBtnLink
} from "./navbarElements/NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavBtn>
          <NavBtnLink to="/sign-up" activeStyle>
            Sign Up
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/sign-in" activeStyle>
            Sign In
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
