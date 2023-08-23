import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Featured Product</h2>
            <p>Some of our exclusive collection</p>
          </div>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productdetails">
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://images5.kabum.com.br/produtos/fotos/467535/headset-gamer-hyperx-cloud-iii-dts-drivers-53mm-usb-pc-ps5-ps4-xbox-series-xis-xbox-one-nintendo-switch-mobile-preto-727aa9aa_1692025823_m.jpg"
                    alt=""
                  />
                  <div class="card-body">
                    <p className="product-name-on-card">Lorem Ipsum</p>
                    <p className="product-price-on-card">Price: $1</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://images1.kabum.com.br/produtos/fotos/474991/nobreak-sms-lite-600bi-600va-110v-autonomia-de-55min-preto-0029202_1690804995_m.jpg"
                  alt=""
                />
                <div class="card-body">
                  <p className="product-name-on-card">Lorem Ipsum</p>
                  <p className="product-price-on-card">Price: $1</p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
