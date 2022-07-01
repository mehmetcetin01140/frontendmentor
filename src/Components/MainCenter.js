import React from 'react'
import {Container} from "react-bootstrap"
import illusPhones from "../images/illustration-phones.svg"
export default function MainCenter() {
  return (
    <div className='main-center'>
      <Container className='d-flex justify-content-center align-items-center'>
        <div className="d-flex">
      <div className='phone-image'>
      <img src={illusPhones} />
      </div>
      <div className="main-text">
          <span>
          State of the Art Infrastructure
          </span>
          <p>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your
            site will load instantly, no matter where your readers are keeping your site competitive.
          </p>
      </div>
        </div>
      </Container>
    </div>
  )
}
