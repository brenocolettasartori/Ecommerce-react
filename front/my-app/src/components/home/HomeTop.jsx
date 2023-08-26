import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from './Slider'

class HomeTop extends Component {

  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
            <Row>
                <Col lg={9} md={9} sm={12}>
                <Slider/>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTop