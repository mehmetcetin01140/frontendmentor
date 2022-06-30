import React from 'react'
import iconHamburger from "../images/icon-hamburger.svg"
export default function LoginSignUp() {
  return (
    <>
        <div className='login-signup'>
      <span>
            Login
              </span>
       <span>
             Sign Up
               </span>
        </div>
       <div className="icon">
       <img src={iconHamburger} alt="" height={"40px"} width={"40px"} />
       </div>

        </>
  )
}
