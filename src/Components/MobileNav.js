import React from "react";
import NavItems from "./NavItems";
const MobileNav = ({ hamburger }) => {
  return (
    <div className="mobile-nav-container">
      <div className={`mobile-nav ${hamburger === true ? "d-block" : ""}`}>
        <NavItems></NavItems>
        <hr></hr>
        <div className="login-signup-mobile">
          <span>Login</span>
          <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
