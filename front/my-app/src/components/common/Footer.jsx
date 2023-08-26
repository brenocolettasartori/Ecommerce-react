import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
        <Container>
            <Row className="px-0 my-5">
                <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                    <h5 className="footer-menu-title">Office address</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>Email: support@example.com</p>
                    <h5 className="footer-menu-title">Social Link</h5>
                    <a href=""><i className="fab m-1 h4 fa-facebook"></i></a>
                    <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                    <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
                </Col>
                <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                    <h5 className="footer-menu-title">Lorem ipsum</h5>
                    <Link to="/about" className="footer-link">About us</Link><br></br>
                    <Link to="/contact" className="footer-link">Contact us</Link><br></br>
                </Col>
                <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                    <h5 className="footer-menu-title">More info</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>
            </Row>
        </Container>
        <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
          <Row>
            <h6 className='text-white'>© Copyright 2023 by React e-commerce. All rights reserved.</h6>
          </Row>
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default Footer