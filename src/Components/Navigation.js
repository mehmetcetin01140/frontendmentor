import React, { useState } from "react";
import NavItems from "./NavItems";
import LoginSignUp from "./LoginSignUp";
import NavigationCenter from "./NavigationCenter";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
export default function Navigation() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="navigation-container">
      <div className="navigation-bg">
        <div className="bg"></div>
      </div>
      <div className="navigation-items">
        <Logo />
        <NavItems />
        <div className="navigation-right">
          <LoginSignUp hamburger={setHamburger} />
        </div>
        <div className="mobile-container">
          <MobileNav hamburger={hamburger} />
        </div>
      </div>
      <div className="navigation-center">
        <NavigationCenter />
      </div>
    </div>
  );
}
