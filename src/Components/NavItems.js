import React, { useState, useEffect } from "react";

export default function NavItems() {
  const [dropdownObject, setDropdownObject] = useState([
    { name: "Company" },
    { name: "Product" },
    { name: "Connect" },
  ]);

  const handleDropdown = (id) => {
    const dropdownItems = dropdownObject.filter((item) => {
      if (item.id === id) {
        item.isopen = !item.isopen;
        return item;
      } else {
        item.isopen = false;
        return item;
      }
    });

    setDropdownObject(dropdownItems);
  };
  return (
    <>
      {dropdownObject.map((item, index) => {
        item.id = index;
        return (
          <div className="dropdown">
            <span onClick={() => handleDropdown(item.id)}>{item.name}</span>
            <picture>
              <source
                media="(max-width: 1200px)"
                srcset={"/images/icon-arrow-dark.svg"}
                height="10"
                width="10"
                className={item.isopen === true ? "transform-arrow" : ""}
              />
              <img
                src={"/images/icon-arrow-light.svg"}
                height="10"
                width="10"
                className={item.isopen === true ? "transform-arrow" : ""}
              />
            </picture>

            <div
              className={`dropdown-content ${
                item.isopen === true ? "d-block" : null
              }`}
            >
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        );
      })}
    </>
  );
}
