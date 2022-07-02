import React, { useState } from "react";
export default function LoginSignUp(props) {
  const [isTrue, setIsTrue] = useState(false);
  const hamburgerReturner = () => {
    props.hamburger(isTrue);
    if (isTrue === true) {
      return (
        <img
          src={"/images/icon-close.svg"}
          alt=""
          height={"40px"}
          width={"40px"}
        />
      );
    } else {
      return (
        <img
          src={"/images/icon-hamburger.svg"}
          alt=""
          height={"40px"}
          width={"40px"}
        />
      );
    }
  };
  const returnHamburger = hamburgerReturner();
  return (
    <>
      <div className="login-signup">
        <span>Login</span>
        <span>Sign Up</span>
      </div>
      <div className="icon" onClick={() => setIsTrue(!isTrue)}>
        {returnHamburger}
      </div>
    </>
  );
}
