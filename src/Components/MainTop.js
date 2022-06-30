import React from 'react'
import Illustration from "../images/illustration-editor-desktop.svg"
import {Container,Row,Col} from "react-bootstrap"
export default function MainTop() {
  return (
    <>
          <h3>Designed for the future</h3>
       <div className='main-flex-items'>
    <Row>
      <Col md={6} xs={12}>
        <div className='text-area'>
            <h4>Introducing an extensible editor</h4>
        <p>
            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports
            management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins
            and themes provide easy ways to add functionality or change the looks of a blog.
        </p>
        <h4>Robus content management</h4>
        <p>
            Flexible content management enables users to easily move throug posts. Increase the usability of your blog by adding customized
            categories, sections , format or flow. With this functionality, you're in full control.
        </p>
        
        </div>
        </Col>
        <Col md={6} xs={12}>
        <div className='image-area'>
        <img src={Illustration} alt="" />
        </div>
        </Col>
       </Row>
       </div>
       </>
  )
}
