import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'

class Favorite extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>My Favorite</h2>
            <p>-</p>
          </div>

          <Row>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://images5.kabum.com.br/produtos/fotos/sync_mirakl/389775/Headset-Com-Fio-Microsoft-Lifechat-USB-LX-3000-Preto-JUG-00013_1692379113_m.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Lorem ipsum
                  </p>
                  <p className="product-price-on-card">Price : $1</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://images9.kabum.com.br/produtos/fotos/sync_mirakl/457049/Smartphone-Motorola-Moto-E13-32GB-2GB-RAM-Tela-De-6-5-4g-Wi-fi-Android-13-Go-C-mera-Traseira-13MP-Frontal-De-5MP-Verde_1690492692_m.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Lorem ipsum
                  </p>
                  <p className="product-price-on-card">Price : $1</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://images0.kabum.com.br/produtos/fotos/sync_mirakl/474870/Notebook-Lenovo-Ideapad-3i-Core-I5-1135g7-RAM-8GB-SSD-512GB-Intel-Iris-Xe-Windows-11-15-6-Polegadas-82md000wbr_1691422121_m.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                  Lorem ipsum
                  </p>
                  <p className="product-price-on-card">Price : $1</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://images4.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244899_m.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                  Lorem ipsum
                  </p>
                  <p className="product-price-on-card">Price : $1</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Favorite;
