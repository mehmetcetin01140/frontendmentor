import React, { useState,useEffect } from 'react'
import Logo from "../images/logo.svg"
import arrowLight from "../images/icon-arrow-light.svg"

export default function NavItems() {
    const [dropdownObject,setDropdownObject] = useState({
      product:false,
      company:false,
      connect:false,  
    })
 
    
  return (
    <>          
    <img src={Logo} />
    <div className='dropdown'>
      <span onClick={()=>setDropdownObject({...dropdownObject,product: !dropdownObject.product })}>
        Product
      </span>
      <div className={`dropdown-content ${dropdownObject.product ===true ? "d-block" : null}`}>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
    <img src={arrowLight} height="10" width="10" className={dropdownObject.product ? "transform-arrow" : ""}/>
    </div>
    <div className='dropdown'>
      <span onClick={()=>setDropdownObject({...dropdownObject,company: !dropdownObject.company })}>
        Company
      </span>
      <div className={`dropdown-content ${dropdownObject.company ===true ? "d-block" : null}`}>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
    <img src={arrowLight} height="10" width="10" className={dropdownObject.company ? "transform-arrow" : ""}/>
    </div>
    <div className='dropdown'>
      <span onClick={()=>setDropdownObject({...dropdownObject,connect: !dropdownObject.connect })}>
        Connect
      </span>
      <div className={`dropdown-content ${dropdownObject.connect ===true ? "d-block" : null}`}>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
    <img src={arrowLight} height="10" width="10" className={dropdownObject.connect ? "transform-arrow" : ""}/>
    </div>
   
    </>
  )
}
