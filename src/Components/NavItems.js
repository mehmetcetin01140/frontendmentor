import React, { useState,useEffect } from 'react'
import Logo from "../images/logo.svg"
import arrowLight from "../images/icon-arrow-light.svg"

export default function NavItems() {
    const [dropdownObject,setDropdownObject] = useState([{name:"product"},{name:"company"},{name:"dada"}])
    
  
  const handleDropdown = (id) => {
    const dropdownItems = dropdownObject.filter(item => {
      if(item.id === id){
        item.isopen = !item.isopen;
        return item;
      }
      else{
        item.isopen = false;
        return item;
      }
    });

    setDropdownObject(dropdownItems)

  }
  return (
    <>          
    <img src={Logo} />
    {
        dropdownObject.map((item, index)=>{
          item.id = index;
          console.log(item.isopen);
          return(
            <div className='dropdown'>
            <span onClick={()=> handleDropdown(item.id)} className="test-class">
             {item.name}
            </span>
            <div className={`dropdown-content ${item.isopen === true ? "d-block" : null}`}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
          <img src={arrowLight} height="10" width="10" className={item.isopen===true ? "transform-arrow" : ""}/>
          </div>
          )
        })
    }
   
    </>
  )
}
