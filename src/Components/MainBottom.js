import React from 'react'
import {Row,Col} from "react-bootstrap"
import laptopImage from "../images/illustration-laptop-desktop.svg"
export default function MainBottom() {
  return (
    <div className="main-bottom">
        <Row>
            <Col md={6}>
               <img src={laptopImage} alt="" />
            </Col>
            <Col md={6} className="text-area">
              <h3>Free, open, simple</h3>
                <p>Blogr is a free and open source application backend by a large community of helpful developers. It supports features
                    such as code syntax higlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with
                    Google Analytics. The architecture is clean and is relatively easy to learn.
                </p>
                <h3>Powerful tooling</h3>
                <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                    capable of producing event the most complicated sites.
                </p>
            </Col>
        </Row>
    </div>
  )
}
