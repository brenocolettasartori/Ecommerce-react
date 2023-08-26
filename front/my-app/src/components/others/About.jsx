import React, { Component, Fragment } from 'react'
import { Container, Row, Col,} from 'react-bootstrap'

class About extends Component {
  render() {
    return (
        <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <h4 className="section-title-login">About us</h4>
              <p className="section-title-contact">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi laudantium placeat dolorem voluptate dolor modi voluptatibus explicabo corrupti aspernatur illo.
              <br></br><br></br>
              Cum iure repellat error officia recusandae temporibus maxime natus assumenda?
              <br></br><br></br>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem ex debitis aperiam aliquam provident repellendus quibusdam cupiditate officiis
              <br></br>
              molestias dolorum cumque totam nesciunt excepturi fugiat, suscipit aliquid error rem.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default About