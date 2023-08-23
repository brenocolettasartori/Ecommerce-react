import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
                <h2>Product Collection</h2>
                <p>Some of our exclusive collection</p>
            </div>
            <Row>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card w-100">
                    <img className="center w-75" src="https://images.kabum.com.br/produtos/fotos/335197/microsoft-windows-11-home-64-bit-esd-digital-para-download-kw9-00664_1653394847_m.jpg" alt=""/>
                        <div class="card-body">
                            <p className="product-name-on-card">Lorem Ipsum</p>
                            <p className="product-price-on-card">Price: $1</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </Card>
                </Col>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card w-100">
                    <img className="center w-75" src="https://images.kabum.com.br/produtos/fotos/170107/microsoft-windows-10-pro-64-bits-portugues-coem-fqc-08932_1655121243_m.jpg" alt=""/>
                        <div class="card-body">
                            <p className="product-name-on-card">Lorem Ipsum</p>
                            <p className="product-price-on-card">Price: $1</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Collection