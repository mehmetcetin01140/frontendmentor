import React from 'react'
import Logo from "../images/logo.svg"
import arrowLight from "../images/icon-arrow-light.svg"

export default function NavItems() {
  
  return (
    <>          
    <img src={Logo} />
      <span>
        Company
      </span>
    <img src={arrowLight} height="10" width="10"/>
      <span>
        Company
      </span>
    <img src={arrowLight} height="10" width="10"/>
      <span>
        Connect
      </span>
    <img src={arrowLight} height="10" width="10"/>
    </>
  )
}
