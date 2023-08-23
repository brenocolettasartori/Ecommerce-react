import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

class Categories extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Categories</h2>
          </div>
          <Row>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <div class="card-body">
                    <img
                      className="center"
                      src="https://www.kabum.com.br/core/_next/image?url=https://static.kabum.com.br/conteudo/categorias/PERIFERICOS.png&w=384&h=280&q=70"
                      alt=""
                    />
                    <h5 className="category-name">Peripherals</h5>
                    </div>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <div class="card-body">
                    <img
                      className="center"
                      src="https://www.kabum.com.br/core/_next/image?url=https://static.kabum.com.br/conteudo/categorias/CAMERAS-E-DRONES_1659439533.png&w=384&h=280&q=70"
                      alt=""
                    />
                    <h5 className="category-name">Office</h5>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Categories;
