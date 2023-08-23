import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class Cart extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2>Product Cart List</h2>
          </div>
          <Row>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                      <img
                        className="cart-product-img"
                        src="https://images6.kabum.com.br/produtos/fotos/147806/caixa-de-som-portatil-jbl-240w-bluetooth-partybox310_1669207090_m.jpg"
                      />
                    </Col>
                    <Col md={6} lg={6} sm={6} xs={6}>
                      <h5 className="product-name">Lorem ipsum</h5>
                      <h6> Quantity = 05 </h6>
                      <h6>Price = 05 x 100 = 5000$</h6>
                    </Col>
                    <Col md={3} lg={3} sm={12} xs={12}>
                      <input
                        placeholder="1"
                        className="form-control text-center"
                        type="number"
                      />
                      <Button className="btn btn-block w-100 mt-3  site-btn">
                        <i className="fa fa-trash-alt"></i> Remove{" "}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                      <img className="w-100 h-100" src="" />
                    </Col>
                    <Col md={6} lg={6} sm={6} xs={6}>
                      <h5 className="product-name">Lorem ipsum</h5>
                      <h6> Quantity = 05 </h6>
                      <h6>Price = 05 x 100 = 5000$</h6>
                    </Col>
                    <Col md={3} lg={3} sm={12} xs={12}>
                      <input
                        placeholder="1"
                        className="form-control text-center"
                        type="number"
                      />
                      <Button className="btn btn-block w-100 mt-3  site-btn">
                        <i className="fa fa-trash-alt"></i> Remove{" "}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                      <img className="w-100 h-100" src="" />
                    </Col>
                    <Col md={6} lg={6} sm={6} xs={6}>
                      <h5 className="product-name">Lorem ipsum</h5>
                      <h6> Quantity = 05 </h6>
                      <h6>Price = 05 x 100 = 5000$</h6>
                    </Col>
                    <Col md={3} lg={3} sm={12} xs={12}>
                      <input
                        placeholder="1"
                        className="form-control text-center"
                        type="number"
                      />
                      <Button className="btn btn-block w-100 mt-3  site-btn">
                        <i className="fa fa-trash-alt"></i> Remove{" "}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                      <img className="w-100 h-100" src="" />
                    </Col>

                    <Col md={6} lg={6} sm={6} xs={6}>
                      <h5 className="product-name">Lorem ipsum</h5>
                      <h6> Quantity = 05 </h6>
                      <h6>Price = 05 x 100 = 5000$</h6>
                    </Col>

                    <Col md={3} lg={3} sm={12} xs={12}>
                      <input
                        placeholder="1"
                        className="form-control text-center"
                        type="number"
                      />
                      <Button className="btn btn-block w-100 mt-3  site-btn">
                        <i className="fa fa-trash-alt"></i> Remove{" "}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={4} lg={4} sm={6} xs={6}>
                      <h5> Total Item = X </h5>
                      <h5>Total Price = $XXXXXXXX</h5>
                      <Button className="btn btn-block w-100 mt-3  site-btn">
                        <i className="fa fa-shopping-cart"></i> Check out{" "}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Cart;
