import React from 'react'
import NavItems from './NavItems'
import LoginSignUp from './LoginSignUp'
import NavigationCenter from "./NavigationCenter"
export default function Navigation() {

  return (
    <div className='navigation-container'>
        <div className="navigation-bg">
            <div className="bg">
            </div>
        </div>
        <div className="navigation-items">

          <NavItems/>

        <div className="navigation-right">

          <LoginSignUp/>

        </div>
        </div>
        <div className="navigation-center">

        <NavigationCenter/>

        </div>
        </div>
  )
}
