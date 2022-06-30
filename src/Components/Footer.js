import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Logo from "../images/logo.svg"
export default function Footer() {
  return (
   <div className="footer-container">
    <Container>
        <Row>
            <Col md={3}>
                <div className="footer-logo">
                <img src={Logo} />
                </div>
            </Col>
            <Col md={3}>
            <h5>Product</h5>
                <ul>
                    <li>
                        Overview
                    </li>
                    <li>
                        Pricing
                    </li>
                    <li>
                        Marketplace
                    </li>
                    <li>
                        Feature
                    </li>
                    <li>
                        Integrations
                    </li>
                </ul>
            </Col>
            <Col md={3}>
            <h5>Company</h5>
                <ul>
                    <li>
                       About
                    </li>
                    <li>
                        Team
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Careers
                    </li>
                </ul>
            </Col>
            <Col md={3}>
            <h5>Connect</h5>
                <ul>
                    <li>
                       Contact
                    </li>
                    <li>
                        Newsletter
                    </li>
                    <li>
                        LinkedIn
                    </li>
                
                </ul>
            </Col>
        </Row>
    </Container>
   </div>
  )
}
