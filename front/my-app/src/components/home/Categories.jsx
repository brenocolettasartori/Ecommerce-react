import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from 'axios'
import appURL from '../../api/appURL'
import { Link } from "react-router-dom";


class Categories extends Component {

  constructor() {
    super();
    this.state = {
      MenuData:[],
    }
  }

  componentDidMount() {
    axios.get(appURL.AllCategory)
    .then(response => {
      this.setState({MenuData:response.data});
    }).catch(error => {

    })
  }

  render() {

    const catList = this.state.MenuData;
    const myView = catList.map((catList, i) => {
      return <Col className="p-0" key={1} xl={2} lg={2} md={2} sm={6} xs={6}>
          <Link to={"/recommended/" + catList.category_name}>
          <Card className="h-100 w-100 text-center">
            <div class="card-body">
            <img
              className="center"
              src={catList.category_image}
              alt=""
            />
            <h5 className="category-name">{catList.category_name}</h5>
            </div>
          </Card>
          </Link>
        </Col>
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Categories</h2>
          </div>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Categories;
